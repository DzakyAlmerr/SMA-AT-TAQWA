const http = require('http');

async function testBackend() {
  console.log('Testing backend API endpoints...');
  
  const request = (path, method, body, headers = {}) => {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: path,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      };
      
      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve({ statusCode: res.statusCode, data }));
      });
      
      req.on('error', e => reject(e));
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  };

  try {
    // 1. Test Teacher Login
    console.log('1. Testing Teacher Login...');
    const teacherLogin = await request('/api/auth/login', 'POST', { username: 'teacher', password: 'teacher123', role: 'Teacher' });
    console.log('Teacher Login Status:', teacherLogin.statusCode);
    const teacherData = JSON.parse(teacherLogin.data);
    const teacherToken = teacherData.data.token;
    
    // 2. Test fetching classes (Teacher)
    console.log('\n2. Testing Fetch Classes (Teacher)...');
    const classes = await request('/api/classes', 'GET', null, { 'Authorization': `Bearer ${teacherToken}` });
    console.log('Fetch Classes Status:', classes.statusCode);
    
    // 3. Test Student Login
    console.log('\n3. Testing Student Login...');
    const studentLogin = await request('/api/auth/login', 'POST', { username: 'student', password: 'student123', role: 'Student' });
    console.log('Student Login Status:', studentLogin.statusCode);
    const studentData = JSON.parse(studentLogin.data);
    const studentToken = studentData.data.token;
    
    // 4. Test fetching quizzes (Student)
    console.log('\n4. Testing Fetch Quizzes (Student)...');
    const quizzes = await request('/api/quizzes', 'GET', null, { 'Authorization': `Bearer ${studentToken}` });
    console.log('Fetch Quizzes Status:', quizzes.statusCode);
    console.log('\nBackend API tests completed successfully!');
    
  } catch (err) {
    console.error('Error during testing:', err);
  }
}

testBackend();
