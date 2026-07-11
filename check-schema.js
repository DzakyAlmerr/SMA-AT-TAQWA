require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function checkSchema() {
  const tables = ['users', 'quizzes', 'classes', 'students', 'teachers', 'materials', 'quiz_results'];
  for (const table of tables) {
    const r = await pool.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1 ORDER BY ordinal_position`, [table]);
    console.log(`\n=== ${table.toUpperCase()} ===`);
    r.rows.forEach(c => console.log(`  ${c.column_name} (${c.data_type})`));
  }
  // Also run sample data checks
  const counts = await pool.query(`SELECT 
    (SELECT COUNT(*) FROM users) as users,
    (SELECT COUNT(*) FROM students) as students,
    (SELECT COUNT(*) FROM teachers) as teachers,
    (SELECT COUNT(*) FROM classes) as classes,
    (SELECT COUNT(*) FROM quizzes) as quizzes,
    (SELECT COUNT(*) FROM quiz_results) as quiz_results,
    (SELECT COUNT(*) FROM materials) as materials
  `);
  console.log('\n=== RECORD COUNTS ===');
  console.log(counts.rows[0]);
  await pool.end();
}
checkSchema().catch(e => { console.error(e.message); pool.end(); });
