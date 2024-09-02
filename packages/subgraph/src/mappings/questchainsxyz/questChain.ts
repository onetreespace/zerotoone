import { log, Address, BigInt } from "@graphprotocol/graph-ts";
import {
  QuestChainEdit,
  QuestChain,
  QuestEdit,
  QuestStatus,
  ProofSubmission,
  ReviewSubmission,
} from "../../types/schema";

import {
  QuestChainInit as QuestChainInitEvent,
  QuestChainEdited as QuestChainEditedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent,
  QuestsAdded as QuestsAddedEvent,
  QuestsEdited as QuestsEditedEvent,
  QuestProofsSubmitted as QuestProofsSubmittedEvent,
  QuestProofsReviewed as QuestProofsReviewedEvent,
  QuestChain as QuestChainContract,
} from "../../types/templates/QuestChain/QuestChain";
import {
  createQuest,
  createSearchString,
  fetchMetadata,
  getQuest,
  getQuestChain,
  getUser,
  removeFromArray,
  updateQuestChainCompletions,
} from "./helpers";
import { getRoles } from "./roles";

function getQuestChainContract(address: Address): QuestChainContract {
  return QuestChainContract.bind(address);
}

export function handleChainInit(event: QuestChainInitEvent): void {
  let questChain = getQuestChain(event.address);

  let contract = getQuestChainContract(event.address);
  let details = contract.details();

  let metadata = fetchMetadata(details);
  questChain.details = details;
  questChain.name = metadata.name;
  questChain.description = metadata.description;
  questChain.imageUrl = metadata.imageUrl;
  questChain.externalUrl = metadata.externalUrl;
  questChain.slug = metadata.slug;
  questChain.categories = metadata.categories;

  let search = createSearchString(metadata.name, metadata.description);
  questChain.search = search;

  questChain.paused = contract.paused();

  questChain.totalQuestCount = contract.questCount().toI32();

  let questCount = 0;

  let creator = Address.fromString(questChain.createdBy);

  for (let i = 0; i <= questChain.totalQuestCount; ++i) {
    let questDetails = contract.questDetails(BigInt.fromI32(i));
    let quest = createQuest(
      event.address,
      BigInt.fromI32(i),
      questDetails.getDetails(),
      creator,
      event,
    );
    quest.paused = questDetails.getDisabled();
    quest.optional = questDetails.getOptional();
    quest.skipReview = questDetails.getSkipReview();

    if (!quest.paused && i > 0) {
      questCount = questCount + 1;
    }

    quest.save();
  }

  questChain.questCount = questCount;

  questChain.save();
}

export function handleChainEdited(event: QuestChainEditedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;
  log.info("handleChainEdited {}", [event.address.toHexString()]);

  let questChainEditId = event.address
    .toHexString()
    .concat("-")
    .concat(event.block.timestamp.toHexString())
    .concat("-")
    .concat(event.logIndex.toHexString());

  let user = getUser(event.params.sender);

  let questChainEdit = new QuestChainEdit(questChainEditId);
  questChainEdit.details = questChain.details;
  questChainEdit.name = questChain.name;
  questChainEdit.description = questChain.description;
  questChainEdit.imageUrl = questChain.imageUrl;
  questChainEdit.externalUrl = questChain.externalUrl;
  questChainEdit.slug = questChain.slug;
  questChainEdit.categories = questChain.categories;
  questChainEdit.timestamp = event.block.timestamp;
  questChainEdit.txHash = event.transaction.hash;
  questChainEdit.questChain = questChain.id;
  questChainEdit.editor = user.id;
  questChainEdit.save();

  let details = event.params.details;
  let metadata = fetchMetadata(details);
  questChain.details = details;
  questChain.name = metadata.name;
  questChain.description = metadata.description;
  questChain.imageUrl = metadata.imageUrl;
  questChain.externalUrl = metadata.externalUrl;
  questChain.slug = metadata.slug;
  questChain.categories = metadata.categories;
  questChain.editedBy = user.id;
  questChain.editedAt = event.block.timestamp;
  questChain.updatedAt = event.block.timestamp;

  let search = createSearchString(metadata.name, metadata.description);
  questChain.search = search;

  questChain.save();
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;
  let user = getUser(event.params.account);
  let roles = getRoles(event.address);
  if (event.params.role == roles[0]) {
    // OWNER
    let newArray = questChain.owners;
    newArray.push(user.id);
    questChain.owners = newArray;
  } else if (event.params.role == roles[1]) {
    // ADMIN
    let newArray = questChain.admins;
    newArray.push(user.id);
    questChain.admins = newArray;
  } else if (event.params.role == roles[2]) {
    // EDITOR
    let newArray = questChain.editors;
    newArray.push(user.id);
    questChain.editors = newArray;
  } else if (event.params.role == roles[3]) {
    // REVIEWER
    let newArray = questChain.reviewers;
    newArray.push(user.id);
    questChain.reviewers = newArray;
  }
  user.save();
  questChain.save();
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;
  let user = getUser(event.params.account);
  let roles = getRoles(event.address);
  if (event.params.role == roles[0]) {
    // OWNER
    let owners = questChain.owners;
    let newArray = removeFromArray(owners, user.id);
    questChain.owners = newArray;
  } else if (event.params.role == roles[1]) {
    // ADMIN
    let admins = questChain.admins;
    let newArray = removeFromArray(admins, user.id);
    questChain.admins = newArray;
  } else if (event.params.role == roles[2]) {
    // EDITOR
    let editors = questChain.admins;
    let newArray = removeFromArray(editors, user.id);
    questChain.editors = newArray;
  } else if (event.params.role == roles[3]) {
    // REVIEWER
    let reviewers = questChain.admins;
    let newArray = removeFromArray(reviewers, user.id);
    questChain.reviewers = newArray;
  }
  user.save();
  questChain.save();
}

