// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

//   ╔═╗ ┬ ┬┌─┐┌─┐┌┬┐╔═╗┬ ┬┌─┐┬┌┐┌┌─┐
//   ║═╬╗│ │├┤ └─┐ │ ║  ├─┤├─┤││││└─┐
//   ╚═╝╚└─┘└─┘└─┘ ┴ ╚═╝┴ ┴┴ ┴┴┘└┘└─┘

import {IQuestChainToken} from "./IQuestChainToken.sol";

/// @notice Represents the possible statuses of a quest.
enum QuestStatus {
    init, // Quest is initialized but not yet reviewed or completed.
    review, // Quest is under review.
    pass, // Quest has been successfully completed.
    fail // Quest has failed.
}

/// @notice Structure for holding quest details.
/// @dev Includes information about whether the quest is paused, optional, or can skip review.
struct QuestDetails {
    // uint256 order; // The order of the quest in the chain.
    // bool assignment; // Indicates if the quest is an assignment.
    // uint256[] requiredQuests; // List of quest IDs required to complete this quest.
    bool disabled; // Indicates if the quest is paused.
    bool optional; // Indicates if the quest is optional.
    bool skipReview; // Indicates if the quest can skip the review process.
    string details; // Off-chain details of the quest.
}

struct QuestChainInfo {
    address[] owners;
    address[] admins;
    address[] editors;
    address[] reviewers;
    QuestDetails[] quests;
    bool paused;
    string details;
    string tokenURI;
}

interface IQuestChainFactoryFunctions {
    function create(
        QuestChainInfo calldata _info,
        bytes32 _salt
    ) external returns (address);

    function getQuestChainAddress(
        uint256 _index
    ) external view returns (address);

    function questChainCount() external view returns (uint256);

    function questChainTemplate() external view returns (address);

    function questChainToken() external view returns (IQuestChainToken);

    function admin() external view returns (address);
}

/// @title IQuestChainFactorySignals
/// @notice Interface for QuestChainFactory signals including events and errors.
interface IQuestChainFactorySignals {
    /// @notice Emitted when the factory is set up.
    event FactorySetup();

    /// @notice Emitted when a new admin address is proposed.
    /// @param proposedAdmin The address of the proposed new admin.
    event AdminReplaceProposed(address proposedAdmin);

    /// @notice Emitted when the admin is replaced.
    /// @param newAdmin The address of the new admin.
    event AdminReplaced(address newAdmin);

    /// @notice Emitted when a new quest chain is created.
    /// @param questChainCount The index of the created quest chain.
    /// @param questChainAddress The address of the created quest chain.
    event QuestChainCreated(uint256 questChainCount, address questChainAddress);

    /// @notice Error thrown when a zero address is provided.
    error ZeroAddress();

    /// @notice Error thrown when no change is detected in the provided address.
    error NoAddressChange();

    /// @notice Error thrown when no change is detected in the provided uint value.
    error NoUintChange();

    /// @notice Error thrown when a non-admin attempts to call a restricted function.
    error NotAdmin();

    /// @notice Error thrown when an action is attempted too soon.
    error TooSoon();

    /// @notice Error thrown when the caller is not the proposed admin.
    error NotProposedAdmin();
}

// solhint-disable-next-line no-empty-blocks
interface IQuestChainFactory is
    IQuestChainFactoryFunctions,
    IQuestChainFactorySignals
{}
