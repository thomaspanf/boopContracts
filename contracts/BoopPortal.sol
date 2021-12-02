// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; 

import "hardhat/console.sol";

contract BoopPortal {
    uint256 totalBoops;

    mapping(address =>uint) public boopCount; 

    constructor(){
        console.log("I am a contract and I am smart"); 
    }

    function boop() public {
        totalBoops += 1; 
        console.log("%s has booped!", msg.sender); 
    }

    function getTotalBoops() public view returns (uint256) {
        console.log("We have %d total boops!", totalBoops); 
        return totalBoops; 
    }
}