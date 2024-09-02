import { log, Address } from "@graphprotocol/graph-ts";

import {
  QuestChainCreated as QuestChainCreatedEvent,
  FactorySetup as FactorySetupEvent,
  AdminReplaced as AdminReplacedEvent,
  QuestChainFactory as QuestChainFactory,
} from "../../types/QuestChainFactory/QuestChainFactory";
import {
  QuestChain as QuestChainTemplate,
  QuestChainToken as QuestChainTokenTemplate,
} from "../../types/templates";

import { getUser, getGlobal, getQuestChain } from "./helpers";

import { Global } from "../../types/schema";

export function handleFactorySetup(event: FactorySetupEvent): void {
  let globalNode = getGlobal();
  setupGlobalNode(globalNode, event.address);
}

function setupGlobalNode(globalNode: Global, factoryAddress: Address): void {
  globalNode.questChainFactory = factoryAddress;

  let contract = QuestChainFactory.bind(factoryAddress);
  let tokenAddress = contract.questChainToken();
  globalNode.questChainToken = tokenAddress;
  globalNode.admin = contract.admin();

  QuestChainTokenTemplate.create(tokenAddress);
  globalNode.save();
}

export function handleAdminReplaced(event: AdminReplacedEvent): void {
  let globalNode = getGlobal();
  globalNode.admin = event.params.newAdmin;
  globalNode.save();
}

export function handleQuestChainCreated(event: QuestChainCreatedEvent): void {
  let questChain = getQuestChain(event.params.questChainAddress);

  log.info("handleQuestChainCreated {}", [
    event.params.questChainAddress.toHexString(),
  ]);

  let user = getUser(event.transaction.from);

  questChain.factoryAddress = event.address;
  questChain.createdAt = event.block.timestamp;
  questChain.updatedAt = event.block.timestamp;
  questChain.createdBy = user.id;
  questChain.creationTxHash = event.transaction.hash;

  QuestChainTemplate.create(event.params.questChainAddress);

  let globalNode = getGlobal();
  globalNode.questChainCount = globalNode.questChainCount + 1;
  globalNode.save();

  user.save();
  questChain.save();
}