export function handlePaused(event: PausedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;
  questChain.paused = true;
  questChain.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;
  questChain.paused = false;
  questChain.save();
}

export function handleQuestsAdded(event: QuestsAddedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;

  let contract = getQuestChainContract(event.address);
  let totalQuestCount = questChain.totalQuestCount;
  let questCount = questChain.questCount;
  let creator = Address.fromString(questChain.createdBy);

  for (let i = 0; i < event.params.numQuests.toI32(); ++i) {
    let questIndex = BigInt.fromI32(totalQuestCount + i + 1);
    let questDetails = contract.questDetails(questIndex);
    let quest = createQuest(
      event.address,
      questIndex,
      questDetails.getDetails(),
      creator,
      event,
    );
    quest.paused = questDetails.getDisabled();
    quest.optional = questDetails.getOptional();
    quest.skipReview = questDetails.getSkipReview();

    if (!quest.paused) {
      questCount = questCount + 1;
    }

    quest.save();
  }

  questChain.questCount = questCount;

  questChain.totalQuestCount = totalQuestCount + event.params.numQuests.toI32();

  questChain = updateQuestChainCompletions(questChain);
  questChain.save();
}

export function handleQuestsEdited(event: QuestsEditedEvent): void {
  let questChain = QuestChain.load(event.address.toHexString());

  if (questChain == null) return;

  let contract = getQuestChainContract(event.address);

  let questCount = questChain.questCount;
  for (let i = 0; i < event.params.questIdList.length; ++i) {
    let questIndex = event.params.questIdList[i];
    let quest = getQuest(event.address, questIndex);
    let questDetails = contract.questDetails(questIndex);

    quest.optional = questDetails.getOptional();
    quest.skipReview = questDetails.getSkipReview();

    let newPaused = questDetails.getDisabled();

    if (newPaused && !quest.paused) {
      questCount = questCount - 1;
    } else if (!newPaused && quest.paused) {
      questCount = questCount + 1;
    }

    quest.paused = questDetails.getDisabled();

    let details = questDetails.getDetails();

    let questEditId = quest.id
      .concat("-")
      .concat(event.block.timestamp.toHexString())
      .concat("-")
      .concat(event.logIndex.toHexString());

    let user = getUser(event.params.sender);

    let questEdit = new QuestEdit(questEditId);
    questEdit.details = quest.details;
    questEdit.name = quest.name;
    questEdit.description = quest.description;
    questEdit.imageUrl = quest.imageUrl;
    questEdit.externalUrl = quest.externalUrl;
    questEdit.timestamp = event.block.timestamp;
    questEdit.txHash = event.transaction.hash;
    questEdit.quest = quest.id;
    questEdit.editor = user.id;
    questEdit.save();

    let metadata = fetchMetadata(details);
    quest.details = details;
    quest.name = metadata.name;
    quest.description = metadata.description;
    quest.imageUrl = metadata.imageUrl;
    quest.externalUrl = metadata.externalUrl;
    quest.editedBy = user.id;
    quest.editedAt = event.block.timestamp;
    quest.updatedAt = event.block.timestamp;

    let search = createSearchString(metadata.name, metadata.description);
    quest.search = search;

    quest.editedAt = event.block.timestamp;
    quest.editedBy = user.id;

    user.save();
    quest.save();
  }

  questChain.questCount = questCount;
  questChain.save();
}

