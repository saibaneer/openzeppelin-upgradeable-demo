const { ethers, upgrades } = require("hardhat");

async function main() {

    const Foo = await ethers.getContractFactory('Foo');
    const proxy = await upgrades.deployProxy(Foo, [2,3], {
        initializer: "initialize",
    });
    await proxy.deployed()

    console.log("The proxy address is : ", proxy.address);
}


main()