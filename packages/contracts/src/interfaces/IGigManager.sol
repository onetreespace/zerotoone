// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IGigManager {
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

    /// @notice Emitted when the contract is initialized.
    event GigManagerInit();

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

    error OnlyClient();
    error GigNotOpen();
    error GigDeadlinePassed();
    error OnlyProvider();
    error ProposalDeadlinePassed();
    error ProposalAlreadyAccepted();
    error InvalidSignatures();
    error OnlyProviderOrClient();

    function createGig(
        string memory _details,
        uint256 _minPrice,
        uint256 _maxPrice,
        address _token,
        address _client,
        uint256 _deadline
    ) external returns (uint256);

    function createProposal(
        uint256 _gigId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        address _provider,
        uint256 _deadline
    ) external returns (uint256);

    function acceptProposalWithSignatures(uint256 _proposalId, bytes[] calldata _signatures, string calldata _details)
        external
        returns (address);

    function acceptProposal(uint256 _proposalId, string calldata _details) external returns (address);

    function editProposal(
        uint256 _proposalId,
        uint256[] memory _milestoneAmounts,
        string memory _details,
        uint256 _deadline
    ) external;

    function getGig(uint256 _gigId) external view returns (Gig memory gig);

    function getProposal(uint256 _proposalId) external view returns (Proposal memory proposal);

    function getEscrow(uint256 _proposalId) external view returns (address escrow);
}
