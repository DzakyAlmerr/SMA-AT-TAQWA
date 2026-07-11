'use strict';
/**
 * 📚 COMPREHENSIVE TEST - Material & Quiz Features
 *
 * Covers end-to-end flows (all DB mocked):
 *   Material: Create → List → Get by ID → Edit → Delete (Teacher)
 *   Material: View as Student
 *   Quiz: Create → Edit → Delete (Teacher)
 *   Quiz: Start → Submit → View Results (Student)
 *   Error handling: 404, 400, 403 cases
 */

// ─── Mock pg before any module loads ─────────────────────────
const mockQuery = jest.fn();
const mockEnd   = jest.fn().mockResolvedValue(undefined);

jest.mock('pg', () => ({
  Pool: jest.fn().mockImplementation(() => ({
    query: mockQuery,
    end:   mockEnd,
  })),
}));

jest.mock('jsonwebtoken', () => ({
  sign:   jest.fn(() => 'mock-jwt-token'),
  verify: jest.fn((token, secret, cb) => {
    if (token === 'teacher-token') return cb(null, { userId: 'T001', username: 'guru1', role: 'Teacher', relatedId: 'T001' });
    if (token === 'student-token') return cb(null, { userId: 'S001', username: 'siswa1', role: 'Student', relatedId: 'S001' });
    if (token === 'admin-token')   return cb(null, { userId: 'A001', username: 'admin',  role: 'Admin',   relatedId: 'A001' });
    cb(new Error('Invalid token'));
  }),
}));

jest.mock('bcryptjs', () => ({
  compare: jest.fn().mockResolvedValue(true),
  hash:    jest.fn().mockResolvedValue('hashed'),
}));

const request = require('supertest');
const { app }  = require('../server');

// ─── Tokens ───────────────────────────────────────────────────
const TEACHER = 'teacher-token';
const STUDENT = 'student-token';
const ADMIN   = 'admin-token';

// ─── Fixtures ─────────────────────────────────────────────────
function dbRow(rows) {
  return { rows, rowCount: rows.length };
}

const sampleMaterial = {
  material_id:   'M001',
  title:         'Bab 1 - Aljabar',
  subject:       'Matematika',
  class_id:      'C001',
  content:       'Pembahasan dasar aljabar linear.',
  teacher_id:    'T001',
  file_url:      'https://storage.school.id/bab1.pdf',
  material_type: 'document',
  created_at:    new Date().toISOString(),
  updated_at:    new Date().toISOString(),
};

const questionsJson = JSON.stringify([
  { id: 1, text: '2 + 2 = ?',  options: ['3','4','5'], correct: '4',  points: 10 },
  { id: 2, text: '5 × 3 = ?',  options: ['10','15','20'], correct: '15', points: 10 },
]);

const sampleQuiz = {
  quiz_id:          'Q001',
  title:            'Ujian Bab 1',
  description:      'Quiz aljabar',
  class_id:         'C001',
  questions:        questionsJson,
  status:           'Active',
  created_by:       'T001',
  passing_score:    70,
  max_attempts:     1,
  duration_minutes: 30,
  due_date:         null,
  created_at:       new Date().toISOString(),
};

const sampleResult = {
  result_id:          'R001',
  quiz_id:            'Q001',
  student_id:         'S001',
  student_name:       'Budi',
  answers:            JSON.stringify([null, null]),
  score:              0,
  correct_count:      0,
  wrong_count:        0,
  time_spent_seconds: 0,
  started_at:         null,
  submitted_at:       null,
  status:             'Pending',
};

beforeEach(() => mockQuery.mockReset());

