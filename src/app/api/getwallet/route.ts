import { db } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { wallets } from "../../../server/db/schema";
import { decryptPrivateKey } from "onChain/EncryptDecrypt";

export async function GET(req: Request) {
  const currEmail = (await currentUser())?.emailAddresses[0]?.emailAddress;

  if (typeof currEmail == "undefined") {
    return new Response(JSON.stringify({ message: "user not found" }), {
      status: 401,
    });
  }

  const userWallets = await db.query.wallets.findMany({
    where: eq(wallets.email, currEmail),
  });
  if (!userWallets.length) {
    throw new Error("No wallets found for user");
  }

  const decryptedKeys = userWallets.reduce(
    (acc, wallet) => {
      acc[wallet.chain] = {
        privateKey: decryptPrivateKey(wallet.encryptedPrivateKey, wallet.iv),
        address: wallet.address,
      };
      return acc;
    },
    {} as Record<string, { privateKey: string; address: string }>,
  );
  return new Response(JSON.stringify({ wallet: decryptedKeys }), {
    status: 200,
  });
}
