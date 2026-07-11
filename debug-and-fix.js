require('dotenv').config();
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  // 1. Check quizzes
  const quizzes = await pool.query('SELECT quiz_id, title, author_id, status, created_at FROM quizzes');
  console.log('=== QUIZZES IN DB ===');
  console.log(quizzes.rows);

  // 2. Check what getQuizzes returns (simulate)
  const quizController = require('./controllers/quizController');
  const result = await quizController.getQuizzes({});
  console.log('\n=== getQuizzes() output ===');
  console.log(JSON.stringify(result, null, 2));

  // 3. Create student and admin accounts
  console.log('\n=== Creating accounts ===');
  const adminHash = bcrypt.hashSync('admin123', 10);
  const studentHash = bcrypt.hashSync('1234', 10);

  // Check existing users
  const users = await pool.query('SELECT user_id, username, role FROM users');
  console.log('Existing users:', users.rows);

  // Create student if not exists
  const studentExists = users.rows.find(u => u.username === 'student');
  if (!studentExists) {
    await pool.query(
      "INSERT INTO users (user_id, username, password_hash, role) VALUES ('S001', 'student', $1, 'Student')",
      [studentHash]
    );
    // Also create in students table
    await pool.query(
      "INSERT INTO students (student_id, name, email, class_id) VALUES ('S001', 'Siswa Demo', 'siswa@sekolah.com', '10A')"
    );
    console.log('✅ Student account created (student / 1234)');
  } else {
    console.log('Student already exists');
  }

  // Create/update admin if not exists or update password
  const adminExists = users.rows.find(u => u.username === 'admin');
  if (adminExists) {
    await pool.query("UPDATE users SET password_hash = $1 WHERE username = 'admin'", [adminHash]);
    console.log('✅ Admin password reset (admin / admin123)');
  } else {
    await pool.query(
      "INSERT INTO users (user_id, username, password_hash, role) VALUES ('A001', 'admin', $1, 'Admin')",
      [adminHash]
    );
    console.log('✅ Admin account created (admin / admin123)');
  }

  pool.end();
}

run().catch(e => { console.error(e); pool.end(); });
