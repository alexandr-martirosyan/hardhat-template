import { ethers } from "hardhat";
import { IGetBondImpl } from "../typechain-types";

const main = async () => {
  const bond: IGetBondImpl = await ethers.getContractAt(
    "IGetBondImpl",
    "0x31BE0FA706E391a88C3A09cC13112bd55E0887f5"
  );
  // const tx = await aMaticC.approve(
  //   "0x62A509BA95c75Cabc7190469025E5aBeE4eDdb2a",
  //   ethers.constants.MaxUint256
  // );
  // await tx.wait();
  // console.log("ts was successful:", tx.hash);

  const addr = await bond.getBondImplementation();
  console.log(addr);
  // aMATICc implementation
  // 0x0284d9c3de78b200c43d1ce66b9d74d42d8c62ec;
};

main();
