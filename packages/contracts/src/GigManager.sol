// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";

contract GigManager is EIP712 {
    struct Gig {
        uint256 gigId;
        // string details;
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
        uint256[] milestones;
        address token;
        // string details;
        address provider;
        bool isAccepted;
        uint256 deadline;
    }

    address public escrowFactory;

    constructor(address _escrowFactory) {
        escrowFactory = _escrowFactory;
    }

    mapping(uint256 => Gig) public gigs;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => address) public escrows;

    uint256 public gigCount;
    uint256 public proposalCount;

    event GigCreated(uint256 gigId, string details);
    event ProposalCreated(uint256 proposalId, string details);
    event ProposalAccepted(uint256 proposalId);
    event ProposalEdited(uint256 proposalId, string details);

    function createGig(
        string memory _details,
        uint256 _minPrice,
        uint256 _maxPrice,
        address _token,
        address _client,
        uint256 _deadline
    ) public {
        gigCount++;
        gigs[gigCount] = Gig(
            gigCount,
            _minPrice,
            _maxPrice,
            _token,
            true,
            _client,
            _deadline
        );
        emit GigCreated(gigCount, _details);
    }

    function createProposal(
        uint256 _gigId,
        uint256[] memory _milestones,
        address _token,
        string memory _details,
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
            _milestones,
            _token,
            _provider,
            false,
            _deadline
        );
        emit ProposalCreated(proposalCount, _details);
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

        // TODO: Create smart invoice
        // address escrow = ISmartInvoiceFactory(escrowFactory).createSmartInvoice(proposal.milestones, proposal.token, proposal.provider, gig.client, proposal.deadline);
        // escrows[_proposalId] = escrow;

        emit ProposalAccepted(_proposalId);
    }

    function editProposal(
        uint256 _proposalId,
        uint256[] memory _milestones,
        address _token,
        string memory _details,
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

        proposal.milestones = _milestones;
        proposal.token = _token;
        proposal.deadline = _deadline;
        // proposal.details = _details;

        emit ProposalEdited(_proposalId, _details);
    }
}
