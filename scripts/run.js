const { hexStripZeros } = require("@ethersproject/bytes")

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); 
    const boopContractFactory = await hre.ethers.getContractFactory("BoopPortal"); 
    const boopContract = await boopContractFactory.deploy(); 
    await boopContract.deployed();

    console.log("Contract deployed to:", boopContract.address); 
    console.log("Contract deployed by:", owner.address); 

    let boopCount;
    boopCount = await boopContract.getTotalBoops();

    let boopTxn = await boopContract.boop();
    await boopTxn.wait();     

    boopCount = await boopContract.getTotalBoops(); 

    boopTxn = await boopContract.connect(randomPerson).boop();
    await boopTxn.wait(); 

    boopCount = await boopContract.getTotalBoops(); 
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error); 
        process.exit(1); 
    }
};

runMain();