// ══════════════════════════════════════════════════════════════
// 📚 MATERIAL - TEACHER (CRUD)
// ══════════════════════════════════════════════════════════════
describe('📚 Materi - Guru (CRUD)', () => {

  // ─── Create ──────────────────────────────────────────────────
  describe('POST /api/material  (buat materi baru)', () => {
    test('✅ berhasil membuat materi', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

      const res = await request(app)
        .post('/api/material')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({
          title:        'Bab 1 - Aljabar',
          subject:      'Matematika',
          classId:      'C001',
          content:      'Pembahasan dasar aljabar linear.',
          teacherId:    'T001',
          fileUrl:      'https://storage.school.id/bab1.pdf',
          materialType: 'document',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].title).toBe('Bab 1 - Aljabar');
      expect(res.body.data[0].subject).toBe('Matematika');
    });

    test('❌ gagal jika title tidak ada', async () => {
      const res = await request(app)
        .post('/api/material')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ subject: 'Matematika' }); // no title

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/title.*required|required.*title/i);
    });

    test('❌ ditolak jika role Student (403)', async () => {
      const res = await request(app)
        .post('/api/material')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ title: 'X', subject: 'Y' });

      expect(res.status).toBe(403);
    });

    test('❌ ditolak tanpa token (401)', async () => {
      const res = await request(app)
        .post('/api/material')
        .send({ title: 'X', subject: 'Y' });

      expect([401, 403]).toContain(res.status);
    });
  });

  // ─── List ────────────────────────────────────────────────────
  describe('GET /api/material  (daftar semua materi)', () => {
    test('✅ berhasil ambil semua materi', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

      const res = await request(app)
        .get('/api/material')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].material_id).toBe('M001');
    });

    test('✅ list kosong → success:true, data:[]', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/material')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });

    test('✅ filter by ?classId=C001', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

      const res = await request(app)
        .get('/api/material?classId=C001')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.data[0].class_id).toBe('C001');
    });
  });

  // ─── Get by ID ───────────────────────────────────────────────
  describe('GET /api/material/:id  (detail materi)', () => {
    test('✅ berhasil ambil detail materi', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

      const res = await request(app)
        .get('/api/material/M001')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.material_id).toBe('M001');
      expect(res.body.data.content).toBe('Pembahasan dasar aljabar linear.');
    });

    test('❌ materi tidak ditemukan → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/material/GHOST')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });
  });

  // ─── Edit ────────────────────────────────────────────────────
  describe('PUT /api/material/:id  (edit materi)', () => {
    test('✅ berhasil update title dan content', async () => {
      // updateMaterial: getMaterialById(1 query) + update(1 query)
      const updated = { ...sampleMaterial, title: 'Bab 1 Updated', content: 'Konten baru.' };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleMaterial]))  // getMaterialById
        .mockResolvedValueOnce(dbRow([updated]));         // UPDATE

      const res = await request(app)
        .put('/api/material/M001')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ title: 'Bab 1 Updated', content: 'Konten baru.' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].title).toBe('Bab 1 Updated');
    });

    test('❌ update materi yang tidak ada → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // getMaterialById → not found

      const res = await request(app)
        .put('/api/material/GHOST')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ title: 'Updated' });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    test('❌ tidak ada field yang valid → error', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial])); // getMaterialById → found

      const res = await request(app)
        .put('/api/material/M001')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ material_id: 'HACK', teacher_id: 'HACK' }); // tidak diizinkan

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/no valid fields/i);
    });

    test('❌ Student tidak bisa edit materi → 403', async () => {
      const res = await request(app)
        .put('/api/material/M001')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ title: 'Hacked' });

      expect(res.status).toBe(403);
    });
  });

  // ─── Delete ──────────────────────────────────────────────────
  describe('DELETE /api/material/:id  (hapus materi)', () => {
    test('✅ berhasil hapus materi', async () => {
      // deleteMaterial: getMaterialById(1) + DELETE(1)
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleMaterial]))  // getMaterialById
        .mockResolvedValueOnce(dbRow([sampleMaterial])); // DELETE RETURNING

      const res = await request(app)
        .delete('/api/material/M001')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('❌ hapus materi yang tidak ada → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // getMaterialById → not found

      const res = await request(app)
        .delete('/api/material/GHOST')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    test('❌ Student tidak bisa hapus materi → 403', async () => {
      const res = await request(app)
        .delete('/api/material/M001')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(403);
    });
  });
});

// ══════════════════════════════════════════════════════════════
// 👨‍🎓 MATERIAL - STUDENT (View)
// ══════════════════════════════════════════════════════════════
describe('👨‍🎓 Materi - Siswa (View)', () => {

  test('✅ siswa bisa lihat daftar materi kelasnya', async () => {
    mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

    const res = await request(app)
      .get('/api/student/materials?classId=C001')
      .set('Authorization', `Bearer ${STUDENT}`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data[0].title).toBe('Bab 1 - Aljabar');
  });

  test('✅ siswa bisa lihat detail materi by ID', async () => {
    mockQuery.mockResolvedValueOnce(dbRow([sampleMaterial]));

    const res = await request(app)
      .get('/api/material/M001')
      .set('Authorization', `Bearer ${STUDENT}`);

    expect(res.status).toBe(200);
    expect(res.body.data.file_url).toBe('https://storage.school.id/bab1.pdf');
    expect(res.body.data.material_type).toBe('document');
  });

  test('✅ list kosong jika tidak ada materi', async () => {
    mockQuery.mockResolvedValueOnce(dbRow([]));

    const res = await request(app)
      .get('/api/student/materials?classId=C999')
      .set('Authorization', `Bearer ${STUDENT}`);

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(0);
  });
});

