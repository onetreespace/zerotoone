// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";
import {ISmartInvoiceFactory} from "./smartinvoicexyz/interfaces/ISmartInvoiceFactory.sol";

/// @title GigManager
/// @notice A contract for managing gigs and proposals with integrated escrow functionality.
contract GigManager is EIP712 {
    /// @notice Struct representing a gig.
    struct Gig {
        uint256 gigId; // Unique identifier for the gig
        string details; // Details about the gig
        uint256 minPrice; // Minimum price for the gig
        uint256 maxPrice; // Maximum price for the gig
        address token; // Token used for payments
        bool isOpen; // Indicates if the gig is open for proposals
        address client; // Address of the client who created the gig
        uint256 deadline; // Deadline for submitting proposals
    }

    /// @notice Struct representing a proposal.
    struct Proposal {
        uint256 proposalId; // Unique identifier for the proposal
        uint256 gigId; // ID of the gig the proposal is for
        string details; // Details about the proposal
        uint256[] milestoneAmounts; // Array of milestone amounts for the proposal
        address provider; // Address of the provider who created the proposal
        bool isAccepted; // Indicates if the proposal is accepted
        uint256 deadline; // Deadline for the proposal
    }

    /// @notice Address of the escrow factory.
    address public immutable escrowFactory;
    /// @notice Address of the escrow resolver.
    address public immutable escrowResolver;
    /// @notice Address of the wrapped native token.
    address public immutable wrappedNativeToken;

    uint256 public constant ONE_YEAR = 365 * 24 * 60 * 60; // One year in seconds
    uint8 public constant escrowResolverType = 0; // Type of escrow resolver
    bool public constant escrowNeedsVerification = false; // Indicates if escrow needs verification
    bytes32 public constant escrowType = bytes32("updatable"); // Type of escrow

    mapping(uint256 => Gig) internal gigs; // Mapping from gig ID to Gig struct
    mapping(uint256 => Proposal) internal proposals; // Mapping from proposal ID to Proposal struct
    mapping(uint256 => address) internal escrows; // Mapping from proposal ID to escrow address

    uint256 public gigCount; // Counter for the number of gigs
    uint256 public proposalCount; // Counter for the number of proposals

    error OnlyClient();
    error GigNotOpen();
    error GigDeadlinePassed();
    error OnlyProvider();
    error ProposalDeadlinePassed();
    error ProposalAlreadyAccepted();
    error InvalidSignatures();
    error OnlyProviderOrClient();

    /**
     * @dev Initializes the contract with the provided addresses.
     * @param _escrowFactory The address of the escrow factory.
     * @param _escrowResolver The address of the escrow resolver.
     * @param _wrappedNativeToken The address of the wrapped native token.
     */
    constructor(address _escrowFactory, address _escrowResolver, address _wrappedNativeToken)
        EIP712("GigManager", "1")
    {
        escrowFactory = _escrowFactory;
        escrowResolver = _escrowResolver;
        wrappedNativeToken = _wrappedNativeToken;
    }

    /// @notice Emitted when a new gig is created.
    /// @param gigId The ID of the created gig.
    event GigCreated(uint256 gigId);

    /// @notice Emitted when a new proposal is created.
    /// @param proposalId The ID of the created proposal.
    event ProposalCreated(uint256 proposalId);

    /// @notice Emitted when a proposal is accepted and an escrow is created.
    /// @param proposalId The ID of the accepted proposal.
    /// @param escrow The address of the created escrow.
    event ProposalAccepted(uint256 proposalId, address escrow);

    /// @notice Emitted when a proposal is edited.
    /// @param proposalId The ID of the edited proposal.
    event ProposalEdited(uint256 proposalId);

    /**
     * @notice Creates a new gig.
     * @param _details The details of the gig.
     * @param _minPrice The minimum price for the gig.
     * @param _maxPrice The maximum price for the gig.
     * @param _token The token used for payments.
     * @param _client The address of the client creating the gig.
     * @param _deadline The deadline for submitting proposals.
     * @return The ID of the created gig.
     */
    function createGig(
        string memory _details,
        uint256 _minPrice,
        uint256 _maxPrice,
        address _token,
        address _client,
        uint256 _deadline
    ) public returns (uint256) {
        if (msg.sender != _client) revert OnlyClient();

        gigCount++;
        gigs[gigCount] = Gig(gigCount, _details, _minPrice, _maxPrice, _token, true, _client, _deadline);
        emit GigCreated(gigCount);
        return gigCount;
    }

    /**
     * @notice Creates a new proposal for a gig.
     * @param _gigId The ID of the gig the proposal is for.
     * @param _milestoneAmounts The milestone amounts for the proposal.
     * @param _details The details of the proposal.
     * @param _provider The address of the provider creating the proposal.
     * @param _deadline The deadline for the proposal.
     * @return The ID of the created proposal.
     */
    function createProposal(
        uint256 _gigId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        address _provider,
        uint256 _deadline
    ) public returns (uint256) {
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

    /**
     * @notice Verifies the signature of a signer.
     * @param _signer The address of the signer.
     * @param _hash The hash of the data signed.
     * @param _signature The signature to verify.
     * @return True if the signature is valid, false otherwise.
     */
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

    /**
     * @notice Verifies that both the client and provider have signed the acceptance of a proposal.
     * @param _proposalId The ID of the proposal.
     * @param _gigId The ID of the gig.
     * @param _signatures The signatures from the client and provider.
     * @return True if both signatures are valid, false otherwise.
     */
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

    /**
     * @notice Accepts a proposal and creates an escrow.
     * @param _proposalId The ID of the proposal to accept.
     * @param _signatures The signatures from the client and provider.
     */
    function acceptProposalWithSignatures(uint256 _proposalId, bytes[] calldata _signatures) public returns (address) {
        Proposal storage proposal = proposals[_proposalId];
        if (!_verify(_proposalId, proposal.gigId, _signatures)) {
            revert InvalidSignatures();
        }
        return _acceptProposal(_proposalId);
    }

    function acceptProposal(uint256 _proposalId) public returns (address) {
        Proposal storage proposal = proposals[_proposalId];
        if (msg.sender != gigs[proposal.gigId].client) {
            revert OnlyClient();
        }
        return _acceptProposal(_proposalId);
    }

    function _acceptProposal(uint256 _proposalId) internal returns (address) {
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
            gig.details,
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

    /**
     * @notice Edits an existing proposal.
     * @param _proposalId The ID of the proposal to edit.
     * @param _milestoneAmounts The updated milestone amounts for the proposal.
     * @param _details The updated details of the proposal.
     * @param _deadline The updated deadline for the proposal.
     */
    function editProposal(
        uint256 _proposalId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        uint256 _deadline
    ) public {
        Proposal storage proposal = proposals[_proposalId];
        if (proposal.isAccepted) revert ProposalAlreadyAccepted();

        Gig storage gig = gigs[proposal.gigId];
        if (!gig.isOpen) revert GigNotOpen();

        // TODO: support editing onchain by both
        // if (msg.sender != proposal.provider && msg.sender != gig.client) {
        //     revert OnlyProviderOrClient();
        // }
        if (msg.sender != proposal.provider) {
            revert OnlyProvider();
        }

        proposal.milestoneAmounts = _milestoneAmounts;
        proposal.deadline = _deadline;
        proposal.details = _details;

        emit ProposalEdited(_proposalId);
    }

    /**
     * @notice Returns the details of a gig.
     * @param _gigId The ID of the gig.
     * @return gig The Gig struct containing details of the gig.
     */
    function getGig(uint256 _gigId) public view returns (Gig memory gig) {
        gig = gigs[_gigId];
    }

    /**
     * @notice Returns the details of a proposal.
     * @param _proposalId The ID of the proposal.
     * @return proposal The Proposal struct containing details of the proposal.
     */
    function getProposal(uint256 _proposalId) public view returns (Proposal memory proposal) {
        proposal = proposals[_proposalId];
    }

    /**
     * @notice Returns the escrow address for a proposal.
     * @param _proposalId The ID of the proposal.
     * @return escrow The address of the escrow.
     */
    function getEscrow(uint256 _proposalId) public view returns (address escrow) {
        escrow = escrows[_proposalId];
    }
}
