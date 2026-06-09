import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export default sql;

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS consultations (
      id        SERIAL PRIMARY KEY,
      name      VARCHAR(100) NOT NULL,
      email     VARCHAR(200) NOT NULL,
      category  VARCHAR(50)  NOT NULL,
      message   TEXT         NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}
