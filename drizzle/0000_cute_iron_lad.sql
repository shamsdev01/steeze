CREATE TABLE IF NOT EXISTS "steezglue-production_wallet" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"chain" varchar(50) NOT NULL,
	"address" varchar(255) NOT NULL,
	"iv" varchar(255) NOT NULL,
	"encrypted_jwt" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
