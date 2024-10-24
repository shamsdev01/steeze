"use server";
import { db } from "../db";
import { wallets } from "../db/schema";
import { generateWallets } from "onChain/wallet/generateWallet";

export async function insertWalletToDb(email: string) {
  // Insert the generated wallets into the wallets table
  await db.insert(wallets).values(
    (await generateWallets()).map((wallet) => ({
      email: email, // Associate each wallet with the new user's ID
      chain: wallet.chain,
      address: wallet.address,
      iv: wallet.iv, // Store the IV used in encryption
      encryptedPrivateKey: wallet.encryptPrivateKey, // Store the encrypted private key
    })),
  );
}

export default async function CreateWalletOnSignUp(email: string) {
  await db.transaction(async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/createwalletsignup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create wallet");
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      console.log("Wallet created:", data);
    } catch (error) {
      console.log("Error creating wallet:", error);
      throw new Error("Failed to create wallet");
    }
  });
}
