import { deployNewContract } from "../helpers/deployments/deployment";
import { UpgradeType } from "../helpers/deployments/upgradeType";
import { SimpleERC20 } from "../typechain-types/contracts/SimpleERC20";

const main = async () => {
  const token = await deployNewContract<SimpleERC20>(
    "SimpleERC20",
    UpgradeType.NON_UPGRADEABLE,
    []
  );

  console.log("token deployed to the address ->", token.address);
};

main();
