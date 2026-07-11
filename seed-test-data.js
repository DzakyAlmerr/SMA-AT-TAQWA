require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function seedTestData() {
  try {
    console.log('Seeding classes...');
    await pool.query(`INSERT INTO classes (class_id, name, grade, teacher_id) VALUES ('10A', 'Kelas 10 IPA A', '10', 'T001') ON CONFLICT (class_id) DO NOTHING`);
    
    // Ensure student is in class 10A
    console.log('Updating student class...');
    await pool.query(`UPDATE students SET class_id = '10A' WHERE student_id = 'S001'`);
    
    console.log('Done!');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
seedTestData();
