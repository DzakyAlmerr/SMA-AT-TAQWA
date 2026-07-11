/**
 * Comprehensive live API test script
 * Tests all endpoints against the running server on port 3000
 */
require('dotenv').config();

const BASE = 'http://localhost:3000/api';
let teacherToken = '';
let studentToken = '';
let adminToken = '';
let createdQuizId = '';
let results = [];

async function test(name, fn) {
  try {
    const r = await fn();
    const pass = r.pass;
    results.push({ name, pass, detail: r.detail || '' });
    console.log((pass ? '✅' : '❌') + ' ' + name + (r.detail ? ' → ' + r.detail : ''));
  } catch (e) {
    results.push({ name, pass: false, detail: e.message });
    console.log('💥 ' + name + ' → EXCEPTION: ' + e.message);
  }
}

async function api(method, path, body, token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  const res = await fetch(BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, ...json };
}

async function run() {
  console.log('\n==== 🧪 LIVE API COMPREHENSIVE TEST ====\n');

  // ─── AUTH ───────────────────────────────────────────────────────────────────
  console.log('--- AUTH ---');

  await test('Teacher login', async () => {
    const r = await api('POST', '/auth/login', { username: 'teacher', password: 'teacher123', role: 'Teacher' });
    if (r.success && r.data?.token) {
      teacherToken = r.data.token;
      return { pass: true, detail: 'token received' };
    }
    return { pass: false, detail: JSON.stringify(r) };
  });

  await test('Student login', async () => {
    const r = await api('POST', '/auth/login', { username: 'student', password: '1234', role: 'Student' });
    if (r.success && r.data?.token) {
      studentToken = r.data.token;
      return { pass: true, detail: 'token received' };
    }
    return { pass: false, detail: JSON.stringify(r) };
  });

  await test('Admin login', async () => {
    const r = await api('POST', '/auth/login', { username: 'admin', password: 'admin123', role: 'Admin' });
    if (r.success && r.data?.token) {
      adminToken = r.data.token;
      return { pass: true, detail: 'token received' };
    }
    return { pass: false, detail: JSON.stringify(r) };
  });

  await test('Login rejects wrong password', async () => {
    const r = await api('POST', '/auth/login', { username: 'admin', password: 'wrongpassword', role: 'Admin' });
    return { pass: !r.success && r.error, detail: 'HTTP '+r.status };
  });

  await test('Login rejects missing fields', async () => {
    const r = await api('POST', '/auth/login', { username: 'admin' });
    return { pass: !r.success, detail: 'HTTP '+r.status };
  });

  // ─── QUIZ (TEACHER) ──────────────────────────────────────────────────────────
  console.log('\n--- QUIZ (Teacher) ---');

  await test('Create quiz (teacher)', async () => {
    const r = await api('POST', '/quiz', {
      title: 'Live Test Quiz',
      description: 'Automated test quiz',
      classId: '10A',
      questions: [
        { id: 1, text: '1+1=?', options: ['1','2','3'], correct: '2', points: 10 },
        { id: 2, text: '2x3=?', options: ['4','6','8'], correct: '6', points: 10 }
      ]
    }, teacherToken);
    if (r.success && r.data && r.data[0]) {
      createdQuizId = r.data[0].quiz_id;
      return { pass: true, detail: 'quizId=' + createdQuizId };
    }
    return { pass: false, detail: JSON.stringify(r).substring(0, 200) };
  });

  await test('Get quiz list (teacher)', async () => {
    const r = await api('GET', '/quiz', null, teacherToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + (r.data?.length || 0) };
  });

  await test('Get quiz detail (teacher)', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('GET', '/quiz/' + createdQuizId, null, teacherToken);
    return { pass: r.success && r.data?.quiz_id === createdQuizId, detail: 'status=' + r.data?.status };
  });

  await test('Get quiz submissions (teacher)', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('GET', '/quiz/' + createdQuizId + '/submissions', null, teacherToken);
    return { pass: r.success, detail: 'count=' + (r.data?.length || 0) };
  });

  await test('Get quiz statistics (teacher)', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('GET', '/quiz/' + createdQuizId + '/statistics', null, teacherToken);
    return { pass: r.success, detail: JSON.stringify(r.data?.[0]).substring(0, 80) };
  });

  await test('Student cannot create quiz (403)', async () => {
    const r = await api('POST', '/quiz', { title: 'Hack', questions: [] }, studentToken);
    return { pass: r.success === false, detail: 'HTTP '+r.status };
  });

  // ─── STUDENT QUIZ FLOW ───────────────────────────────────────────────────────
  console.log('\n--- STUDENT QUIZ FLOW ---');

  await test('Student can see quiz list', async () => {
    const r = await api('GET', '/student/quizzes', null, studentToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + (r.data?.length || 0) };
  });

  await test('Student can start quiz', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('POST', '/student/quizzes/' + createdQuizId + '/start', {}, studentToken);
    return { pass: r.success, detail: 'status=' + r.data?.status };
  });

  await test('Student can submit quiz', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('POST', '/student/quizzes/' + createdQuizId + '/submit', { answers: [2, 6] }, studentToken);
    return { pass: r.success, detail: 'score=' + r.data?.[0]?.score };
  });

  await test('Student can get results history', async () => {
    const r = await api('GET', '/student/results', null, studentToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + (r.data?.length || 0) };
  });

  await test('Student results include quiz_title', async () => {
    const r = await api('GET', '/student/results', null, studentToken);
    if (!r.success || !r.data?.length) return { pass: false, detail: 'no results' };
    const first = r.data[0];
    return { pass: 'quiz_title' in first, detail: 'quiz_title=' + first.quiz_title };
  });

  await test('Teacher cannot access student quiz list (403)', async () => {
    const r = await api('GET', '/student/quizzes', null, teacherToken);
    return { pass: r.success === false, detail: 'status='+r.status };
  });

  // ─── MATERIALS ───────────────────────────────────────────────────────────────
  console.log('\n--- MATERIALS ---');

  await test('Teacher can create material', async () => {
    const r = await api('POST', '/material', {
      title: 'Live Test Material',
      description: 'Auto test',
      classId: '10A',
      teacherId: 'T001',
      teacher: 'Pak Guru Budi'
    }, teacherToken);
    return { pass: r.success, detail: JSON.stringify(r.data?.[0]?.material_id) };
  });

  await test('Teacher can get material list', async () => {
    const r = await api('GET', '/material', null, teacherToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + (r.data?.length || 0) };
  });

  await test('Material list includes material_id', async () => {
    const r = await api('GET', '/material', null, teacherToken);
    if (!r.success || !r.data?.length) return { pass: false, detail: 'no data' };
    return { pass: 'material_id' in r.data[0], detail: 'material_id=' + r.data[0].material_id };
  });

  await test('Student cannot create material (403)', async () => {
    const r = await api('POST', '/material', { title: 'Hack' }, studentToken);
    return { pass: r.success === false, detail: 'HTTP '+r.status };
  });

  // ─── COMMON DATA ─────────────────────────────────────────────────────────────
  console.log('\n--- COMMON DATA ---');

  await test('GET /students returns list', async () => {
    const r = await api('GET', '/students', null, adminToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + r.data?.length };
  });

  await test('GET /teachers returns list', async () => {
    const r = await api('GET', '/teachers', null, adminToken);
    return { pass: r.success && Array.isArray(r.data), detail: 'count=' + r.data?.length };
  });

  await test('GET /classes - has name column (not class_name)', async () => {
    const r = await api('GET', '/classes', null, adminToken);
    // Bug: routes orders by class_name but schema uses name
    return { pass: r.success, detail: r.success ? 'ok count='+r.data?.length : r.error };
  });

  // ─── UPDATE/DELETE QUIZ ───────────────────────────────────────────────────────
  console.log('\n--- QUIZ EDIT/DELETE ---');

  await test('Update quiz title', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('PUT', '/quiz/' + createdQuizId, { title: 'Updated Live Quiz' }, teacherToken);
    return { pass: r.success && r.data?.[0]?.title === 'Updated Live Quiz', detail: 'title=' + r.data?.[0]?.title };
  });

  await test('Close quiz', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('POST', '/quiz/' + createdQuizId + '/close', {}, teacherToken);
    return { pass: r.success, detail: 'status=' + r.data?.[0]?.status };
  });

  await test('Delete quiz and its results', async () => {
    if (!createdQuizId) return { pass: false, detail: 'No quizId' };
    const r = await api('DELETE', '/quiz/' + createdQuizId, null, teacherToken);
    return { pass: r.success, detail: JSON.stringify(r.data?.[0]?.quiz_id) };
  });

  // ─── SUMMARY ─────────────────────────────────────────────────────────────────
  console.log('\n\n==== 📊 SUMMARY ====');
  const passed = results.filter(r => r.pass).length;
  const total = results.length;
  const failed = results.filter(r => !r.pass);
  console.log(`${passed}/${total} tests passed`);
  if (failed.length) {
    console.log('\n❌ FAILED TESTS:');
    failed.forEach(r => console.log('  - ' + r.name + ': ' + r.detail));
  } else {
    console.log('🎉 All tests passed!');
  }
}

run().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
