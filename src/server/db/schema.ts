import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `steezglue-production_${name}`,
);

export const wallets = createTable("wallet", {
  id: serial("id").primaryKey(), // Wallet primary key
  email: varchar("user_id", { length: 255 }).notNull(),
  chain: varchar("chain", { length: 50 }).notNull(), // The blockchain chain (e.g., Ethereum, BSC)
  address: varchar("address", { length: 255 }).notNull(), // Public wallet address on that chain
  iv: varchar("iv", { length: 255 }).notNull(), // Store the IV used in encryption (as a string)
  encryptedPrivateKey: text("encrypted_jwt").notNull(), // JWT containing the encrypted private key
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
