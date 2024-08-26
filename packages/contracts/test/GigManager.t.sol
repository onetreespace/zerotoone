// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {GigManager} from "../src/GigManager.sol";

contract GigManagerTest is Test {
    GigManager public gigManager;

    // function setUp() public {
    //     gigManager = new GigManager();
    //     gigManager.setNumber(0);
    // }
    //
    // function test_Increment() public {
    //     gigManager.increment();
    //     assertEq(gigManager.number(), 1);
    // }
    //
    // function testFuzz_SetNumber(uint256 x) public {
    //     gigManager.setNumber(x);
    //     assertEq(gigManager.number(), x);
    // }
}
