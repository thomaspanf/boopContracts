# web3 decentralized application  

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# required installations 

node/npm:  https://hardhat.org/tutorial/setting-up-the-environment.html

```
npm init -y
npm install --save-dev hardhat
npx hardhat
```

install dependencies: 
```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

run and test: 
```
npx hardhat compile
npx hardhat test
```
# web3dapp

run contracts
```
npx hardhat run scripts/run.js
```
initialize local etherium network
```
npx hardhat node
```
deploy contract to local network (open seperate terminal from local network) 
```
npx hardhat run scripts/deploy.js --network localhost
```


