// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; 

import "hardhat/console.sol";

contract BoopPortal {
    uint256 totalBoops;

    event NewBoop(address indexed from, uint256 timestamp, string message);
    struct Boop {
        address booper;
        string message;
        uint256 timestamp;
    }

    Boop[] boops; 

    // mapping(address =>uint) public boopCount; 

    constructor(){
        console.log("I am a contract and I am smart"); 
    }

    function boop(string memory _message) public {
        totalBoops += 1; 
        console.log("%s has booped with message %s!", msg.sender, _message); 
        boops.push(Boop(msg.sender, _message, block.timestamp)); 
    }

    function getTotalBoops() public view returns (uint256) {
        console.log("We have %d total boops!", totalBoops); 
        return totalBoops; 
    }
}