export function handleQuestProofsSubmitted(
  event: QuestProofsSubmittedEvent,
): void {
  let questChain = QuestChain.load(event.address.toHexString());
  if (questChain == null) return;
  let user = getUser(event.params.sender);
  for (let i = 0; i < event.params.questIdList.length; ++i) {
    let questIndex = event.params.questIdList[i];
    let details = event.params.proofList[i];
    let quest = getQuest(event.address, questIndex);

    let questStatusId = quest.id.concat("-").concat(user.id);
    let questStatus = QuestStatus.load(questStatusId);
    if (questStatus == null) {
      questStatus = new QuestStatus(questStatusId);
      questStatus.questChain = questChain.id;
      questStatus.quest = quest.id;
      questStatus.user = user.id;
      questStatus.submissions = new Array<string>();
    } else {
      let questsFailed = questChain.questsFailed;
      let newArray = removeFromArray(questsFailed, questStatusId);
      questChain.questsFailed = newArray;

      questsFailed = user.questsFailed;
      newArray = removeFromArray(questsFailed, questStatusId);
      user.questsFailed = newArray;

      let usersFailed = quest.usersFailed;
      newArray = removeFromArray(usersFailed, questStatusId);
      quest.usersFailed = newArray;

      let usersInReview = quest.usersInReview;
      newArray = removeFromArray(usersInReview, questStatusId);
      quest.usersInReview = newArray;

      let questsInReview = user.questsInReview;
      newArray = removeFromArray(questsInReview, questStatusId);
      user.questsInReview = newArray;

      questsInReview = questChain.questsInReview;
      newArray = removeFromArray(questsInReview, questStatusId);
      questChain.questsInReview = newArray;
    }

    if (quest.skipReview) {
      let questsPassed = questChain.questsPassed;
      questsPassed.push(questStatusId);
      questChain.questsPassed = questsPassed;

      questsPassed = user.questsPassed;
      questsPassed.push(questStatusId);
      user.questsPassed = questsPassed;

      let usersPassed = quest.usersPassed;
      usersPassed.push(questStatusId);
      quest.usersPassed = usersPassed;

      questStatus.status = "pass";
    } else {
      let usersInReview = quest.usersInReview;
      usersInReview.push(questStatus.id);
      quest.usersInReview = usersInReview;

      let questsInReview = user.questsInReview;
      questsInReview.push(questStatus.id);
      user.questsInReview = questsInReview;

      questsInReview = questChain.questsInReview;
      questsInReview.push(questStatus.id);
      questChain.questsInReview = questsInReview;

      questStatus.status = "review";
    }

    let proofId = questStatus.id
      .concat("-")
      .concat("proof")
      .concat("-")
      .concat(event.block.timestamp.toHexString())
      .concat("-")
      .concat(event.logIndex.toHexString());
    let proof = new ProofSubmission(proofId);
    let metadata = fetchMetadata(details);
    proof.details = details;
    proof.name = metadata.name;
    proof.description = metadata.description;
    proof.imageUrl = metadata.imageUrl;
    proof.externalUrl = metadata.externalUrl;

    proof.quest = quest.id;
    proof.questChain = questChain.id;
    proof.questStatus = questStatus.id;

    proof.timestamp = event.block.timestamp;
    proof.txHash = event.transaction.hash;
    proof.user = user.id;

    let search = createSearchString(metadata.name, metadata.description);
    proof.search = search;

    let submissions = questStatus.submissions;
    submissions.push(proof.id);
    questStatus.submissions = submissions;

    let questers = quest.questers;
    questers = removeFromArray(questers, user.id); // to remove duplicates
    questers.push(user.id);
    quest.questers = questers;
    quest.numQuesters = questers.length;

    proof.save();
    questStatus.updatedAt = event.block.timestamp;
    questStatus.save();

    if (questStatus.status == "pass") {
      let completedQuesters = quest.completedQuesters;
      completedQuesters = removeFromArray(completedQuesters, user.id); // to remove duplicates
      completedQuesters.push(user.id);
      quest.completedQuesters = completedQuesters;
      quest.numCompletedQuesters = completedQuesters.length;
    }

    quest.save();
  }
  user.save();
  let questers = questChain.questers;
  questers = removeFromArray(questers, user.id); // to remove duplicates
  questers.push(user.id);
  questChain.questers = questers;
  questChain.numQuesters = questers.length;

  questChain = updateQuestChainCompletions(questChain);
  questChain.save();
}

