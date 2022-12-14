import { SolidityUserConfig } from "hardhat/types";

const solidity: SolidityUserConfig = {
  compilers: [
    {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 201,
        },
      },
    },
  ],
};

export default solidity;
