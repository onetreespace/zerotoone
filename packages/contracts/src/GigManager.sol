// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract GigManager {

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

  address public smartInvoiceFactory;

  constructor(address _smartInvoiceFactory) {
    smartInvoiceFactory = _smartInvoiceFactory;
  }

  mapping(uint256 => Gig) public gigs;
  mapping(uint256 => Proposal) public proposals;
  mapping(uint256 => address) public smartInvoices;

  uint256 public gigCount;
  uint256 public proposalCount;

  event GigCreated(uint256 gigId, string details);
  event ProposalCreated(uint256 proposalId, string details);
  event ProposalAccepted(uint256 proposalId);
  event ProposalEdited(uint256 proposalId, string details);

  function createGig(string memory _details, uint256 _minPrice, uint256 _maxPrice, address _token, address _client, uint256 _deadline) public {
    gigCount++;
    gigs[gigCount] = Gig(gigCount, _minPrice, _maxPrice, _token, true, _client, _deadline);
    emit GigCreated(gigCount, _details);
  }

  function createProposal(uint256 _gigId, uint256[] memory _milestones, address _token, string memory _details, address _provider, uint256 _deadline) public {
    Gig storage gig = gigs[_gigId];
    require(gig.isOpen, "Gig is not open");
    require(gig.deadline >= block.timestamp, "Gig deadline has passed");

    proposalCount++;
    proposals[proposalCount] = Proposal(proposalCount, _gigId, _milestones, _token, _provider, false, _deadline);
    emit ProposalCreated(proposalCount, _details);
  }

  function acceptProposal(uint256 _proposalId, bytes calldata _signatures) public {
    Proposal storage proposal = proposals[_proposalId];
    require(proposal.isAccepted == false, "Proposal is already accepted");
    require(proposal.deadline >= block.timestamp, "Proposal deadline has passed");

    Gig storage gig = gigs[proposal.gigId];
    require(gig.isOpen, "Gig is not open");

    // TODO: Verify signatures
    // ensure there are two signatures and they are valid signatures for the provider and the client

    proposal.isAccepted = true;
    gig.isOpen = false;

    // TODO: Create smart invoice
    // address smartInvoice = ISmartInvoiceFactory(smartInvoiceFactory).createSmartInvoice(proposal.milestones, proposal.token, proposal.provider, gig.client, proposal.deadline);
    // smartInvoices[_proposalId] = smartInvoice;

    emit ProposalAccepted(_proposalId);
  }

  function editProposal(uint256 _proposalId, uint256[] memory _milestones, address _token, string memory _details, uint256 _deadline) public {
    Proposal storage proposal = proposals[_proposalId];
    require(proposal.isAccepted == false, "Proposal is already accepted");

    Gig storage gig = gigs[proposal.gigId];
    require(gig.isOpen, "Gig is not open");

    require(msg.sender == proposal.provider || msg.sender == gig.client, "Only provider or client can edit proposal");

    proposal.milestones = _milestones;
    proposal.token = _token;
    proposal.deadline = _deadline;
    // proposal.details = _details;

    emit ProposalEdited(_proposalId, _details);
  }

}