export function handleQuestProofsReviewed(
  event: QuestProofsReviewedEvent,
): void {
  let questChain = QuestChain.load(event.address.toHexString());
  if (questChain == null) return;
  let reviewer = getUser(event.params.sender);
  for (let i = 0; i < event.params.questIdList.length; ++i) {
    let questIndex = event.params.questIdList[i];
    let quest = getQuest(event.address, questIndex);

    let quester = event.params.questerList[i];
    let success = event.params.successList[i];
    let details = event.params.detailsList[i];
    let user = getUser(quester);

    let questStatusId = quest.id.concat("-").concat(user.id);
    let questStatus = QuestStatus.load(questStatusId);
    if (questStatus == null) {
      questStatus = new QuestStatus(questStatusId);
      questStatus.questChain = questChain.id;
      questStatus.quest = quest.id;
      questStatus.user = user.id;
    }

    let usersInReview = quest.usersInReview;
    let newArray = removeFromArray(usersInReview, questStatusId);
    quest.usersInReview = newArray;

    let questsInReview = user.questsInReview;
    newArray = removeFromArray(questsInReview, questStatusId);
    user.questsInReview = newArray;

    questsInReview = questChain.questsInReview;
    newArray = removeFromArray(questsInReview, questStatusId);
    questChain.questsInReview = newArray;

    if (success) {
      questStatus.status = "pass";

      let questsPassed = questChain.questsPassed;
      questsPassed.push(questStatusId);
      questChain.questsPassed = questsPassed;

      questsPassed = user.questsPassed;
      questsPassed.push(questStatusId);
      user.questsPassed = questsPassed;

      let usersPassed = quest.usersPassed;
      usersPassed.push(questStatusId);
      quest.usersPassed = usersPassed;
    } else {
      questStatus.status = "fail";

      let questsFailed = questChain.questsFailed;
      questsFailed.push(questStatusId);
      questChain.questsFailed = questsFailed;

      questsFailed = user.questsFailed;
      questsFailed.push(questStatusId);
      user.questsFailed = questsFailed;

      let usersFailed = quest.usersFailed;
      usersFailed.push(questStatusId);
      quest.usersFailed = usersFailed;
    }

    let reviewId = questStatus.id
      .concat("-")
      .concat("review")
      .concat("-")
      .concat(event.block.timestamp.toHexString())
      .concat("-")
      .concat(event.logIndex.toHexString());
    let review = new ReviewSubmission(reviewId);
    let metadata = fetchMetadata(details);
    review.details = details;
    review.name = metadata.name;
    review.description = metadata.description;
    review.imageUrl = metadata.imageUrl;
    review.externalUrl = metadata.externalUrl;

    review.quest = quest.id;
    review.questChain = questChain.id;
    review.questStatus = questStatus.id;

    review.accepted = success;

    let submissions = questStatus.submissions;
    if (submissions.length > 0) {
      let lastSubmission = submissions[submissions.length - 1];
      review.proof = lastSubmission;
    }

    review.timestamp = event.block.timestamp;
    review.txHash = event.transaction.hash;
    review.user = user.id;
    review.reviewer = reviewer.id;

    let search = createSearchString(metadata.name, metadata.description);
    review.search = search;

    review.save();
    questStatus.updatedAt = event.block.timestamp;
    questStatus.save();

    if (success) {
      let completedQuesters = quest.completedQuesters;
      completedQuesters = removeFromArray(completedQuesters, user.id); // to remove duplicates
      completedQuesters.push(user.id);
      quest.completedQuesters = completedQuesters;
      quest.numCompletedQuesters = completedQuesters.length;
    }

    user.save();
    quest.save();
  }
  reviewer.save();
  questChain = updateQuestChainCompletions(questChain);
  questChain.save();
}
