import { ethers } from "ethers";
import { JsonRpcProvider } from "ethers";
// Ethereum Provider
export const ethereumProvider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/",
);

// BSC Provider
export const bscProvider = new JsonRpcProvider(
  "https://bsc-dataseed.binance.org/",
);

// Polygon Provider
export const polygonProvider = new JsonRpcProvider("https://polygon-rpc.com/");
