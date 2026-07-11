require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function check() {
  const res = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name='students'");
  console.log('Students:', res.rows.map(r => r.column_name));
  
  const res2 = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name='teachers'");
  console.log('Teachers:', res2.rows.map(r => r.column_name));

  const res3 = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name='classes'");
  console.log('Classes:', res3.rows.map(r => r.column_name));

  pool.end();
}
check();
