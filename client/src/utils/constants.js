import abi from "./Transactions.json";

import.meta.env.VITE_GIPHY_API;

export const contractABI = abi.abi;
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
