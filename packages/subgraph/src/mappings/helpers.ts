import { Address, BigInt, dataSource } from "@graphprotocol/graph-ts";
import { Gig, Proposal } from "../types/schema";

import { GigManager } from "../types/GigManager/GigManager";

import { ERC20 } from "../types/templates";

import { getChainId } from "./questchainsxyz/helpers/network";
import { getToken } from "./smartinvoicexyz/helpers/token";

export function getGig(address: Address, gigIndex: BigInt): Gig {
  let gigId = address.toHexString().concat("-").concat(gigIndex.toHexString());
  let gig = Gig.load(gigId);
  if (gig == null) {
    gig = new Gig(gigId);

    gig.gigId = gigIndex;
    gig.network = dataSource.network();
    gig.chainId = getChainId();

    let contract = GigManager.bind(address);

    let gigData = contract.getGig(gigIndex);

    gig.details = gigData.details;
    gig.minPrice = gigData.minPrice;
    gig.maxPrice = gigData.maxPrice;
    gig.token = gigData.token.toHexString();
    gig.isOpen = gigData.isOpen;
    gig.client = gigData.client;
    gig.deadline = gigData.deadline;

    let token = getToken(gigData.token);
    token.save();
    ERC20.create(gigData.token);

    gig.save();
  }
  return gig as Gig;
}

export function updateGig(address: Address, gigIndex: BigInt): void {
  let gigId = address.toHexString().concat("-").concat(gigIndex.toHexString());
  let gig = Gig.load(gigId);
  if (gig != null) {
    let contract = GigManager.bind(address);

    let gigData = contract.getGig(gigIndex);

    gig.details = gigData.details;
    gig.minPrice = gigData.minPrice;
    gig.maxPrice = gigData.maxPrice;
    gig.isOpen = gigData.isOpen;
    gig.client = gigData.client;
    gig.deadline = gigData.deadline;

    if (gig.token != gigData.token.toHexString()) {
      let token = getToken(gigData.token);
      token.save();
      ERC20.create(gigData.token);
    }
    gig.token = gigData.token.toHexString();

    gig.save();
  }
}

export function getProposal(address: Address, proposalIndex: BigInt): Proposal {
  let proposalId = address
    .toHexString()
    .concat("-")
    .concat(proposalIndex.toHexString());
  let proposal = Proposal.load(proposalId);
  if (proposal == null) {
    proposal = new Proposal(proposalId);

    proposal.proposalId = proposalIndex;
    proposal.network = dataSource.network();
    proposal.chainId = getChainId();

    let contract = GigManager.bind(address);

    let proposalData = contract.getProposal(proposalIndex);

    let gigId = address
      .toHexString()
      .concat("-")
      .concat(proposalData.gigId.toHexString());
    proposal.gig = gigId;
    proposal.provider = proposalData.provider;
    proposal.isAccepted = proposalData.isAccepted;
    proposal.deadline = proposalData.deadline;
    proposal.milestoneAmounts = proposalData.milestoneAmounts;
    proposal.details = proposalData.details;

    let price = BigInt.fromI32(0);
    for (let i = 0; i < proposal.milestoneAmounts.length; i++) {
      price = price.plus(proposal.milestoneAmounts[i]);
    }
    proposal.price = price;
    proposal.escrow = contract.getEscrow(proposalIndex).toHexString();

    proposal.save();
  }
  return proposal as Proposal;
}

export function updateProposal(address: Address, proposalIndex: BigInt): void {
  let proposalId = address
    .toHexString()
    .concat("-")
    .concat(proposalIndex.toHexString());
  let proposal = Proposal.load(proposalId);
  if (proposal != null) {
    let contract = GigManager.bind(address);

    let proposalData = contract.getProposal(proposalIndex);

    let gigId = address
      .toHexString()
      .concat("-")
      .concat(proposalData.gigId.toHexString());
    proposal.gig = gigId;
    proposal.provider = proposalData.provider;
    proposal.isAccepted = proposalData.isAccepted;
    proposal.deadline = proposalData.deadline;
    proposal.milestoneAmounts = proposalData.milestoneAmounts;
    proposal.details = proposalData.details;

    let price = BigInt.fromI32(0);
    for (let i = 0; i < proposal.milestoneAmounts.length; i++) {
      price = price.plus(proposal.milestoneAmounts[i]);
    }
    proposal.price = price;
    proposal.escrow = contract.getEscrow(proposalIndex).toHexString();

    proposal.save();
  }
}
