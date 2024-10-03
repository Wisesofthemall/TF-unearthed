import pg from "pg";
import "./dotenv.js";
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // In most cases, SSL should be required
  },
});
