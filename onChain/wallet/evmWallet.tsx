import { bscProvider, ethereumProvider, polygonProvider } from "../evm";
import { ethers } from "ethers";
// Create a new Ethereum wallet

//ethereum / bsc / polygon wallet

export function generateEvmWallet() {
  const wallet = ethers.Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}
