import { HardhatNetworkForkingUserConfig, NetworksUserConfig } from "hardhat/types";
import pks from "./pk.config";

let forking: HardhatNetworkForkingUserConfig | undefined;
if (process.env.FORKING_RPC) {
  forking = {
    url: process.env.FORKING_RPC,
  };
}

const networks: NetworksUserConfig = {};

networks.hardhat = {
  forking,
  accounts: {
    mnemonic: "test test test test test test test test test test test junk",
    count: 25,
    accountsBalance: "100000000000000000000000000",
  },
};
networks.anyNetwork = getNetworkObject(process.env.ANY_NETWORK_RPC);
networks.mainnet = getNetworkObject(process.env.MAINNET_RPC);
networks.ropsten = getNetworkObject(process.env.ROPSTEN_RPC);
networks.rinkeby = getNetworkObject(process.env.RINKEBY_RPC);
networks.goerli = getNetworkObject(process.env.GOERLI_RPC);
networks.kovan = getNetworkObject(process.env.KOVAN_RPC);
networks.sepolia = getNetworkObject(process.env.SEPOLIA_RPC);
networks.bsc = getNetworkObject(process.env.BSC_RPC);
networks.bscTestnet = getNetworkObject(process.env.BSC_TESTNET_RPC);
networks.polygon = getNetworkObject(process.env.POLYGON_RPC || "https://polygon-rpc.com/");
networks.polygonTestnet = getNetworkObject(process.env.POLYGON_TESTNET_RPC);
networks.fantom = getNetworkObject(process.env.FTM_RPC);
networks.fantomTestnet = getNetworkObject(process.env.FTM_TESTNET_RPC);
networks.optimistic = getNetworkObject(process.env.OPTIMISTIC_RPC);
networks.optimisticTestnet = getNetworkObject(process.env.OPTIMISTIC_TESTNET_RPC);
networks.arbitrum = getNetworkObject(process.env.ARBITRUM_RPC);
networks.arbitrumTestnet = getNetworkObject(process.env.ARBITRUM_TESTNET_RPC);
networks.avalanche = getNetworkObject(process.env.AVALANCHE_RPC);
networks.avalancheTestnet = getNetworkObject(process.env.AVALANCHE_TESTNET_RPC);

export default networks;

function getNetworkObject(rpc: string | undefined) {
  return {
    url: rpc || "",
    accounts: pks,
  };
}
