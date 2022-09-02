import { ethers } from "hardhat";
import { IERC } from "../typechain-types/contracts/IERC";

const main = async () => {
  const aMaticC: IERC = await ethers.getContractAt(
    "IERC",
    "0x0e9b89007eee9c958c0eda24ef70723c2c93dd58"
  );
  // const tx = await aMaticC.approve(
  //   "0x62A509BA95c75Cabc7190469025E5aBeE4eDdb2a",
  //   ethers.constants.MaxUint256
  // );
  // await tx.wait();
  // console.log("ts was successful:", tx.hash);

  const ratio = await aMaticC.ratio();
  console.log(ratio.toString());
};

main();
