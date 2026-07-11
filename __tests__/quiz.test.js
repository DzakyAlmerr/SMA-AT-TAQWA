/**
 * Quiz & Material Feature Tests
 * Covers: Teacher (create/manage quiz, view submissions, stats)
 *         Student (list quizzes, start quiz, submit quiz, view results)
 *
 * All DB calls are mocked — no real PostgreSQL required.
 */

'use strict';

// ──────────────────────────────────────────────────────────────
// Mock pg before any module is loaded
// ──────────────────────────────────────────────────────────────
const mockQuery = jest.fn();
const mockEnd   = jest.fn().mockResolvedValue(undefined);

jest.mock('pg', () => ({
  Pool: jest.fn().mockImplementation(() => ({
    query: mockQuery,
    end:   mockEnd,
  })),
}));

// ──────────────────────────────────────────────────────────────
// Mock JWT / bcrypt so auth routes work offline
// ──────────────────────────────────────────────────────────────
jest.mock('jsonwebtoken', () => ({
  sign:   jest.fn(() => 'mock-jwt-token'),
  verify: jest.fn((token, secret, cb) => {
    if (token === 'valid-teacher-token') {
      return cb(null, { userId: 'T001', username: 'guru1', role: 'Teacher', relatedId: 'T001' });
    }
    if (token === 'valid-student-token') {
      return cb(null, { userId: 'S001', username: 'siswa1', role: 'Student', relatedId: 'S001' });
    }
    cb(new Error('Invalid token'));
  }),
}));

jest.mock('bcryptjs', () => ({
  compare: jest.fn().mockResolvedValue(true),
  hash:    jest.fn().mockResolvedValue('hashed-password'),
  genSalt: jest.fn().mockResolvedValue('salt'),
}));

// ──────────────────────────────────────────────────────────────
// Load app AFTER mocks are set up
// ──────────────────────────────────────────────────────────────
const request = require('supertest');
const { app }  = require('../server');

// ──────────────────────────────────────────────────────────────
// Fixtures
// ──────────────────────────────────────────────────────────────
const TEACHER_TOKEN = 'valid-teacher-token';
const STUDENT_TOKEN = 'valid-student-token';

// questions as JSON string (as stored in DB)
const questionsJson = JSON.stringify([
  { id: 1, text: '2 + 2 = ?', options: ['3','4','5','6'], correct: '4', points: 10 },
  { id: 2, text: '5 x 3 = ?', options: ['10','15','20','25'], correct: '15', points: 10 },
]);

const sampleQuiz = {
  quiz_id:          'Q001',
  title:            'Matematika Bab 1',
  description:      'Quiz operasi dasar',
  class_id:         'C001',
  duration_minutes: 30,
  questions:        questionsJson,   // stored as JSON string
  status:           'Active',
  created_by:       'T001',
  created_at:       new Date().toISOString(),
  due_date:         null,
  passing_score:    70,
  max_attempts:     1,
};

const sampleResult = {
  result_id:         'R001',
  quiz_id:           'Q001',
  student_id:        'S001',
  student_name:      'Budi Santoso',
  answers:           JSON.stringify([null, null]),
  score:             0,
  correct_count:     0,
  wrong_count:       0,
  time_spent_seconds:0,
  started_at:        null,
  submitted_at:      null,
  status:            'Pending',
};

// ──────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────
// BaseController creates a new Pool per query() call.
// So each mockQuery.mockResolvedValueOnce maps to one DB call.
function dbRow(rows) {
  return { rows, rowCount: rows.length };
}

beforeEach(() => {
  mockQuery.mockReset();
  mockEnd.mockResolvedValue(undefined);
});

