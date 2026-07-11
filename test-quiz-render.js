require('dotenv').config();
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: 'T001', username: 'teacher', role: 'Teacher' },
  process.env.JWT_SECRET || 'your-secret-key',
  { expiresIn: '1h' }
);

// Simulate the full quiz rendering chain
async function testQuizRendering() {
  // Step 1: getQuizzes
  const quizRes = await fetch('http://localhost:3000/api/quiz', {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const quizData = await quizRes.json();
  console.log('1. getQuizzes:', quizRes.status, 'success:', quizData.success, 'count:', quizData.data?.length);

  // Step 2: getQuizResults  
  const resultsRes = await fetch('http://localhost:3000/api/student/results', {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const resultsData = await resultsRes.json();
  console.log('2. getQuizResults:', resultsRes.status, 'success:', resultsData.success, 'count:', resultsData.data?.length);

  // Step 3: Simulate filter
  const cachedQuizzesLive = (quizData && quizData.success && quizData.data) ? quizData.data : [];
  const cachedQuizResultsLive = (resultsData && resultsData.success && resultsData.data) ? resultsData.data : [];
  
  const teacherName = 'Pak Guru Budi';
  const teacherUserId = 'T001';
  
  let teacherQuizzes = cachedQuizzesLive.filter(q => 
    q.teacher === teacherName || q.createdBy === teacherName || q.teacherId === teacherUserId
  );
  
  console.log('3. After filter: teacherQuizzes count:', teacherQuizzes.length);
  if (teacherQuizzes.length > 0) {
    console.log('   First quiz:', { title: teacherQuizzes[0].title, teacherId: teacherQuizzes[0].teacherId, teacher: teacherQuizzes[0].teacher });
  }
}

testQuizRendering().catch(console.error);
