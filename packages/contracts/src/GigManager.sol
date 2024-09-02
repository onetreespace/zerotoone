// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {ISmartInvoiceFactory} from "./smartinvoicexyz/interfaces/ISmartInvoiceFactory.sol";
import {IGigManager} from "./interfaces/IGigManager.sol";

/// @title GigManager
/// @notice A contract for managing gigs and proposals with integrated escrow functionality.
contract GigManager is EIP712, IGigManager {
    address public immutable escrowFactory;
    address public immutable escrowResolver;
    address public immutable wrappedNativeToken;

    uint256 public constant ONE_YEAR = 365 * 24 * 60 * 60; // One year in seconds
    uint8 public constant escrowResolverType = 0; // Type of escrow resolver
    bool public constant escrowNeedsVerification = false; // Indicates if escrow needs verification
    bytes32 public constant escrowType = bytes32("updatable"); // Type of escrow

    mapping(uint256 => Gig) internal gigs;
    mapping(uint256 => Proposal) internal proposals;
    mapping(uint256 => address) internal escrows;

    uint256 public gigCount;
    uint256 public proposalCount;

    constructor(address _escrowFactory, address _escrowResolver, address _wrappedNativeToken)
        EIP712("GigManager", "1")
    {
        escrowFactory = _escrowFactory;
        escrowResolver = _escrowResolver;
        wrappedNativeToken = _wrappedNativeToken;

        emit GigManagerInit();
    }

    function createGig(
        string memory _details,
        uint256 _minPrice,
        uint256 _maxPrice,
        address _token,
        address _client,
        uint256 _deadline
    ) public override returns (uint256) {
        if (msg.sender != _client) revert OnlyClient();

        gigCount++;
        gigs[gigCount] = Gig(gigCount, _details, _minPrice, _maxPrice, _token, true, _client, _deadline);
        emit GigCreated(gigCount);
        return gigCount;
    }

    function createProposal(
        uint256 _gigId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        address _provider,
        uint256 _deadline
    ) public override returns (uint256) {
        if (msg.sender != _provider) revert OnlyProvider();

        Gig storage gig = gigs[_gigId];
        if (!gig.isOpen) revert GigNotOpen();
        if (gig.deadline < block.timestamp) revert GigDeadlinePassed();

        proposalCount++;
        proposals[proposalCount] =
            Proposal(proposalCount, _gigId, _details, _milestoneAmounts, _provider, false, _deadline);
        emit ProposalCreated(proposalCount);
        return proposalCount;
    }

    function acceptProposalWithSignatures(uint256 _proposalId, bytes[] calldata _signatures, string calldata _details)
        public
        override
        returns (address)
    {
        Proposal storage proposal = proposals[_proposalId];
        if (!_verify(_proposalId, proposal.gigId, _signatures)) {
            revert InvalidSignatures();
        }
        return _acceptProposal(_proposalId, _details);
    }

    function acceptProposal(uint256 _proposalId, string calldata _details) public override returns (address) {
        Proposal storage proposal = proposals[_proposalId];
        if (msg.sender != gigs[proposal.gigId].client) {
            revert OnlyClient();
        }
        return _acceptProposal(_proposalId, _details);
    }

    function _acceptProposal(uint256 _proposalId, string calldata _details) internal returns (address) {
        Proposal storage proposal = proposals[_proposalId];
        if (proposal.isAccepted) revert ProposalAlreadyAccepted();
        if (proposal.deadline < block.timestamp) revert ProposalDeadlinePassed();

        Gig storage gig = gigs[proposal.gigId];
        if (!gig.isOpen) revert GigNotOpen();

        proposal.isAccepted = true;
        gig.isOpen = false;

        bytes memory escrowData = abi.encode(
            gig.client,
            escrowResolverType,
            escrowResolver,
            gig.token,
            block.timestamp + ONE_YEAR,
            _details,
            wrappedNativeToken,
            escrowNeedsVerification,
            escrowFactory,
            proposal.provider
        );

        address escrow = ISmartInvoiceFactory(escrowFactory).create(
            proposal.provider, proposal.milestoneAmounts, escrowData, escrowType
        );

        escrows[_proposalId] = escrow;

        emit ProposalAccepted(_proposalId, escrow);
        return escrow;
    }

    function editProposal(
        uint256 _proposalId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        uint256 _deadline
    ) public override {
        Proposal storage proposal = proposals[_proposalId];
        if (proposal.isAccepted) revert ProposalAlreadyAccepted();

        Gig storage gig = gigs[proposal.gigId];
        if (!gig.isOpen) revert GigNotOpen();

        if (msg.sender != proposal.provider) {
            revert OnlyProvider();
        }

        proposal.milestoneAmounts = _milestoneAmounts;
        proposal.deadline = _deadline;
        proposal.details = _details;

        emit ProposalEdited(_proposalId);
    }

    function getGig(uint256 _gigId) public view override returns (Gig memory gig) {
        gig = gigs[_gigId];
    }

    function getProposal(uint256 _proposalId) public view override returns (Proposal memory proposal) {
        proposal = proposals[_proposalId];
    }

    function getEscrow(uint256 _proposalId) public view override returns (address escrow) {
        escrow = escrows[_proposalId];
    }

    function _isValidSignature(address _signer, bytes32 _hash, bytes calldata _signature)
        internal
        view
        returns (bool)
    {
        if (address(_signer).code.length == 0) {
            address _recovered = ECDSA.recover(_hash, _signature);
            return _recovered == _signer;
        }
        return IERC1271(_signer).isValidSignature(_hash, _signature) == IERC1271.isValidSignature.selector;
    }

    function _verify(uint256 _proposalId, uint256 _gigId, bytes[] calldata _signatures) internal view returns (bool) {
        bytes32 digest = _hashTypedDataV4(
            keccak256(abi.encode(keccak256("AcceptProposal(uint256 proposalId,uint256 gigId)"), _proposalId, _gigId))
        );

        address provider = proposals[_proposalId].provider;
        address client = gigs[_gigId].client;

        if (_signatures.length != 2) {
            return false;
        }

        return (
            _isValidSignature(provider, digest, _signatures[0]) && _isValidSignature(client, digest, _signatures[1])
        ) || (_isValidSignature(client, digest, _signatures[0]) && _isValidSignature(provider, digest, _signatures[1]));
    }
}