// ══════════════════════════════════════════════════════════════
// TEACHER TESTS
// ══════════════════════════════════════════════════════════════
describe('🧑‍🏫 Teacher - Quiz Management', () => {

  // ─── Create Quiz ───────────────────────────────────────────
  describe('POST /api/quiz  (create quiz)', () => {
    test('berhasil membuat quiz baru', async () => {
      // Call chain: INSERT quizzes → SELECT students → SELECT name → INSERT quiz_results
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))           // INSERT quiz
        .mockResolvedValueOnce(dbRow([{ student_id: 'S001' }])) // SELECT students in class
        .mockResolvedValueOnce(dbRow([{ name: 'Budi Santoso' }])) // SELECT student name
        .mockResolvedValueOnce(dbRow([sampleResult]));         // INSERT quiz_result

      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`)
        .send({
          title:           'Matematika Bab 1',
          description:     'Quiz operasi dasar',
          classId:         'C001',
          durationMinutes: 30,
          questions: [
            { id: 1, text: '2 + 2 = ?', options: ['3','4','5','6'], correct: '4', points: 10 },
            { id: 2, text: '5 x 3 = ?', options: ['10','15','20','25'], correct: '15', points: 10 },
          ],
          teacherId:    'T001',
          passingScore: 70,
          maxAttempts:  1,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('gagal jika title tidak ada', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`)
        .send({ description: 'tanpa judul', classId: 'C001', questions: [] });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/title.*required|required.*title/i);
    });

    test('gagal jika questions tidak ada', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`)
        .send({ title: 'Test Quiz', classId: 'C001' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    test('ditolak jika role Student', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ title: 'Coba', questions: [] });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
    });

    test('ditolak tanpa token', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .send({ title: 'Coba', questions: [] });

      expect([401, 403]).toContain(res.status);
    });
  });

  // ─── Get Quiz Details ──────────────────────────────────────
  describe('GET /api/quiz/:quizId  (detail quiz)', () => {
    test('berhasil ambil detail quiz, questions ter-parse jadi array', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .get('/api/quiz/Q001')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.quiz_id).toBe('Q001');
      expect(res.body.data.title).toBe('Matematika Bab 1');
      expect(Array.isArray(res.body.data.questions)).toBe(true);
      expect(res.body.data.questions).toHaveLength(2);
    });

    test('quiz tidak ditemukan → 404 success:false', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/quiz/INVALID')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });
  });

  // ─── Quiz Submissions ──────────────────────────────────────
  describe('GET /api/quiz/:quizId/submissions', () => {
    test('berhasil ambil daftar submission', async () => {
      const submitted = {
        ...sampleResult,
        answers:      JSON.stringify(['4', '15']),
        score:        20,
        correct_count:2,
        wrong_count:  0,
        status:       'Submitted',
        submitted_at: new Date().toISOString(),
      };
      mockQuery.mockResolvedValueOnce(dbRow([submitted]));

      const res = await request(app)
        .get('/api/quiz/Q001/submissions')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].score).toBe(20);
    });

    test('submission kosong jika belum ada yang mengerjakan', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/quiz/Q001/submissions')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });
  });

  // ─── Quiz Statistics ───────────────────────────────────────
  describe('GET /api/quiz/:quizId/statistics', () => {
    test('berhasil ambil statistik quiz', async () => {
      const stats = {
        total_attempts:    '10',
        completed_attempts:'8',
        average_score:     '75.5',
        passing_count:     '6',
      };
      mockQuery.mockResolvedValueOnce(dbRow([stats]));

      const res = await request(app)
        .get('/api/quiz/Q001/statistics')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0]).toHaveProperty('average_score');
      expect(res.body.data[0]).toHaveProperty('passing_count');
    });

    test('quiz tidak ada → success:false', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/quiz/GHOST/statistics')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.body.success).toBe(false);
    });
  });

  // ─── Close Quiz ────────────────────────────────────────────
  describe('POST /api/quiz/:quizId/close', () => {
    test('berhasil menutup quiz', async () => {
      const closed = { ...sampleQuiz, status: 'Closed' };
      mockQuery.mockResolvedValueOnce(dbRow([closed]));

      const res = await request(app)
        .post('/api/quiz/Q001/close')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // ─── Start Quiz (Teacher) ──────────────────────────────────
  describe('POST /api/quiz/:quizId/start  (teacher activate)', () => {
    test('berhasil memulai quiz yang aktif', async () => {
      // quizController.startQuiz → getQuizDetails → query (SELECT quiz)
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .post('/api/quiz/Q001/start')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.quiz_id).toBe('Q001');
    });

    test('quiz tidak aktif (Closed) → success:false', async () => {
      const closedQuiz = { ...sampleQuiz, status: 'Closed' };
      mockQuery.mockResolvedValueOnce(dbRow([closedQuiz]));

      const res = await request(app)
        .post('/api/quiz/Q001/start')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not active/i);
    });

    test('quiz tidak ditemukan → success:false', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .post('/api/quiz/GHOST/start')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);

      expect(res.body.success).toBe(false);
    });
  });

  // ─── Submit Student Quiz (teacher-side grading) ────────────
  describe('POST /api/quiz/:id/submit  (teacher-side grading)', () => {
    test('berhasil auto-grade jawaban siswa (semua benar)', async () => {
      const gradedResult = {
        ...sampleResult,
        answers:      JSON.stringify(['4', '15']),
        score:        20,
        correct_count:2,
        wrong_count:  0,
        status:       'Submitted',
      };

      // quizController.submitStudentQuiz call chain (after fix):
      //   1. getQuizDetails → SELECT quizzes  (1 query)
      //   2. SELECT quiz_results WHERE quiz_id AND student_id  (1 query)
      //   3. UPDATE quiz_results RETURNING *  (1 query)
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))    // getQuizDetails
        .mockResolvedValueOnce(dbRow([sampleResult]))  // SELECT quiz_results
        .mockResolvedValueOnce(dbRow([gradedResult])); // UPDATE quiz_results

      const res = await request(app)
        .post('/api/quiz/Q001/submit')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`)
        .send({ studentId: 'S001', answers: ['4', '15'] });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('gagal jika quiz tidak ditemukan', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // getQuizDetails → not found

      const res = await request(app)
        .post('/api/quiz/GHOST/submit')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`)
        .send({ studentId: 'S001', answers: ['4', '15'] });

      expect(res.body.success).toBe(false);
    });
  });
});

// ══════════════════════════════════════════════════════════════
// STUDENT TESTS
// ══════════════════════════════════════════════════════════════
describe('👨‍🎓 Student - Quiz Features', () => {

  // ─── List Available Quizzes ────────────────────────────────
  describe('GET /api/student/quizzes', () => {
    test('berhasil ambil daftar quiz aktif untuk siswa', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .get('/api/student/quizzes')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].quiz_id).toBe('Q001');
    });

    test('list kosong jika tidak ada quiz aktif', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/quizzes')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });

    test('ditolak jika tidak ada token → 401', async () => {
      const res = await request(app).get('/api/student/quizzes');
      expect([401, 403]).toContain(res.status);
    });

    test('ditolak jika role Teacher mencoba akses rute siswa → 403', async () => {
      const res = await request(app)
        .get('/api/student/quizzes')
        .set('Authorization', `Bearer ${TEACHER_TOKEN}`);
      expect(res.status).toBe(403);
    });
  });

  // ─── Get Quiz by ID ────────────────────────────────────────
  describe('GET /api/student/quizzes/:quizId', () => {
    test('berhasil ambil detail quiz, questions ter-parse', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .get('/api/student/quizzes/Q001')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.data.quiz_id).toBe('Q001');
      expect(Array.isArray(res.body.data.questions)).toBe(true);
      expect(res.body.data.questions).toHaveLength(2);
      expect(res.body.data.questions[0]).toHaveProperty('options');
      expect(res.body.data.questions[0]).toHaveProperty('correct');
    });

    test('quiz tidak ditemukan → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/quizzes/NOPE')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });
  });

  // ─── Start Quiz ────────────────────────────────────────────
  describe('POST /api/student/quizzes/:quizId/start', () => {
    test('berhasil memulai quiz baru (belum pernah dikerjakan)', async () => {
      const startedResult = { ...sampleResult, started_at: new Date().toISOString() };

      // studentController.startQuiz call chain:
      //   1. getQuizById → SELECT quizzes
      //   2. SELECT quiz_results (cek existing) → kosong
      //   3. SELECT students (ambil nama) 
      //   4. INSERT quiz_results
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))              // getQuizById
        .mockResolvedValueOnce(dbRow([]))                        // cek existing result
        .mockResolvedValueOnce(dbRow([{ name: 'Budi Santoso' }])) // SELECT name
        .mockResolvedValueOnce(dbRow([startedResult]));          // INSERT

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('result_id');
      expect(res.body.data.status).toBe('Pending');
    });

    test('melanjutkan quiz yang sudah dimulai (resume)', async () => {
      const ongoing = { ...sampleResult, started_at: new Date().toISOString() };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))  // getQuizById
        .mockResolvedValueOnce(dbRow([ongoing]));    // cek existing → ada

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.result_id).toBe('R001');
    });

    test('gagal mulai quiz yang Closed', async () => {
      const closedQuiz = { ...sampleQuiz, status: 'Closed' };
      mockQuery.mockResolvedValueOnce(dbRow([closedQuiz]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not active/i);
    });

    test('quiz tidak ditemukan', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .post('/api/student/quizzes/GHOST/start')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.body.success).toBe(false);
    });
  });

  // ─── Submit Quiz ───────────────────────────────────────────
  describe('POST /api/student/quizzes/:quizId/submit', () => {
    test('berhasil submit — semua jawaban benar, skor 20/20', async () => {
      const gradedResult = {
        ...sampleResult,
        answers:      JSON.stringify(['4', '15']),
        score:        20,
        correct_count:2,
        wrong_count:  0,
        status:       'Submitted',
        submitted_at: new Date().toISOString(),
      };

      // studentController.submitQuiz call chain (after fix):
      //   1. SELECT quiz_results WHERE quiz_id AND student_id
      //   2. getQuizById → SELECT quizzes
      //   3. UPDATE quiz_results RETURNING *
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))  // SELECT quiz_results
        .mockResolvedValueOnce(dbRow([sampleQuiz]))    // getQuizById
        .mockResolvedValueOnce(dbRow([gradedResult])); // UPDATE quiz_results

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ answers: ['4', '15'] });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].correct_count).toBe(2);
      expect(res.body.data[0].wrong_count).toBe(0);
      expect(res.body.data[0].score).toBe(20);
      expect(res.body.data[0].status).toBe('Submitted');
    });

    test('submit dengan sebagian jawaban salah — skor 10/20', async () => {
      const partialResult = {
        ...sampleResult,
        answers:      JSON.stringify(['3', '15']),
        score:        10,
        correct_count:1,
        wrong_count:  1,
        status:       'Submitted',
      };

      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))
        .mockResolvedValueOnce(dbRow([sampleQuiz]))
        .mockResolvedValueOnce(dbRow([partialResult]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ answers: ['3', '15'] });

      expect(res.body.success).toBe(true);
      expect(res.body.data[0].correct_count).toBe(1);
      expect(res.body.data[0].wrong_count).toBe(1);
      expect(res.body.data[0].score).toBe(10);
    });

    test('semua jawaban salah — skor 0', async () => {
      const zeroResult = {
        ...sampleResult,
        answers:      JSON.stringify(['X', 'X']),
        score:        0,
        correct_count:0,
        wrong_count:  2,
        status:       'Submitted',
      };

      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))
        .mockResolvedValueOnce(dbRow([sampleQuiz]))
        .mockResolvedValueOnce(dbRow([zeroResult]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ answers: ['X', 'X'] });

      expect(res.body.success).toBe(true);
      expect(res.body.data[0].score).toBe(0);
      expect(res.body.data[0].wrong_count).toBe(2);
    });

    test('gagal submit jika belum start quiz (result tidak ada)', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // no quiz_result row

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ answers: ['4', '15'] });

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });

    test('ditolak tanpa token', async () => {
      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .send({ answers: ['4', '15'] });

      expect([401, 403]).toContain(res.status);
    });
  });

  // ─── Student Results ───────────────────────────────────────
  describe('GET /api/student/results', () => {
    test('berhasil ambil riwayat hasil quiz', async () => {
      const history = [{
        ...sampleResult,
        quiz_title:   'Matematika Bab 1',
        score:        20,
        status:       'Submitted',
        submitted_at: new Date().toISOString(),
      }];
      mockQuery.mockResolvedValueOnce(dbRow(history));

      const res = await request(app)
        .get('/api/student/results')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0]).toHaveProperty('quiz_title');
      expect(res.body.data[0].score).toBe(20);
    });

    test('riwayat kosong jika belum pernah mengerjakan', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/results')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });
  });

  // ─── Student Profile ───────────────────────────────────────
  describe('GET /api/student/profile', () => {
    test('berhasil ambil profil', async () => {
      const profile = {
        student_id: 'S001',
        name:       'Budi Santoso',
        email:      'budi@school.id',
        class_id:   'C001',
      };
      mockQuery.mockResolvedValueOnce(dbRow([profile]));

      const res = await request(app)
        .get('/api/student/profile')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(200);
      expect(res.body.data[0].name).toBe('Budi Santoso');
    });

    test('profil tidak ditemukan → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/profile')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });
  });

  // ─── Update Profile ────────────────────────────────────────
  describe('PUT /api/student/profile', () => {
    test('berhasil update nama dan email', async () => {
      const updated = { student_id: 'S001', name: 'Budi Updated', email: 'budi.new@school.id' };
      mockQuery.mockResolvedValueOnce(dbRow([updated]));

      const res = await request(app)
        .put('/api/student/profile')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ name: 'Budi Updated', email: 'budi.new@school.id' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].name).toBe('Budi Updated');
    });

    test('field tidak diizinkan (student_id) diabaikan oleh controller', async () => {
      // studentController.updateStudentProfile hanya izinkan: name, email, phone
      // student_id tidak boleh bisa diubah melalui update
      const updated = { student_id: 'S001', name: 'Budi', email: 'budi@school.id' };
      mockQuery.mockResolvedValueOnce(dbRow([updated]));

      const res = await request(app)
        .put('/api/student/profile')
        .set('Authorization', `Bearer ${STUDENT_TOKEN}`)
        .send({ name: 'Budi', email: 'budi@school.id', student_id: 'HACK' });

      expect(res.status).toBe(200);
      expect(res.body.data[0].student_id).toBe('S001');
    });
  });
});

// ══════════════════════════════════════════════════════════════
// MATERI / CONTENT VALIDATION (Quiz Scoring Logic - Pure Unit)
// ══════════════════════════════════════════════════════════════
describe('📚 Logika Penilaian Materi (unit test murni)', () => {
  /**
   * Menguji logika scoring langsung tanpa HTTP.
   * Kalkulasi nilai quiz harus akurat.
   */

  function gradeAnswers(questions, studentAnswers) {
    let correctCount = 0;
    let wrongCount   = 0;
    let score        = 0;

    for (let i = 0; i < questions.length; i++) {
      if (studentAnswers[i] === questions[i].correct) {
        correctCount++;
        score += questions[i].points;
      } else {
        wrongCount++;
      }
    }

    const totalPoints  = questions.reduce((s, q) => s + q.points, 0);
    const percentScore = totalPoints > 0 ? (score / totalPoints) * 100 : 0;

    return { correctCount, wrongCount, score, percentScore };
  }

  const questions = [
    { text: '2+2',  correct: '4',  points: 10 },
    { text: '5x3',  correct: '15', points: 10 },
    { text: '10-3', correct: '7',  points: 10 },
    { text: '8/2',  correct: '4',  points: 10 },
  ];

  test('semua benar → skor 100%', () => {
    const { correctCount, percentScore } = gradeAnswers(questions, ['4','15','7','4']);
    expect(correctCount).toBe(4);
    expect(percentScore).toBe(100);
  });

  test('semua salah → skor 0%', () => {
    const { correctCount, wrongCount, percentScore } = gradeAnswers(questions, ['X','X','X','X']);
    expect(correctCount).toBe(0);
    expect(wrongCount).toBe(4);
    expect(percentScore).toBe(0);
  });

  test('setengah benar → skor 50%', () => {
    const { percentScore } = gradeAnswers(questions, ['4','X','7','X']);
    expect(percentScore).toBe(50);
  });

  test('totalPoints nol → tidak error, percentScore = 0', () => {
    const zeroPointQ = [{ text: 'Q1', correct: 'A', points: 0 }];
    const { percentScore } = gradeAnswers(zeroPointQ, ['A']);
    expect(percentScore).toBe(0);
  });

  test('lulus jika skor ≥ 70% (passing grade)', () => {
    const { percentScore } = gradeAnswers(questions, ['4','15','7','X']); // 3/4 = 75%
    expect(percentScore).toBeGreaterThanOrEqual(70);
  });

  test('tidak lulus jika skor < 70%', () => {
    const { percentScore } = gradeAnswers(questions, ['4','X','X','X']); // 1/4 = 25%
    expect(percentScore).toBeLessThan(70);
  });

  test('satu soal, benar → 100%', () => {
    const single = [{ text: 'A?', correct: 'A', points: 5 }];
    const { percentScore, correctCount } = gradeAnswers(single, ['A']);
    expect(percentScore).toBe(100);
    expect(correctCount).toBe(1);
  });

  test('jawaban case-sensitive: "a" !== "A"', () => {
    const single = [{ text: 'A?', correct: 'A', points: 5 }];
    const { correctCount } = gradeAnswers(single, ['a']);
    expect(correctCount).toBe(0);
  });
});
