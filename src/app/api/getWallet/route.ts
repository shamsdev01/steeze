import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";
import { wallets } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { decryptPrivateKey } from "onChain/EncryptDecrypt";

export async function Get(req: Request) {
  const user = await getServerAuthSession();
  if (!user?.user.id) {
    return new Response(JSON.stringify({ message: "user not found" }), {
      status: 401,
    });
  }

  const userWallets = await db.query.wallets.findMany({
    where: eq(wallets.userId, user.user.id),
  });

  const decryptedKeys = userWallets.map((wallets) => ({
    [wallets.chain]: decryptPrivateKey(
      wallets?.encryptedPrivateKey,
      wallets?.iv,
    ),
  }));

  return new Response(JSON.stringify({ keys: decryptedKeys }), { status: 200 });
}
