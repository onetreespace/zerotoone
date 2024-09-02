import { log } from "@graphprotocol/graph-ts";

import {
  GigCreated as GigCreatedEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposalEdited as ProposalEditedEvent,
  ProposalAccepted as ProposalAcceptedEvent,
} from "../types/GigManager/GigManager";

import { getGig, getProposal, updateProposal } from "./helpers";

import { getGlobal } from "./questchainsxyz/helpers/schema";

export function handleGigCreated(event: GigCreatedEvent): void {
  let globalNode = getGlobal();
  globalNode.gigManager = event.address;
  globalNode.save();

  let gig = getGig(event.address, event.params.gigId);

  log.info("handleGigCreated {}", [event.params.gigId.toHexString()]);

  gig.save();
}

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let proposal = getProposal(event.address, event.params.proposalId);

  log.info("handleProposalCreated {}", [event.params.proposalId.toHexString()]);

  proposal.save();
}

export function handleProposalEdited(event: ProposalEditedEvent): void {
  let proposal = getProposal(event.address, event.params.proposalId);

  log.info("handleProposalEdited {}", [event.params.proposalId.toHexString()]);
  proposal.save();

  updateProposal(event.address, event.params.proposalId);
}

export function handleProposalAccepted(event: ProposalAcceptedEvent): void {
  let proposal = getProposal(event.address, event.params.proposalId);

  log.info("handleProposalAccepted {}", [
    event.params.proposalId.toHexString(),
  ]);

  proposal.save();
  updateProposal(event.address, event.params.proposalId);
}
