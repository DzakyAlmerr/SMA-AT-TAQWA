const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function testLogin() {
  const users = await pool.query('SELECT * FROM users');
  for (const user of users.rows) {
    console.log(`Checking ${user.username} (${user.role})`);
    if (user.username === 'admin') {
      const match = await bcrypt.compare('admin123', user.password_hash);
      console.log('admin / admin123 match:', match);
    }
    if (user.username === 'student') {
      const match = await bcrypt.compare('1234', user.password_hash);
      console.log('student / 1234 match:', match);
    }
    if (user.username === 'teacher') {
      const match = await bcrypt.compare('teacher123', user.password_hash);
      console.log('teacher / teacher123 match:', match);
    }
  }
  
  // Now simulate an actual API request
  try {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'admin123', role: 'Admin' })
    });
    const data = await res.json();
    console.log('Admin login API response:', data);
  } catch (e) {
    console.error('API Error', e);
  }
  
  pool.end();
}

testLogin().catch(console.error);
