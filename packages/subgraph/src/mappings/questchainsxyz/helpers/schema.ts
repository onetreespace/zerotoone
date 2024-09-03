import { Address, BigInt, ethereum, dataSource } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../types/QuestChainFactory/ERC20";
import {
  User,
  Global,
  QuestChain,
  Quest,
  ERC20Token,
} from "../../../types/schema";
import { getChainId } from "./network";
import { ADDRESS_ZERO } from "./constants";
import { createSearchString } from "./strings";
import { fetchMetadata } from "./ipfs";

export function getUser(address: Address): User {
  let user = User.load(address.toHexString());
  if (user == null) {
    user = new User(address.toHexString());
    user.questsPassed = new Array<string>();
    user.questsFailed = new Array<string>();
    user.questsInReview = new Array<string>();
  }
  return user as User;
}

export function getGlobal(): Global {
  let network = dataSource.network();
  let globalNode = Global.load(network);
  if (globalNode == null) {
    globalNode = new Global(network);
    globalNode.network = network;
    globalNode.chainId = getChainId();
    globalNode.questChainFactory = ADDRESS_ZERO;
    globalNode.questChainToken = ADDRESS_ZERO;
    globalNode.admin = ADDRESS_ZERO;
    globalNode.wrappedNativeToken = ADDRESS_ZERO;
    globalNode.gigManager = ADDRESS_ZERO;
    globalNode.smartInvoiceFactory = ADDRESS_ZERO;
    globalNode.questChainCount = 0;
  }

  return globalNode as Global;
}

export function getERC20Token(address: Address): ERC20Token {
  let token = ERC20Token.load(address.toHexString());
  if (token == null) {
    token = new ERC20Token(address.toHexString());

    let erc20 = ERC20.bind(address);
    let nameValue = erc20.try_name();
    let symbolValue = erc20.try_symbol();
    let decimalsValue = erc20.try_decimals();

    token.name = nameValue.reverted ? "" : nameValue.value;
    token.symbol = symbolValue.reverted ? "" : symbolValue.value;
    token.decimals = decimalsValue.reverted ? 0 : decimalsValue.value;
  }
  return token as ERC20Token;
}

export function getQuestChain(address: Address): QuestChain {
  let questChain = QuestChain.load(address.toHexString());
  if (questChain == null) {
    questChain = new QuestChain(address.toHexString());

    questChain.address = address;
    questChain.chainId = getChainId();
    questChain.network = dataSource.network();

    questChain.numCompletedQuesters = 0;
    questChain.completedQuesters = new Array<string>();
    questChain.numQuesters = 0;
    questChain.questers = new Array<string>();

    questChain.questCount = 0;
    questChain.totalQuestCount = 0;
    questChain.paused = false;

    questChain.owners = new Array<string>();
    questChain.admins = new Array<string>();
    questChain.editors = new Array<string>();
    questChain.reviewers = new Array<string>();

    questChain.questsPassed = new Array<string>();
    questChain.questsFailed = new Array<string>();
    questChain.questsInReview = new Array<string>();
  }
  return questChain as QuestChain;
}

export function createQuest(
  address: Address,
  questIndex: BigInt,
  details: string,
  creator: Address,
  event: ethereum.Event,
): Quest {
  let quest = getQuest(address, questIndex);

  let metadata = fetchMetadata(details);
  quest.details = details;
  quest.name = metadata.name;
  quest.description = metadata.description;
  quest.imageUrl = metadata.imageUrl;
  quest.externalUrl = metadata.externalUrl;
  quest.creationTxHash = event.transaction.hash;

  let search = createSearchString(metadata.name, metadata.description);
  quest.search = search;

  let user = getUser(creator);
  quest.createdAt = event.block.timestamp;
  quest.updatedAt = event.block.timestamp;
  quest.createdBy = user.id;
  user.save();

  return quest;
}

export function getQuest(address: Address, questIndex: BigInt): Quest {
  let questId = address
    .toHexString()
    .concat("-")
    .concat(questIndex.toHexString());
  let quest = Quest.load(questId);
  if (quest == null) {
    quest = new Quest(questId);

    quest.questChain = address.toHexString();
    quest.questId = questIndex;
    quest.optional = false;
    quest.skipReview = false;
    quest.paused = false;

    quest.numCompletedQuesters = 0;
    quest.completedQuesters = new Array<string>();
    quest.numQuesters = 0;
    quest.questers = new Array<string>();

    quest.usersPassed = new Array<string>();
    quest.usersFailed = new Array<string>();
    quest.usersInReview = new Array<string>();
  }
  return quest as Quest;
}
