require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function run() {
  // Test 1: Direct update quizzes without updated_at
  try {
    const r1 = await pool.query(
      `UPDATE quizzes SET title=$1 WHERE quiz_id=$2 RETURNING title, status, quiz_id`,
      ['Direct Update Test', 'Q1783734579422']
    );
    console.log('Direct quiz update:', r1.rows[0]);
  } catch(e) { console.error('Direct quiz update FAILED:', e.message); }

  // Test 2: Check classes column
  try {
    const r2 = await pool.query('SELECT * FROM classes ORDER BY name LIMIT 5');
    console.log('Classes (ORDER BY name):', r2.rows.length, 'rows');
  } catch(e) { console.error('Classes ORDER BY name FAILED:', e.message); }

  // Test 3: Verify columns in quizzes table
  const cols = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name='quizzes'`);
  console.log('Quiz columns:', cols.rows.map(r=>r.column_name).join(', '));

  await pool.end();
}

run().catch(e => { console.error(e.message); pool.end(); });
