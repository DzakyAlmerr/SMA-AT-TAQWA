// 🔐 AUTH ROUTES: Authentication endpoints
// 📝 Handles user login, registration, and token management

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

// PostgreSQL database connection
const poolConfig = process.env.DATABASE_URL 
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'smart_school',
        password: process.env.DB_PASSWORD || 'password',
        port: process.env.DB_PORT || 5432,
    };
const pool = new Pool(poolConfig);

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '24h';

// User login endpoint
router.post('/login', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        
        if (!username || !password || !role) {
            return res.status(400).json({
                success: false,
                error: 'Username, password, and role are required'
            });
        }
        
        // Find user by username (case-insensitive)
        const result = await pool.query(
            'SELECT * FROM users WHERE username ILIKE $1 AND role = $2',
            [username.trim(), role]
        );
        
        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }
        
        const user = result.rows[0];
        
        // Verify password
        const validPassword = await bcrypt.compare(password, user.password_hash);
        
        if (!validPassword) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }
        
        // Fetch actual name from related tables
        let name = user.username;
        let email = '';
        if (user.role === 'Teacher') {
            const teacherRes = await pool.query('SELECT name, email FROM teachers WHERE teacher_id = $1', [user.user_id]);
            if (teacherRes.rows.length > 0) {
                name = teacherRes.rows[0].name;
                email = teacherRes.rows[0].email;
            }
        } else if (user.role === 'Student') {
            const studentRes = await pool.query('SELECT name, email FROM students WHERE student_id = $1', [user.user_id]);
            if (studentRes.rows.length > 0) {
                name = studentRes.rows[0].name;
                email = studentRes.rows[0].email;
            }
        }
        
        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user.user_id,
                username: user.username,
                role: user.role,
                relatedId: user.related_id
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRE }
        );
        
        // Return user info and token
        res.json({
            success: true,
            data: {
                token,
                user: {
                    userId: user.user_id,
                    username: user.username,
                    role: user.role,
                    name: name,
                    email: email
                }
            }
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// User registration endpoint
router.post('/register', async (req, res) => {
    try {
        const { username, password, role, name, email, relatedId } = req.body;
        
        if (!username || !password || !role) {
            return res.status(400).json({
                success: false,
                error: 'Username, password, and role are required'
            });
        }
        
        // Hash password
        const saltRounds = 12;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        
        // Check if username already exists
        const existingUser = await pool.query(
            'SELECT user_id FROM users WHERE username = $1',
            [username]
        );
        
        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                success: false,
                error: 'Username already exists'
            });
        }
        
        // Create new user
        const result = await pool.query(
            `INSERT INTO users (username, password_hash, role, name, email, related_id)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING user_id, username, role, name, email, related_id`,
            [username, passwordHash, role, name, email, relatedId]
        );
        
        // Generate JWT token
        const token = jwt.sign(
            {
                userId: result.rows[0].user_id,
                username: result.rows[0].username,
                role: result.rows[0].role,
                relatedId: result.rows[0].related_id
            },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRE }
        );
        
        res.status(201).json({
            success: true,
            data: {
                token,
                user: result.rows[0]
            },
            message: 'User registered successfully'
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

module.exports = router;
