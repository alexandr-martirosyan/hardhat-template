// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// Import this file to use console.log
import "hardhat/console.sol";

contract LockUpgradeable is Initializable {
  uint256 public unlockTime;
  address payable public owner;

  event Withdrawal(uint256 amount, uint256 when);

  function initialize(uint256 _unlockTime) public payable initializer {
    require(block.timestamp < _unlockTime, "Unlock time should be in the future");

    unlockTime = _unlockTime;
    owner = payable(msg.sender);
  }

  function withdraw() public virtual {
    // Uncomment this line to print a log in your terminal
    // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    require(block.timestamp >= unlockTime, "You can't withdraw yet");
    require(msg.sender == owner, "You aren't the owner");

    emit Withdrawal(address(this).balance, block.timestamp);

    owner.transfer(address(this).balance);
  }
}
