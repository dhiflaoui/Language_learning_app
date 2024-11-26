import "dotenv/config";
import type { Config } from "drizzle-kit";
// TODO: fix issue here
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
