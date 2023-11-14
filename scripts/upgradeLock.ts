import { ISavedContractsInfo } from "../helpers/deployments/contractInfo";
import { upgradeContract } from "../helpers/deployments/deployment";
import { readAddresses } from "../helpers/utils";
import { LockUpgradeableV2 } from "../typechain-types";

const main = async () => {
  const addresses = readAddresses(true);
  const lockInfo = addresses.LockUpgradeable as ISavedContractsInfo;
  const lockV2 = await upgradeContract<LockUpgradeableV2>(
    "LockUpgradeableV2",
    lockInfo.address,
    lockInfo.upgradeType,
    true, // can be false too
    undefined
  );
  console.log("SuccessFully upgraded the address", await lockV2.getAddress());
};

main();
