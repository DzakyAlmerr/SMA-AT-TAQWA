require('dotenv').config();
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const schema = fs.readFileSync('./db/schema.sql', 'utf8');

async function runSchema() {
  try {
    console.log('Creating tables...');
    await pool.query(schema);
    
    // Also inject the default teacher for convenience
    const bcrypt = require('bcryptjs');
    const hash = bcrypt.hashSync('teacher123', 10);
    // Delete if exists
    await pool.query("DELETE FROM users WHERE username='teacher'");
    await pool.query("DELETE FROM teachers WHERE teacher_id='T001'");
    // Insert
    await pool.query("INSERT INTO users (user_id, username, password_hash, role) VALUES ('T001', 'teacher', $1, 'Teacher')", [hash]);
    await pool.query("INSERT INTO teachers (teacher_id, name, email, subject) VALUES ('T001', 'Pak Guru Budi', 'budi@sekolah.com', 'Matematika')");
    
    console.log('✅ Schema fully recreated and default teacher inserted!');
  } catch(e) {
    console.error('Error:', e);
  } finally {
    pool.end();
  }
}

runSchema();
