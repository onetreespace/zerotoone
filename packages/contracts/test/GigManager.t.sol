// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {GigManager} from "../src/GigManager.sol";
import {MockWETH} from "../src/mocks/MockWETH.sol";
import {MockToken} from "../src/mocks/MockToken.sol";
import {SmartInvoiceFactory} from "../src/smartinvoicexyz/SmartInvoiceFactory.sol";
import {SmartInvoiceUpdatable} from "../src/smartinvoicexyz/SmartInvoiceUpdatable.sol";

contract GigManagerTest is Test {
    GigManager public gigManager;
    MockToken public token;

    address internal resolver = makeAddr("resolver");
    address internal client = makeAddr("client");
    address internal provider = makeAddr("provider");

    function setUp() public {
        MockWETH weth = new MockWETH();
        SmartInvoiceFactory factory = new SmartInvoiceFactory(address(weth));
        token = new MockToken();

        gigManager = new GigManager(address(factory), resolver, address(weth));

        SmartInvoiceUpdatable updatable = new SmartInvoiceUpdatable();
        factory.addImplementation(bytes32("updatable"), address(updatable));
    }

    function test_createGig() public {
        string memory details = "details";
        uint256 minPrice = 1 ether;
        uint256 maxPrice = 2 ether;
        uint256 deadline = block.timestamp + 1 days;

        vm.prank(client);
        uint256 gigId = gigManager.createGig(details, minPrice, maxPrice, address(token), client, deadline);

        assertEq(gigId, 1);
        assertEq(gigManager.gigCount(), 1);

        GigManager.Gig memory gig = gigManager.getGig(gigId);

        assertEq(gig.details, details);
        assertEq(gig.minPrice, minPrice);
        assertEq(gig.maxPrice, maxPrice);
        assertEq(gig.token, address(token));
        assertEq(gig.client, client);
        assertEq(gig.deadline, deadline);
        assertEq(gig.isOpen, true);
    }

    function test_createProposal() public {
        string memory details = "details";
        uint256 minPrice = 1 ether;
        uint256 maxPrice = 2 ether;
        uint256 deadline = block.timestamp + 1 days;

        vm.prank(client);
        uint256 gigId = gigManager.createGig(details, minPrice, maxPrice, address(token), client, deadline);

        uint256[] memory milestoneAmounts = new uint256[](2);
        milestoneAmounts[0] = 1 ether;
        milestoneAmounts[1] = 1 ether;

        vm.prank(provider);
        uint256 proposalId = gigManager.createProposal(gigId, milestoneAmounts, details, provider, deadline);

        assertEq(proposalId, 1);
        assertEq(gigManager.proposalCount(), 1);

        GigManager.Proposal memory proposal = gigManager.getProposal(proposalId);

        assertEq(proposal.gigId, gigId);
        assertEq(proposal.milestoneAmounts[0], milestoneAmounts[0]);
        assertEq(proposal.milestoneAmounts[1], milestoneAmounts[1]);
        assertEq(proposal.details, details);
        assertEq(proposal.provider, provider);
        assertEq(proposal.deadline, deadline);
        assertEq(proposal.isAccepted, false);
    }

    function test_editProposal() public {
        string memory details = "details";
        uint256 minPrice = 1 ether;
        uint256 maxPrice = 2 ether;
        uint256 deadline = block.timestamp + 1 days;

        vm.prank(client);
        uint256 gigId = gigManager.createGig(details, minPrice, maxPrice, address(token), client, deadline);

        uint256[] memory milestoneAmounts = new uint256[](2);
        milestoneAmounts[0] = 1 ether;
        milestoneAmounts[1] = 1 ether;

        vm.prank(provider);
        uint256 proposalId = gigManager.createProposal(gigId, milestoneAmounts, details, provider, deadline);

        details = "new details";
        milestoneAmounts[0] = 2 ether;

        vm.prank(provider);
        gigManager.editProposal(proposalId, milestoneAmounts, details, deadline);

        GigManager.Proposal memory proposal = gigManager.getProposal(proposalId);

        assertEq(proposal.milestoneAmounts[0], milestoneAmounts[0]);
        assertEq(proposal.milestoneAmounts[1], milestoneAmounts[1]);
        assertEq(proposal.details, details);
        assertEq(proposal.deadline, deadline);
    }

    function test_acceptProposal() public {
        string memory details = "details";
        uint256 minPrice = 1 ether;
        uint256 maxPrice = 2 ether;
        uint256 deadline = block.timestamp + 1 days;

        vm.prank(client);
        uint256 gigId = gigManager.createGig(details, minPrice, maxPrice, address(token), client, deadline);

        uint256[] memory milestoneAmounts = new uint256[](2);
        milestoneAmounts[0] = 1 ether;
        milestoneAmounts[1] = 1 ether;

        vm.prank(provider);
        uint256 proposalId = gigManager.createProposal(gigId, milestoneAmounts, details, provider, deadline);

        vm.prank(client);
        address escrow = gigManager.acceptProposal(proposalId, details);

        GigManager.Proposal memory proposal = gigManager.getProposal(proposalId);
        GigManager.Gig memory gig = gigManager.getGig(gigId);

        assertEq(proposal.isAccepted, true);
        assertEq(gig.isOpen, false);
        assertNotEq(escrow, address(0));
        assertEq(gigManager.getEscrow(proposalId), escrow);
    }
}
