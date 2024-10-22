// Define chain types as a union of string literals
export type ChainTypes = "evm" | "solana" | "ton" | "bitcoin" | "tron";

// Create an array of available chains using the ChainTypes type
export const availableChains: ChainTypes[] = [
  "evm",
  "ton",
  "solana",
  "bitcoin",
  "tron",
];
