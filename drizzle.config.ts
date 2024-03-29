// drizzle.config.ts
import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv'

dotenv.config({ path: "./.env.local" })

export default {
  schema: "./functions/utils/db/schema.ts",
  out: "./drizzle/generated",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env["DATABASE_URL"] as string
  },
} satisfies Config;