import { type ChainTypes, availableChains } from "onChain/AvaliableChain";
import { encryptPrivateKey } from "../EncryptDecrypt";
import { generateEvmWallet } from "./evmWallet";

type generateWalletReturnType = {
  chain: ChainTypes;
  address: string;
  encryptPrivateKey: string;
  iv: string;
};

/**
 * @name generateWallets
 * @description Generate wallets for all available chains
 * @dev this get called on create user Accoung
 * @returns {Array} - Returns an array of wallet
 */

export async function generateWallets(): Promise<generateWalletReturnType[]> {
  const wallets: generateWalletReturnType[] = [];
  for (const chain of availableChains) {
    const wallet = generateWallet(chain);
    const { encryptedPrivateKey, iv } = encryptPrivateKey(wallet.privateKey);
    wallets.push({
      chain,
      address: wallet.address,
      encryptPrivateKey: encryptedPrivateKey,
      /**
       * @notice The IV dataType from the encryptPrivateKey function is  Buffer<ArrayBufferLike>
       * @notice when decrypting the private key, the IV must be converted back to a Buffer
       */
      iv: iv.toString("hex"),
    });
  }
  return wallets;
}

/**
 * @name generateWallet
 * @description Generate wallet for a specific chain
 * @param {ChainTypes} chain - The chain to generate the wallet for
 * @returns {Object} - Returns an object containing the address and private key
 */

function generateWallet(chain: ChainTypes): {
  address: string;
  privateKey: string;
} {
  switch (chain) {
    case "evm":
      return generateEvmWallet();
    // case "solana":
    //   return generateSolanaWallet();
    // case "ton":
    //   return generateTonWallet();
    // case "bitcoin":
    //   return generateBitcoinWallet();
    default:
      throw new Error("Invalid chain");
  }
}