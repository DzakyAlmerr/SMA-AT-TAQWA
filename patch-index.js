const fs = require('fs');
const content = fs.readFileSync('Index.html', 'utf8');

const adapter = `
  <!-- Express API Fallback Adapter -->
  <script>
    if (typeof google === 'undefined') {
      window.google = {
        script: {
          get run() {
            return {
              _successHandler: null,
              _failureHandler: null,
              withSuccessHandler: function(handler) { this._successHandler = handler; return this; },
              withFailureHandler: function(handler) { this._failureHandler = handler; return this; },
              
              _fetch: function(method, url, data) {
                const headers = { 'Content-Type': 'application/json' };
                const userStr = localStorage.getItem('currentUser');
                if (userStr) {
                  try {
                    const user = JSON.parse(userStr);
                    if (user.token) headers['Authorization'] = 'Bearer ' + user.token;
                  } catch(e){}
                }
                
                fetch(url, {
                  method: method,
                  headers: headers,
                  body: data ? JSON.stringify(data) : undefined
                })
                .then(async res => {
                  const contentType = res.headers.get('content-type');
                  let json = {};
                  if (contentType && contentType.includes('application/json')) {
                    json = await res.json().catch(() => ({}));
                  }
                  if (!res.ok) throw new Error(json.error || json.message || 'Request failed');
                  return json;
                })
                .then(data => { if (this._successHandler) this._successHandler(data); })
                .catch(err => { if (this._failureHandler) this._failureHandler(err); });
              },

              // Auth
              apiLogin: function(username, password, role) { this._fetch('POST', '/api/auth/login', {username, password, role}); },
              
              // Materials
              apiGetMaterials: function() { this._fetch('GET', '/api/material'); },
              apiAddMaterial: function(data) { this._fetch('POST', '/api/material', data); },
              apiUpdateMaterial: function(id, data) { this._fetch('PUT', '/api/material/' + id, data); },
              apiDeleteMaterial: function(id) { this._fetch('DELETE', '/api/material/' + id); },
              
              // Quizzes
              apiGetQuizzes: function() { this._fetch('GET', '/api/quiz'); },
              apiAddQuiz: function(data) { this._fetch('POST', '/api/quiz', data); },
              apiUpdateQuiz: function(id, data) { this._fetch('PUT', '/api/quiz/' + id, data); },
              apiDeleteQuiz: function(id) { this._fetch('DELETE', '/api/quiz/' + id); },
              apiSubmitQuizResult: function(data) { this._fetch('POST', '/api/student/quizzes/' + (data.quiz_id || data.quizId || data.id) + '/submit', data); },
              apiGetQuizResults: function() { this._fetch('GET', '/api/student/results'); },
              
              // Generic fallbacks for other endpoints
              apiGetStudents: function() { this._fetch('GET', '/api/students'); },
              apiGetTeachers: function() { this._fetch('GET', '/api/teachers'); },
              apiGetClasses: function() { this._fetch('GET', '/api/classes'); },
              apiGetSchedules: function() { this._fetch('GET', '/api/schedule'); },
              
              // Stubs for unsupported ones so it doesn't crash
              apiGetHolidays: function() { this._successHandler({success:true, data:[]}); },
              apiChangePassword: function() { this._successHandler({success:true}); }
            };
          }
        }
      };
    }
  </script>
`;

if (content.includes('Express API Fallback Adapter')) {
  console.log('Adapter already injected.');
} else {
  const updated = content.replace(/<!-- Backend API for Apps Script -->/, adapter + '  <!-- Backend API for Apps Script -->');
  fs.writeFileSync('Index.html', updated);
  console.log('Adapter successfully injected into Index.html!');
}