// ══════════════════════════════════════════════════════════════
// 🧑‍🏫 QUIZ - TEACHER (Create / Edit / Delete)
// ══════════════════════════════════════════════════════════════
describe('🧑‍🏫 Kuis - Guru (Create / Edit / Delete)', () => {

  // ─── Create ──────────────────────────────────────────────────
  describe('POST /api/quiz  (buat kuis)', () => {
    test('✅ berhasil buat quiz baru', async () => {
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))              // INSERT quiz
        .mockResolvedValueOnce(dbRow([{ student_id: 'S001' }])) // SELECT students
        .mockResolvedValueOnce(dbRow([{ name: 'Budi' }]))       // SELECT name
        .mockResolvedValueOnce(dbRow([sampleResult]));           // INSERT quiz_result

      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({
          title:      'Ujian Bab 1',
          description:'Quiz aljabar',
          classId:    'C001',
          teacherId:  'T001',
          questions:  [
            { id: 1, text: '2+2?', options: ['3','4'], correct: '4', points: 10 },
            { id: 2, text: '5×3?', options: ['10','15'], correct: '15', points: 10 },
          ],
          passingScore: 70,
          maxAttempts:  1,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].quiz_id).toBe('Q001');
    });

    test('❌ title kosong → 400', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ classId: 'C001', questions: [] });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    test('❌ Student tidak bisa buat quiz → 403', async () => {
      const res = await request(app)
        .post('/api/quiz')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ title: 'Hack', questions: [] });

      expect(res.status).toBe(403);
    });
  });

  // ─── Edit ────────────────────────────────────────────────────
  describe('PUT /api/quiz/:quizId  (edit kuis)', () => {
    test('✅ berhasil update title dan deskripsi', async () => {
      const updated = { ...sampleQuiz, title: 'Ujian Bab 1 Revisi', description: 'Updated' };
      // updateQuiz: getQuizDetails(1) + UPDATE(1)
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))  // getQuizDetails
        .mockResolvedValueOnce(dbRow([updated]));    // UPDATE

      const res = await request(app)
        .put('/api/quiz/Q001')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ title: 'Ujian Bab 1 Revisi', description: 'Updated' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].title).toBe('Ujian Bab 1 Revisi');
    });

    test('✅ berhasil update questions', async () => {
      const updated = { ...sampleQuiz, questions: JSON.stringify([{ id: 1, text: 'NEW', correct: 'A', points: 5 }]) };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))
        .mockResolvedValueOnce(dbRow([updated]));

      const res = await request(app)
        .put('/api/quiz/Q001')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ questions: [{ id: 1, text: 'NEW', correct: 'A', points: 5 }] });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('❌ quiz tidak ada → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // getQuizDetails → not found

      const res = await request(app)
        .put('/api/quiz/GHOST')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ title: 'Updated' });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    test('❌ tidak ada field valid → error', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .put('/api/quiz/Q001')
        .set('Authorization', `Bearer ${TEACHER}`)
        .send({ quiz_id: 'HACK', created_by: 'HACK' }); // tidak diizinkan

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/no valid fields/i);
    });
  });

  // ─── Delete ──────────────────────────────────────────────────
  describe('DELETE /api/quiz/:quizId  (hapus kuis)', () => {
    test('✅ berhasil hapus quiz beserta quiz_results-nya', async () => {
      // deleteQuiz: getQuizDetails(1) + DELETE quiz_results(1) + DELETE quizzes(1)
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))  // getQuizDetails
        .mockResolvedValueOnce(dbRow([]))             // DELETE quiz_results
        .mockResolvedValueOnce(dbRow([sampleQuiz])); // DELETE quiz RETURNING

      const res = await request(app)
        .delete('/api/quiz/Q001')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('❌ hapus quiz yang tidak ada → 404', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // getQuizDetails → not found

      const res = await request(app)
        .delete('/api/quiz/GHOST')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });

    test('❌ Student tidak bisa hapus quiz → 403', async () => {
      const res = await request(app)
        .delete('/api/quiz/Q001')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(403);
    });
  });
});

