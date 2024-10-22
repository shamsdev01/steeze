import { type Config } from "drizzle-kit";

import { env } from "@/env";
// Load the appropriate .env file based on NODE_ENV
import { config as loadEnv } from "dotenv";
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
loadEnv({ path: envFile });

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["steezglue-production_*"],
} satisfies Config;
