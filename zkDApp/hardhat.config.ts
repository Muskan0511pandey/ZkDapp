import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-circom";

const config: HardhatUserConfig = {
  // solidity: "0.8.17",
  solidity: "0.6.11",
  paths: {
    artifacts: "./artifacts",
  },
  circom: {
    inputBasePath: "./circuits",

    // ptau: "https://hermezptau.blob.core.windows.net/ptau/powersOfTau28_hez_final_15.ptau",
    // ptau:"https://zk-snarks.s3.amazonaws.com/powersOfTau28_hez_final_15.ptau",
    // ptau:"./ptau/powersOfTau28_hez_final_15.ptau",
    // we can download the powersOfTau28_hez_final_15.ptau and give path to the hardhat-circom
    ptau:"/home/muskan/zkDapp/Applied-ZKP-Workshop/zkDApp/ptau/powersOfTau28_hez_final_15.ptau",


    circuits: [
      { name: "group"}
    ]
  }
};

export default config;
