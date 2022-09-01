// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import { LockUpgradeable } from "./LockUpgradeable.sol";

contract LockUpgradeableV2 is LockUpgradeable {
  function deposit() external payable virtual {}

  receive() external payable {}
}