// ══════════════════════════════════════════════════════════════
// 👨‍🎓 QUIZ - STUDENT (Start / Submit / Results)
// ══════════════════════════════════════════════════════════════
describe('👨‍🎓 Kuis - Siswa (Start / Submit / Results)', () => {

  // ─── List available quizzes ───────────────────────────────────
  describe('GET /api/student/quizzes  (daftar kuis aktif)', () => {
    test('✅ berhasil lihat daftar kuis aktif', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([sampleQuiz]));

      const res = await request(app)
        .get('/api/student/quizzes')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].quiz_id).toBe('Q001');
    });

    test('✅ tidak ada kuis aktif → list kosong', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/quizzes')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });
  });

  // ─── Start Quiz ───────────────────────────────────────────────
  describe('POST /api/student/quizzes/:quizId/start  (mulai kuis)', () => {
    test('✅ berhasil mulai kuis (pertama kali)', async () => {
      const started = { ...sampleResult, started_at: new Date().toISOString() };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))           // getQuizById
        .mockResolvedValueOnce(dbRow([]))                     // cek existing → kosong
        .mockResolvedValueOnce(dbRow([{ name: 'Budi' }]))    // SELECT name
        .mockResolvedValueOnce(dbRow([started]));             // INSERT quiz_result

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('result_id', 'R001');
      expect(res.body.data).toHaveProperty('status', 'Pending');
    });

    test('✅ resume kuis yang sudah dimulai', async () => {
      const ongoing = { ...sampleResult, started_at: new Date().toISOString() };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleQuiz]))  // getQuizById
        .mockResolvedValueOnce(dbRow([ongoing]));    // cek existing → ada

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.result_id).toBe('R001');
    });

    test('❌ kuis Closed → tidak bisa mulai', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([{ ...sampleQuiz, status: 'Closed' }]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/start')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not active/i);
    });

    test('❌ kuis tidak ditemukan → success:false', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .post('/api/student/quizzes/GHOST/start')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.body.success).toBe(false);
    });
  });

  // ─── Submit Quiz ──────────────────────────────────────────────
  describe('POST /api/student/quizzes/:quizId/submit  (submit kuis)', () => {
    test('✅ submit semua benar → skor 20', async () => {
      const graded = { ...sampleResult, answers: JSON.stringify(['4','15']), score: 20, correct_count: 2, wrong_count: 0, status: 'Submitted' };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))  // SELECT quiz_results
        .mockResolvedValueOnce(dbRow([sampleQuiz]))    // getQuizById
        .mockResolvedValueOnce(dbRow([graded]));       // UPDATE

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ answers: ['4', '15'] });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].score).toBe(20);
      expect(res.body.data[0].correct_count).toBe(2);
      expect(res.body.data[0].wrong_count).toBe(0);
      expect(res.body.data[0].status).toBe('Submitted');
    });

    test('✅ submit sebagian salah → skor 10', async () => {
      const graded = { ...sampleResult, answers: JSON.stringify(['X','15']), score: 10, correct_count: 1, wrong_count: 1, status: 'Submitted' };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))
        .mockResolvedValueOnce(dbRow([sampleQuiz]))
        .mockResolvedValueOnce(dbRow([graded]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ answers: ['X', '15'] });

      expect(res.body.success).toBe(true);
      expect(res.body.data[0].correct_count).toBe(1);
      expect(res.body.data[0].wrong_count).toBe(1);
      expect(res.body.data[0].score).toBe(10);
    });

    test('✅ submit semua salah → skor 0', async () => {
      const graded = { ...sampleResult, answers: JSON.stringify(['X','X']), score: 0, correct_count: 0, wrong_count: 2, status: 'Submitted' };
      mockQuery
        .mockResolvedValueOnce(dbRow([sampleResult]))
        .mockResolvedValueOnce(dbRow([sampleQuiz]))
        .mockResolvedValueOnce(dbRow([graded]));

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ answers: ['X', 'X'] });

      expect(res.body.success).toBe(true);
      expect(res.body.data[0].score).toBe(0);
      expect(res.body.data[0].wrong_count).toBe(2);
    });

    test('❌ belum start quiz → result tidak ditemukan', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([])); // no quiz_result row

      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .set('Authorization', `Bearer ${STUDENT}`)
        .send({ answers: ['4', '15'] });

      expect(res.body.success).toBe(false);
      expect(res.body.error).toMatch(/not found/i);
    });

    test('❌ tanpa token → ditolak', async () => {
      const res = await request(app)
        .post('/api/student/quizzes/Q001/submit')
        .send({ answers: ['4'] });

      expect([401, 403]).toContain(res.status);
    });
  });

  // ─── View Results ─────────────────────────────────────────────
  describe('GET /api/student/results  (riwayat hasil kuis)', () => {
    test('✅ berhasil ambil riwayat hasil kuis', async () => {
      const history = [{ ...sampleResult, quiz_title: 'Ujian Bab 1', score: 20, status: 'Submitted' }];
      mockQuery.mockResolvedValueOnce(dbRow(history));

      const res = await request(app)
        .get('/api/student/results')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0]).toHaveProperty('quiz_title');
      expect(res.body.data[0].score).toBe(20);
      expect(res.body.data[0].status).toBe('Submitted');
    });

    test('✅ belum pernah mengerjakan → riwayat kosong', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([]));

      const res = await request(app)
        .get('/api/student/results')
        .set('Authorization', `Bearer ${STUDENT}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(0);
    });
  });

  // ─── Quiz Statistics (Teacher view results) ──────────────────
  describe('GET /api/quiz/:id/submissions  (rekap submissions)', () => {
    test('✅ guru bisa lihat semua submission', async () => {
      const sub = { ...sampleResult, score: 20, status: 'Submitted', submitted_at: new Date().toISOString() };
      mockQuery.mockResolvedValueOnce(dbRow([sub]));

      const res = await request(app)
        .get('/api/quiz/Q001/submissions')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].result_id).toBe('R001');
    });

    test('✅ statistik quiz', async () => {
      mockQuery.mockResolvedValueOnce(dbRow([{
        total_attempts: '5', completed_attempts: '3', average_score: '15', passing_count: '2'
      }]));

      const res = await request(app)
        .get('/api/quiz/Q001/statistics')
        .set('Authorization', `Bearer ${TEACHER}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0]).toHaveProperty('average_score');
    });
  });
});

