const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); 
    const boopContractFactory = await hre.ethers.getContractFactory("BoopPortal"); 
    const boopContract = await boopContractFactory.deploy(); 
    await boopContract.deployed();

    console.log("Contract deployed to:", boopContract.address); 
    console.log("Contract deployed by:", owner.address); 

    let boopCount = await boopContract.getTotalBoops();
    console.log(boopCount.toNumber()); 

    //send some messages
    let boopTxn = await boopContract.boop("hello! test message!");
    await boopTxn.wait();     //wait for tx to be mined 


    const [_, user] = await hre.ethers.getSigners(); 
    boopTxn = await boopContract.connect(user).boop("Another test message!");
    await boopTxn.wait();  //wait for tx to be mined 

    let allBoops = await boopContract.getTotalBoops(); 
    console.log(allBoops); 
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