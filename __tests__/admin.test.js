'use strict';

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
  compare: jest.fn().mockResolvedValue(true),
  hash: jest.fn().mockResolvedValue('hashed-password'),
}));

const request = require('supertest');
const { app } = require('../server');

function dbRow(rows) {
  return { rows, rowCount: rows.length };
}

describe('Admin Flow - Create Student', () => {
  beforeEach(() => {
    mockQuery.mockReset();
  });

  test('Login as Admin and create a new student', async () => {
    // 1. Mock Admin Login
    mockQuery.mockResolvedValueOnce(dbRow([{ 
      user_id: 'U001', 
      username: 'admin', 
      role: 'Admin', 
      password_hash: 'hashed',
      name: 'Administrator',
      email: 'admin@school.id'
    }]));

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ username: 'admin', password: 'admin123', role: 'Admin' });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body.success).toBe(true);
    const adminToken = loginRes.body.data.token;

    // 2. Mock Create Student
    mockQuery.mockResolvedValueOnce(dbRow([{ 
      student_id: 'S999', 
      name: 'Test Siswa Baru', 
      email: 'testsiswa@school.id', 
      class_id: 'X-A',
      student_number: '12345'
    }]));

    const createRes = await request(app)
      .post('/api/students')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        name: 'Test Siswa Baru',
        email: 'testsiswa@school.id',
        classId: 'X-A',
        studentNumber: '12345',
        phone: '08123456789'
      });

    console.log('Create Student Response:', createRes.status, createRes.body);
    
    expect(createRes.status).toBe(200);
    expect(createRes.body.success).toBe(true);
  });
});
