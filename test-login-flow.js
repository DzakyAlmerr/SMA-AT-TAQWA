require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function testLogin() {
  // 1. Simulate login
  const r = await pool.query("SELECT * FROM users WHERE username = $1 AND role = $2", ['teacher', 'Teacher']);
  const u = r.rows[0];
  console.log('User found:', !!u, u?.user_id, u?.role);

  const valid = await bcrypt.compare('teacher123', u.password_hash);
  console.log('Password valid:', valid);

  // 2. Get teacher name
  const t = await pool.query("SELECT name, email FROM teachers WHERE teacher_id = $1", [u.user_id]);
  console.log('Teacher record:', t.rows[0]);

  // 3. Build the response exactly as auth.js does
  const token = jwt.sign({
    userId: u.user_id, username: u.username, role: u.role, relatedId: u.related_id
  }, 'your-secret-key', { expiresIn: '24h' });

  const serverResponse = {
    success: true,
    data: {
      token,
      user: {
        userId: u.user_id,
        username: u.username,
        role: u.role,
        name: t.rows[0]?.name || u.username,
        email: t.rows[0]?.email || ''
      }
    }
  };
  console.log('\nServer response structure:');
  console.log(JSON.stringify(serverResponse, null, 2).replace(token, 'TOKEN...'));

  // 4. Simulate what the adapter does
  let data = serverResponse;
  if (data && data.data && data.data.user) {
    data.user = data.data.user;
    data.token = data.data.token;
  }
  if (data && data.token && data.user) {
    data.user.token = data.token;
  }
  console.log('\nAfter adapter transform:');
  console.log('data.success:', data.success);
  console.log('data.user:', { ...data.user, token: data.user?.token ? 'TOKEN...' : undefined });

  // 5. What gets saved to localStorage
  const currentUser = data.user;
  console.log('\ncurrentUser (saved to localStorage):');
  console.log('  name:', currentUser?.name);
  console.log('  role:', currentUser?.role);
  console.log('  token exists:', !!currentUser?.token);

  pool.end();
}

testLogin().catch(e => { console.error(e); pool.end(); });
