require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const hash = bcrypt.hashSync('teacher123', 10);

async function createTeacher() {
  try {
    await pool.query("INSERT INTO users (user_id, username, password_hash, role) VALUES ('T001', 'teacher', $1, 'Teacher')", [hash]);
    await pool.query("INSERT INTO teachers (teacher_id, name, email, subject) VALUES ('T001', 'Pak Guru Budi', 'budi@sekolah.com', 'Matematika')");
    console.log('Teacher created successfully');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}

createTeacher();
