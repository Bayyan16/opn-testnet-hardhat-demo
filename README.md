# OPN Testnet Hardhat Demo

A simple Solidity and Hardhat demo project for testing smart contract development on OPN Chain Testnet.

This repository contains a minimal smart contract, deployment script, unit test, and network configuration for OPN Testnet.

## Overview

This project is built as a small Web3 developer demo using:

- Solidity
- Hardhat
- JavaScript deployment script
- Hardhat unit tests
- OPN Chain Testnet configuration

The goal is to provide a clean and simple example of how to prepare, compile, test, and deploy a Solidity smart contract on an EVM-compatible testnet.

## OPN Testnet Information

| Item | Value |
|---|---|
| Network Name | OPN Testnet |
| Chain ID | 984 |
| RPC URL | https://testnet-rpc.iopn.tech |
| Currency Symbol | OPN |
| Explorer | https://testnet.iopn.tech |
| Faucet | https://faucet.iopn.tech |

## Smart Contract

The included smart contract is:

contracts/SimpleStorage.sol

SimpleStorage is a minimal Solidity contract that allows users to:

- Store an unsigned integer value
- Update the stored value
- Read the stored value
- Emit an event when the value is updated
- Track the deployer as the owner

## Project Structure

opn-testnet-hardhat-demo/
- contracts/SimpleStorage.sol
- scripts/deploy.js
- test/SimpleStorage.test.js
- hardhat.config.js
- package.json
- package-lock.json
- .env.example
- .gitignore
- README.md

## Install Dependencies

npm install

## Compile Contracts

npm run compile

## Run Tests

npm test

Expected result:

2 passing

## Environment Variables

Before deploying to OPN Testnet, create a .env file:

cp .env.example .env

Then add a private key from a burner wallet:

PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE

Important:

- Never commit .env
- Never commit private keys
- Never use a wallet containing real assets
- Use a burner wallet for testnet only

## Deploy to OPN Testnet

After adding a valid private key to .env, deploy with:

npm run deploy:opn

The deployment script will deploy SimpleStorage.sol to OPN Testnet and print the deployed contract address.

## Security Notes

This repository is for testnet development practice only.

Do not commit:

- .env
- private keys
- seed phrases
- wallet credentials
- production secrets

## License

MIT
