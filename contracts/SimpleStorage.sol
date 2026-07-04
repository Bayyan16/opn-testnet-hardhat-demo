// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title SimpleStorage
/// @notice A minimal smart contract used to test Solidity deployment on OPN Chain testnet.
contract SimpleStorage {
    uint256 private storedValue;
    address public owner;

    event ValueUpdated(uint256 indexed oldValue, uint256 indexed newValue, address indexed updatedBy);

    constructor(uint256 initialValue) {
        storedValue = initialValue;
        owner = msg.sender;
    }

    function setValue(uint256 newValue) external {
        uint256 oldValue = storedValue;
        storedValue = newValue;

        emit ValueUpdated(oldValue, newValue, msg.sender);
    }

    function getValue() external view returns (uint256) {
        return storedValue;
    }
}
