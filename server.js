// ✅ Smart School Portal - Complete Express.js Backend
// 🚀 Migration from Google Apps Script to Express + PostgreSQL
// All functionality preserved with enhanced features

// 🔧 Core dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL database connection
const poolConfig = process.env.DATABASE_URL 
    ? { 
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
      }
    : {
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'smart_school',
        password: process.env.DB_PASSWORD || 'password',
        port: process.env.DB_PORT || 5432,
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    };

const pool = new Pool(poolConfig);

// 🛡️ Middleware chain - Security first
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📊 Import Express routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/index');

// 🖥️ Serve Frontend
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Index.html'));
});

// 🔌 Route registration
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

// 🩺 Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) as count FROM students');
        res.json({
            success: true,
            status: 'healthy',
            timestamp: new Date().toISOString(),
            database: 'connected',
            studentCount: parseInt(result.rows[0].count),
            uptime: process.uptime(),
            memoryUsage: process.memoryUsage()
        });
    } catch (error) {
        res.status(503).json({
            success: false,
            status: 'unhealthy',
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// 📝 Error handling middleware
app.use((err, req, res, next) => {
    console.error('🔥 Server error:', err.stack);
    
    if (res.headersSent) {
        return next(err);
    }
    
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Internal server error',
        status: err.status || 500,
        timestamp: new Date().toISOString(),
        path: req.path,
        method: req.method,
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack,
            requestBody: req.body,
            requestHeaders: req.headers
        })
    });
});

// 🚫 404 handler for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        status: 404,
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString(),
        availableEndpoints: [
            'GET /api/health',
            'POST /api/auth/login',
            'POST /api/auth/register',
            'GET /api/students',
            'GET /api/students/:id',
            'PUT /api/students/:id',
            'DELETE /api/students/:id',
            'GET /api/teachers',
            'POST /api/teachers',
            'GET /api/classes',
            'GET /api/quizzes',
            'POST /api/quizzes',
            'GET /api/quiz-results'
        ]
    });
});

// 🚀 Start server only when run directly (not when required by tests)
if (require.main === module) {
    app.listen(PORT, async () => {
        try {
            await pool.query('SELECT 1');
            console.log('✅ Database connected successfully');
            
            console.log(`
*******************************************************************************
🚀 Smart School Portal API Server Started
===============================================================================
📍 Server running on port ${PORT}
🔗 Health check: http://localhost:${PORT}/api/health
📚 API Documentation: Available at /api
🗄️  Database: PostgreSQL connected
🔐 Authentication: JWT enabled
🛡️  Security: Helmet + CORS active
*******************************************************************************
            `);
            
            console.log('\n🎯 Available Endpoints:');
            console.log('   🔐 Authentication:');
            console.log('      POST /api/auth/login - Student login');
            console.log('      POST /api/auth/register - New account');
            console.log('   👨‍🎓 Student Operations:');
            console.log('      GET /api/students - List students');
            console.log('      POST /api/students - Create student');
            console.log('      GET /api/student/quizzes - View available quizzes');
            console.log('      POST /api/student/quizzes/:id/start - Start quiz');
            console.log('      POST /api/student/quizzes/:id/submit - Submit quiz');
            console.log('   🧑‍🏫 Teacher Operations:');
            console.log('      GET /api/teachers - List teachers');
            console.log('      POST /api/teachers - Create teacher');
            console.log('      POST /api/quiz - Create quiz');
            console.log('      GET /api/quiz/:id/submissions - View submissions');
            console.log('   👑 Admin Operations:');
            console.log('      GET /api/admin/users - Manage users');
            console.log('      GET /api/admin/analytics - System analytics');
            
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
            console.log('\n⚠️ Server started but database unavailable');
            console.log('   Please check PostgreSQL connection settings');
            console.log('   Default settings: user=postgres, password=password, host=localhost, port=5432');
        }
    });
}

module.exports = app;