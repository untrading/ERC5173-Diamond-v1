import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomiclabs/hardhat-ethers"
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  namedAccounts: {
    deployer: 0, // Deployer
  },

  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_TOKEN}`, // RPC URL
      accounts: process.env.DEPLOYER_PRIVATE_KEY == undefined ? [] : [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
      saveDeployments: true,
    },
  },
  
  verify: {
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY
    }
  },
};

export default config;