// ══════════════════════════════════════════════════════════════
// 🔢 Logika Scoring (Pure Unit Test — tanpa HTTP)
// ══════════════════════════════════════════════════════════════
describe('🔢 Logika Penilaian Kuis (unit murni)', () => {
  function grade(questions, answers) {
    let correct = 0, wrong = 0, score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correct) { correct++; score += questions[i].points; }
      else wrong++;
    }
    const total = questions.reduce((s, q) => s + q.points, 0);
    return { correct, wrong, score, pct: total > 0 ? (score / total) * 100 : 0 };
  }

  const qs = [
    { correct: '4',  points: 10 },
    { correct: '15', points: 10 },
    { correct: '7',  points: 10 },
    { correct: '4',  points: 10 },
  ];

  test('semua benar → 100%', () => {
    const { pct, correct } = grade(qs, ['4','15','7','4']);
    expect(correct).toBe(4); expect(pct).toBe(100);
  });
  test('semua salah → 0%', () => {
    const { pct, wrong } = grade(qs, ['X','X','X','X']);
    expect(wrong).toBe(4); expect(pct).toBe(0);
  });
  test('50% benar → 50%', () => {
    const { pct } = grade(qs, ['4','X','7','X']);
    expect(pct).toBe(50);
  });
  test('lulus ≥ 70%', () => {
    const { pct } = grade(qs, ['4','15','7','X']); // 3/4 = 75%
    expect(pct).toBeGreaterThanOrEqual(70);
  });
  test('tidak lulus < 70%', () => {
    const { pct } = grade(qs, ['4','X','X','X']); // 1/4 = 25%
    expect(pct).toBeLessThan(70);
  });
  test('total 0 poin → tidak error', () => {
    const { pct } = grade([{ correct: 'A', points: 0 }], ['A']);
    expect(pct).toBe(0);
  });
  test('case-sensitive: "a" ≠ "A"', () => {
    const { correct } = grade([{ correct: 'A', points: 5 }], ['a']);
    expect(correct).toBe(0);
  });
});
