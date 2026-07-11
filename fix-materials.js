require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  await pool.query("UPDATE materials SET author_name = 'Pak Guru Budi' WHERE author_name = ''");
  console.log('Fixed materials');
  pool.end();
}
run();
