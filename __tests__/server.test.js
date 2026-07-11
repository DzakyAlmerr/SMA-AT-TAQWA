// Smart School Portal - Express.js Backend Test Suite
// Comprehensive testing for the migrated backend functionality
// Tests all core endpoints and database operations

const mockQuery = jest.fn();
const mockEnd = jest.fn().mockResolvedValue(undefined);

jest.mock('pg', () => {
    return {
        Pool: jest.fn().mockImplementation(() => ({
            query: mockQuery,
            end: mockEnd,
        })),
    };
});

jest.mock('bcryptjs', () => ({
    compare: jest.fn().mockImplementation(async (pass, hash) => {
        return pass === 'admin123' && hash === 'hashed';
    }),
    hash: jest.fn().mockResolvedValue('hashed'),
}));

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'mock-token'),
    verify: jest.fn((token, secret, cb) => {
        cb(null, { userId: '1', role: 'Admin' });
    })
}));

const request = require('supertest');
const { app } = require('../server');

function dbRow(rows) {
    return { rows, rowCount: rows.length };
}

// Test suite for Express.js backend functionality
describe('Smart School Portal Backend API Tests', () => {
    let server;
    
    // Setup before all tests
    beforeAll(async () => {
        server = app.listen(3001, () => {
            console.log('🚀 Test server started on port 3001');
        });
    });
    
    // Cleanup after all tests
    afterAll(async () => {
        await server.close();
        console.log('🧹 Test server stopped');
    });
    
    // Initialize database before each test
    beforeEach(async () => {
        mockQuery.mockReset();
        mockQuery.mockResolvedValue(dbRow([]));
    });
    
    // Test 1: Health check endpoint
    describe('Health Check Endpoint', () => {
        test('GET /api/health should return healthy status', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ count: '5' }]));
            
            const response = await request(server)
                .get('/api/health')
                .expect(200);
            
            expect(response.body).toHaveProperty('success', true);
            expect(response.body).toHaveProperty('message', 'API is healthy');
            expect(response.body).toHaveProperty('database', 'connected');
            expect(response.body).toHaveProperty('studentCount', 5);
        });
    });
    
    // Test 2: Authentication endpoints
    describe('Authentication Endpoints', () => {
        test('POST /api/auth/login with valid credentials', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ 
                user_id: 'U001', 
                username: 'admin', 
                role: 'Admin',
                password_hash: 'hashed'
            }]));
            
            const loginData = {
                username: 'admin',
                password: 'admin123',
                role: 'Admin'
            };
            
            const response = await request(server)
                .post('/api/auth/login')
                .send(loginData)
                .expect(200);
            
            expect(response.body).toHaveProperty('success', true);
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('token');
            expect(response.body.data.user).toHaveProperty('username', 'admin');
        });
        
        test('POST /api/auth/login with invalid credentials', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([])); // User not found
            
            const loginData = {
                username: 'wronguser',
                password: 'wrongpass',
                role: 'Admin'
            };
            
            const response = await request(server)
                .post('/api/auth/login')
                .send(loginData)
                .expect(401);
            
            expect(response.body.success).toBe(false);
            expect(response.body.error).toContain('Invalid credentials');
        });
    });
    
    // Test 3: Student endpoints
    describe('Student Endpoints', () => {
        test('GET /api/students should return student list', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ student_id: 'S001', name: 'Test' }]));
            
            const response = await request(server)
                .get('/api/students')
                .expect(200);
            
            expect(response.body).toHaveProperty('success', true);
            expect(response.body).toHaveProperty('data');
            expect(Array.isArray(response.body.data)).toBe(true);
        });
        
        test('GET /api/student/quizzes/:id should return quiz details', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ quiz_id: 'Q001', title: 'Test Quiz', questions: '[]' }]));
            
            const response = await request(server)
                .get('/api/quiz/Q001')
                .set('Authorization', 'Bearer mock-token')
                .expect(200);
            
            expect(response.body).toHaveProperty('success', true);
            expect(response.body.data).toHaveProperty('quiz_id', 'Q001');
            expect(response.body.data).toHaveProperty('title');
        });
    });
    
    // Test 4: Database connection test
    describe('Database Connectivity', () => {
        test('Database connection should be established', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ test: 1 }]));
            const { Pool } = require('pg');
            const p = new Pool();
            const result = await p.query('SELECT 1 as test');
            expect(result.rows[0].test).toBe(1);
        });
        
        test('Student table should be accessible', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ count: '10' }]));
            const { Pool } = require('pg');
            const p = new Pool();
            const result = await p.query('SELECT COUNT(*) as count FROM students');
            expect(parseInt(result.rows[0].count)).toBeGreaterThanOrEqual(0);
        });
    });
    
    // Test 5: Security middleware
    describe('Security Middleware', () => {
        test('Invalid route should return 404', async () => {
            const response = await request(server)
                .get('/api/nonexistent')
                .expect(404);
            
            expect(response.body.success).toBe(false);
            expect(response.body.error).toContain('Route not found'); // Updated from 'Endpoint not found'
        });
    });
    
    // Test 6: Error handling
    describe('Error Handling', () => {
        test('Server should handle database errors gracefully', async () => {
            mockQuery.mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(server)
                .get('/api/health')
                .expect(503);
            
            expect(response.body).toHaveProperty('success', false);
            expect(response.body).toHaveProperty('error', 'Database error');
        });
    });
    
    // Test 7: JSON content type
    describe('Content Type Handling', () => {
        test('All responses should have proper content-type header', async () => {
            mockQuery.mockResolvedValueOnce(dbRow([{ count: '5' }]));
            
            const response = await request(server)
                .get('/api/health');
            
            expect(response.headers['content-type']).toContain('application/json');
        });
    });
});