require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const rawPrivateKey = process.env.PRIVATE_KEY || "";
const isValidPrivateKey = /^0x[a-fA-F0-9]{64}$/.test(rawPrivateKey);

module.exports = {
  solidity: "0.8.24",
  networks: {
    opnTestnet: {
      url: "https://testnet-rpc.iopn.tech",
      chainId: 984,
      accounts: isValidPrivateKey ? [rawPrivateKey] : []
    }
  }
};
