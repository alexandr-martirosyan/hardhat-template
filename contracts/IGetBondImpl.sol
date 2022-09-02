// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IGetBondImpl {
  function getBondImplementation() external view returns (address);
}
