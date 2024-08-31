// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {ISmartInvoiceFactory} from "@smartinvoicexyz/contracts/interfaces/ISmartInvoiceFactory.sol";

contract GigManager is EIP712 {
    struct Gig {
        uint256 gigId;
        bytes32 details;
        uint256 minPrice;
        uint256 maxPrice;
        address token;
        bool isOpen;
        address client;
        uint256 deadline;
    }

    struct Proposal {
        uint256 proposalId;
        uint256 gigId;
        bytes32 details;
        uint256[] milestoneAmounts;
        address token;
        address provider;
        bool isAccepted;
        uint256 deadline;
    }

    address public immutable escrowFactory;
    address public immutable escrowResolver;
    address public immutable wrappedNativeToken;

    uint256 public constant ONE_YEAR = 365 * 24 * 60 * 60;
    uint8 public constant escrowResolverType = 0;
    bool public constant escrowNeedsVerification = false;
    bytes32 public constant escrowType = bytes32(bytes("updatable"));

    mapping(uint256 => Gig) public gigs;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => address) public escrows;

    uint256 public gigCount;
    uint256 public proposalCount;

    constructor(
        address _escrowFactory,
        address _escrowResolver,
        address _wrappedNativeToken
    ) EIP712("GigManager", "1") {
        escrowFactory = _escrowFactory;
        escrowResolver = _escrowResolver;
        wrappedNativeToken = _wrappedNativeToken;
    }

    event GigCreated(uint256 gigId);
    event ProposalCreated(uint256 proposalId);
    event ProposalAccepted(uint256 proposalId, address escrow);
    event ProposalEdited(uint256 proposalId);

    function createGig(
        bytes32 _details,
        uint256 _minPrice,
        uint256 _maxPrice,
        address _token,
        address _client,
        uint256 _deadline
    ) public {
        gigCount++;
        gigs[gigCount] = Gig(
            gigCount,
            _details,
            _minPrice,
            _maxPrice,
            _token,
            true,
            _client,
            _deadline
        );
        emit GigCreated(gigCount);
    }

    function createProposal(
        uint256 _gigId,
        uint256[] memory _milestoneAmounts,
        address _token,
        bytes32 _details,
        address _provider,
        uint256 _deadline
    ) public {
        Gig storage gig = gigs[_gigId];
        require(gig.isOpen, "Gig is not open");
        require(gig.deadline >= block.timestamp, "Gig deadline has passed");

        proposalCount++;
        proposals[proposalCount] = Proposal(
            proposalCount,
            _gigId,
            _details,
            _milestoneAmounts,
            _token,
            _provider,
            false,
            _deadline
        );
        emit ProposalCreated(proposalCount);
    }

    // struct AcceptProposal {
    //   uint256 proposalId;
    //   uint256 gigId;
    // }

    // address(...).code.length > 0

    function _isValidSignature(
        address _signer,
        bytes32 _hash,
        bytes calldata _signature
    ) internal view returns (bool) {
        if (address(_signer).code.length == 0) {
            address _recovered = ECDSA.recover(_hash, _signature);
            return _recovered == _signer;
        }
        return
            IERC1271(_signer).isValidSignature(_hash, _signature) ==
            IERC1271.isValidSignature.selector;
    }

    function _verify(
        uint256 _proposalId,
        uint256 _gigId,
        bytes[] calldata _signatures
    ) internal view returns (bool) {
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "AcceptProposal(uint256 proposalId,uint256 gigId)"
                    ),
                    _proposalId,
                    _gigId
                )
            )
        );

        address provider = proposals[_proposalId].provider;
        address client = gigs[_gigId].client;

        if (_signatures.length != 2) {
            return false;
        }

        return
            (_isValidSignature(provider, digest, _signatures[0]) &&
                _isValidSignature(client, digest, _signatures[1])) ||
            (_isValidSignature(client, digest, _signatures[0]) &&
                _isValidSignature(provider, digest, _signatures[1]));
    }

    function acceptProposal(
        uint256 _proposalId,
        bytes[] calldata _signatures
    ) public {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.isAccepted == false, "Proposal is already accepted");
        require(
            proposal.deadline >= block.timestamp,
            "Proposal deadline has passed"
        );

        Gig storage gig = gigs[proposal.gigId];
        require(gig.isOpen, "Gig is not open");

        require(
            _verify(_proposalId, proposal.gigId, _signatures),
            "Invalid signatures"
        );

        proposal.isAccepted = true;
        gig.isOpen = false;

        bytes memory escrowData = abi.encode(
            gig.client,
            escrowResolverType,
            escrowResolver,
            proposal.token,
            block.timestamp + ONE_YEAR,
            wrappedNativeToken,
            escrowNeedsVerification,
            escrowFactory,
            proposal.provider
        );

        address escrow = ISmartInvoiceFactory(escrowFactory).create(
            proposal.provider,
            proposal.milestoneAmounts, 
            escrowData,
            escrowType
        );

        escrows[_proposalId] = escrow;

        emit ProposalAccepted(_proposalId, escrow);
    }

    function editProposal(
        uint256 _proposalId,
        uint256[] memory _milestoneAmounts,
        address _token,
        bytes32 _details,
        uint256 _deadline
    ) public {
        Proposal storage proposal = proposals[_proposalId];
        require(proposal.isAccepted == false, "Proposal is already accepted");

        Gig storage gig = gigs[proposal.gigId];
        require(gig.isOpen, "Gig is not open");

        require(
            msg.sender == proposal.provider || msg.sender == gig.client,
            "Only provider or client can edit proposal"
        );

        proposal.milestoneAmounts = _milestoneAmounts;
        proposal.token = _token;
        proposal.deadline = _deadline;
        proposal.details = _details;

        emit ProposalEdited(_proposalId);
    }
}
