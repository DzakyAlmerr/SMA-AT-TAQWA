require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function migrate() {
  try {
    console.log('Adding columns to students...');
    await pool.query("ALTER TABLE students ADD COLUMN IF NOT EXISTS phone VARCHAR(50);");
    await pool.query("ALTER TABLE students ADD COLUMN IF NOT EXISTS password VARCHAR(255) DEFAULT 'password123';");
    await pool.query("ALTER TABLE students ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'Active';");
    await pool.query("ALTER TABLE students ADD COLUMN IF NOT EXISTS gender VARCHAR(20);");
    
    console.log('Adding columns to teachers...');
    await pool.query("ALTER TABLE teachers ADD COLUMN IF NOT EXISTS phone VARCHAR(50);");
    await pool.query("ALTER TABLE teachers ADD COLUMN IF NOT EXISTS password VARCHAR(255) DEFAULT 'password123';");
    await pool.query("ALTER TABLE teachers ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'Active';");
    await pool.query("ALTER TABLE teachers ADD COLUMN IF NOT EXISTS subjects TEXT;");
    
    console.log('Updating existing records with default password...');
    await pool.query("UPDATE students SET password = '1234' WHERE password IS NULL OR password = 'password123';");
    await pool.query("UPDATE teachers SET password = '1234' WHERE password IS NULL OR password = 'password123';");

    console.log('Migration complete!');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    pool.end();
  }
}

migrate();
