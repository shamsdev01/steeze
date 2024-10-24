import { type ChainTypes } from "onChain/AvaliableChain";

type generateWalletReturnType = {
  chain: ChainTypes;
  address: string;
  encryptPrivateKey: string;
  iv: string;
};
