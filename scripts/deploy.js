const hre = require("hardhat");

async function main() {
  const initialValue = 100;

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy(initialValue);

  await simpleStorage.waitForDeployment();

  const contractAddress = await simpleStorage.getAddress();

  console.log("SimpleStorage deployed to:", contractAddress);
  console.log("Network:", hre.network.name);
  console.log("Initial value:", initialValue);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
