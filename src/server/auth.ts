import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env";
import { db } from "@/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@/server/db/schema";
import Google from "next-auth/providers/google";
import { eq } from "drizzle-orm";
import { verifyPassword } from "@/lib/hash";
import { createUser, insertWallet } from "./actions/CreateUserInsertWallet";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    //TODO: implement this
    async signIn({ profile, user }) {
      /**
       * @description Check if the user exists in the database if user doesn't exist create a new user and insert wallet
       * @param {Object} profile - The profile of the user
       * @returns {Boolean} - Returns true if the user exists
       */
      if (!profile?.email) {
        throw new Error("Email not provided");
      }
      const exitingUser = await db.query.users.findFirst({
        where: eq(users.email, user.email!),
      });
      if (!exitingUser) {
        console.log("Creating a new user");
        const userId = await createUser(user, profile);
        if (!userId) {
          throw new Error("Failed to create user");
        }
        await insertWallet(userId);
      }
      return true;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }) as Adapter,
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials.email),
        });

        if (
          user &&
          verifyPassword(credentials.password, user.encryptedPassword!)
        ) {
          return user;
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",

    /**
     * on new user detection ?  you can redirect them to a page like complete profile
     * @notice this will signup user first and if detects new account redirect to this page
     *  */
    // newUser: "/auth/new-user",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
