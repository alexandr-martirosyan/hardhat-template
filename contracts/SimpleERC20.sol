// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleERC20 is ERC20 {
  constructor() ERC20("Token", "TK") {}

  function mint(address receiver, uint256 amount) external {
    _mint(receiver, amount);
  }

  function burn(address receiver, uint256 amount) external {
    _burn(receiver, amount);
  }

  function mintMe(uint256 amount) external {
    _mint(msg.sender, amount);
  }

  function burnMe(uint256 amount) external {
    _burn(msg.sender, amount);
  }
}
