// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import { LockUpgradeable } from "./LockUpgradeable.sol";

// solhint-disable no-empty-blocks
contract LockUpgradeableV2 is LockUpgradeable {
  function deposit() external payable virtual {}

  receive() external payable {}
}
