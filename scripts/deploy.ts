import { deployNewContract } from "../helpers/deployments/deployment";
import { UpgradeType } from "../helpers/deployments/upgradeType";
import { saveAddresses } from "../helpers/utils";
import { Lock, LockUpgradeable } from "../typechain-types";

const main = async () => {
  const unlockTime = 1662073309;
  const lock = await deployNewContract<Lock>(
    "Lock",
    UpgradeType.NON_UPGRADEABLE,
    undefined,
    unlockTime
  );
  const lockUp = await deployNewContract<LockUpgradeable>(
    "LockUpgradeable",
    UpgradeType.TRANSPARENT,
    undefined,
    unlockTime
  );
  const addresses = {
    lock: lock.address,
    lockUp: lockUp.address,
  };

  saveAddresses(addresses);
};

main();
