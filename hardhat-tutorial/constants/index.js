const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const VRF_WRAPPER = "0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693";
const FEE = ethers.utils.parseEther("0.0001");
module.exports = { LINK_TOKEN, VRF_WRAPPER, FEE };
