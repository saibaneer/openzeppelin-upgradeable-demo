const { ethers, upgrades } = require("hardhat");

const PROXY = "0x94f6139C33dAE55f3F96115f6F227Cfcb800df10";

async function main() {
    const Bar = await ethers.getContractFactory('Bar');
    const upgraded = await upgrades.upgradeProxy(PROXY, Bar);
    console.log("The upgraded address is: ", upgraded.address);
    console.log((await upgraded.product()).toString());
    //console.log((await upgraded.exist()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });