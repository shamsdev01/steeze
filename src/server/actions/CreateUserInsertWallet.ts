"server only";
import { type AdapterUser } from "next-auth/adapters";
import { db } from "../db";
import { users, wallets } from "../db/schema";
import { type Profile, type User } from "next-auth";
import { generateWallets } from "onChain/wallet/generateWallet";
import { hashUserPassword } from "@/lib/hash";
import { eq } from "drizzle-orm";

type CreateUserProps = User | AdapterUser;

type CreateUserProps2 = {
  email: string;
  password: string;
};

// Type guard to distinguish between the two types
function isCreateUserProps2(
  user: CreateUserProps | CreateUserProps2,
): user is CreateUserProps2 {
  return "email" in user && "password" in user;
}

export async function createUser(
  user: CreateUserProps | CreateUserProps2,
  profile: Profile,
): Promise<string | undefined> {
  console.log("Creating a new user");

  let newUser;
  const getUser = await db.query.users.findFirst({
    where: eq(users.email, user.email!),
  });

  if (getUser) {
    console.log("User already exists");
    throw new Error("User already exists");
  }
  if (isCreateUserProps2(user)) {
    // Handle CreateUserProps2 (with email and password)
    newUser = await db
      .insert(users)
      .values({
        email: user.email,
        encryptedPassword: hashUserPassword(user.password),
      })
      .returning({ insertedId: users.id });
  } else {
    // Handle CreateUserProps (with user object)
    newUser = await db
      .insert(users)
      .values({
        email: user.email!,
        image: profile.image,
        name: profile.name,
      })
      .returning({ insertedId: users.id });
  }

  return newUser[0]?.insertedId;
}

export async function insertWallet(userId: string) {
  // Insert the generated wallets into the wallets table
  await db.insert(wallets).values(
    (await generateWallets()).map((wallet) => ({
      userId: userId, // Associate each wallet with the new user's ID
      chain: wallet.chain,
      address: wallet.address,
      iv: wallet.iv, // Store the IV used in encryption
      encryptedPrivateKey: wallet.encryptPrivateKey, // Store the encrypted private key
    })),
  );
}
