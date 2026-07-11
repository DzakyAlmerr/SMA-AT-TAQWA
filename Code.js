/**
 * Smart School Portal - Complete Backend
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create NEW Google Apps Script project: https://script.google.com/
 * 2. Delete all default code
 * 3. Copy-paste this ENTIRE file
 * 4. Save (Ctrl+S)
 * 5. Run setupDatabase() function ONCE
 * 6. Deploy > New deployment > Web app
 * 7. Execute as: Me, Who has access: Anyone
 * 8. Deploy and copy the URL
 */

function createSheetIfNotExists(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    Logger.log('✅ Created sheet: ' + sheetName);
  }
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    Logger.log('📋 Added headers to: ' + sheetName);
  }
  
  return sheet;
}

function addSampleData(ss) {
  const studentsSheet = ss.getSheetByName('Students');
  if (studentsSheet && studentsSheet.getLastRow() <= 1) {
    studentsSheet.appendRow(['S001', 'Ahmad Rizky', 'Laki-laki', 2024, '24001', '1234', '10A', 'ahmad@school.com', '08123456789', 'Bapak Budi', '08129876001', 'Active']);
    studentsSheet.appendRow(['S002', 'Budi Santoso', 'Laki-laki', 2024, '24002', '1234', '10A', 'budi@school.com', '08123456790', 'Bapak Ahmad', '08129876002', 'Active']);
    Logger.log('✅ Added sample students');
  }
  
  const teachersSheet = ss.getSheetByName('Teachers');
  if (teachersSheet && teachersSheet.getLastRow() <= 1) {
    teachersSheet.appendRow(['T001', 'Dr. Andi Wijaya', 'Laki-laki', 2020, 'T2001', '1234', 'andi@school.com', '08129876543', 'Active', 'Matematika']);
    teachersSheet.appendRow(['T002', 'Prof. Siti Aminah', 'Perempuan', 2019, 'T2101', '1234', 'siti@school.com', '08129876544', 'Active', 'Fisika']);
    Logger.log('✅ Added sample teachers');
  }
  
  const classesSheet = ss.getSheetByName('Classes');
  if (classesSheet && classesSheet.getLastRow() <= 1) {
    classesSheet.appendRow(['C001', '10A', '10', 'Dr. Andi Wijaya', 30]);
    classesSheet.appendRow(['C002', '10B', '10', 'Prof. Siti Aminah', 28]);
    Logger.log('✅ Added sample classes');
  }
}

function setupDatabase() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  
  if (!ss) {
    ss = SpreadsheetApp.create('School_Portal_Database');
    Logger.log('✅ Created new spreadsheet: ' + ss.getName());
  }
  
  Logger.log('🚀 Setting up School Portal Database...');
  Logger.log('Spreadsheet: ' + ss.getName());
  
  const defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length === 1) {
    defaultSheet.setName('Students');
  } else if (defaultSheet) {
    ss.deleteSheet(defaultSheet);
  }
  
  // ✅ FIXED: Standardized field names
  const schemas = {
    'Students': ['studentId', 'name', 'gender', 'entryYear', 'studentNumber', 'password', 'classId', 'email', 'phone', 'parentName', 'parentPhone', 'status'],
    'Teachers': ['teacherId', 'name', 'gender', 'entryYear', 'teacherNumber', 'password', 'email', 'phone', 'status', 'subject'],
    'Classes': ['classId', 'className', 'gradeLevel', 'homeroomTeacher', 'capacity'],
    'Assets': ['assetId', 'assetName', 'category', 'location', 'condition'],
    'Schedules': ['scheduleId', 'subject', 'day', 'startTime', 'endTime', 'classId', 'className', 'room', 'teacher'], // ✅ Fixed: startTime/endTime
    'Users': ['userId', 'username', 'password', 'role', 'name', 'relatedId'],
    'Attendance': ['attendanceId', 'studentId', 'studentName', 'classId', 'date', 'time', 'status', 'location', 'photoUrl', 'notes'],
    'Quizzes': ['quizId', 'title', 'description', 'classId', 'className', 'dueDate', 'duration', 'createdBy', 'status', 'questions'],
    'QuizResults': ['resultId', 'quizId', 'studentId', 'studentName', 'answers', 'score', 'correctCount', 'wrongCount', 'timeSpent', 'submittedAt', 'status'], // ✅ 'QuizResults' bukan 'Quiz_Results'
    'Announcements': ['announcementId', 'title', 'content', 'date', 'type', 'classId', 'createdBy', 'sentViaWhatsapp'], // ✅ Fixed: announcementId bukan id
    'Holidays': ['holidayId', 'title', 'description', 'startDate', 'endDate', 'type'] // ✅ Fixed: holidayId bukan id
  };
  
  for (const [sheetName, headers] of Object.entries(schemas)) {
    createSheetIfNotExists(ss, sheetName, headers);
  }
  
  const usersSheet = ss.getSheetByName('Users');
  if (usersSheet && usersSheet.getLastRow() <= 1) {
    usersSheet.appendRow(['U001', 'admin', 'admin123', 'admin', 'System Admin', '']);
  }
  
  addSampleData(ss);
  
  return true;
}

function createSheetIfNotExists(ss, name, headers) {
  const existing = ss.getSheetByName(name);
  if (existing) {
    Logger.log('✅ Sheet "' + name + '" already exists');
    return;
  }
  createSheet(ss, name, headers);
}

function createSheet(ss, name, headers) {
  const sheet = ss.insertSheet(name);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  const hr = sheet.getRange(1, 1, 1, headers.length);
  hr.setBackground('#4f46e5').setFontColor('#ffffff').setFontWeight('bold').setHorizontalAlignment('center');
  sheet.autoResizeColumns(1, headers.length);
}

function addSampleData(ss) {
  // Students (with password = studentNumber)
  const students = [
    ['S001','Ahmad Rizky','Laki-laki',2024,'24001','10A','ahmad@school.com','08123456789','Bapak Budi Santoso','08129876001','Active','24001'],
    ['S002','Budi Santoso','Laki-laki',2024,'24002','10A','budi@school.com','08123456790','Bapak Ahmad Fauzi','08129876002','Active','24002'],
    ['S003','Citra Dewi','Perempuan',2023,'23001','10A','citra@school.com','08123456791','Ibu Siti Aminah','08129876003','Active','23001'],
    ['S004','Dian Sastro','Perempuan',2023,'23002','10B','dian@school.com','08123456792','Bapak Sudirman','08129876004','Active','23002']
  ];
  students.forEach(s => ss.getSheetByName('Students').appendRow(s));
  
  // Teachers (with password = teacherNumber)
  const teachers = [
    ['T001','Dr. Andi Wijaya','Laki-laki',2020,'T2001','andi@school.com','08129876543','Active','Matematika','T2001'],
    ['T002','Prof. Siti Aminah','Perempuan',2019,'T2101','siti@school.com','08129876544','Active','Fisika','T2101'],
    ['T003','Bapak Sudirman','Laki-laki',2018,'T1901','sudirman@school.com','08129876545','Active','Biologi','T1901']
  ];
  teachers.forEach(t => ss.getSheetByName('Teachers').appendRow(t));
  
  // Classes
  const classes = [
    ['C001','10A - Science','10','Dr. Andi Wijaya',30],
    ['C002','10B - Social','10','Prof. Siti Aminah',28],
    ['C003','11A - Science','11','Bapak Sudirman',32]
  ];
  classes.forEach(c => ss.getSheetByName('Classes').appendRow(c));
  
  // Announcements
  const announcements = [
    ['AN001','Ujian Semester','Ujian semester akan dilaksanakan minggu depan. Harap persiapkan diri dengan baik.',new Date().toLocaleDateString('id-ID'),'urgent','','Admin','FALSE'],
    ['AN002','Libur Nasional','Hari libur nasional pada tanggal 17 Agustus. Sekolah libur.',new Date().toLocaleDateString('id-ID'),'general','','Admin','FALSE']
  ];
  announcements.forEach(a => ss.getSheetByName('Announcements').appendRow(a));
  
  Logger.log('✅ Sample data added');
}

// ==================== WEB APP ====================
function doGet(e) {
  try {
    const template = HtmlService.createTemplateFromFile('Index');
    const html = template.evaluate()
      .setTitle('Smart School Portal')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    return html;
  } catch (error) {
    return HtmlService.createHtmlOutput('<h1>Error: ' + error.message + '</h1>');
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// ==================== API ENDPOINTS ====================
function doPost(e) {
  const action = e.parameter.action;
  
  // ✅ STANDARDISASI: Semua pakai CamelCase TANPA underscore
  if (action === 'addStudent') return success(addData('Students', e.parameter));
  if (action === 'getStudents') return success(getData('Students'));
  if (action === 'getTeachers') return success(getData('Teachers'));
  if (action === 'getClasses') return success(getData('Classes'));
  if (action === 'getSchedules') return success(getData('Schedules'));
  if (action === 'getQuizzes') return success(getData('Quizzes'));
  if (action === 'getQuizResults') return success(getData('QuizResults'));  // ✅ FIXED! Tanpa underscore
  if (action === 'getMaterials') return success(getData('Materials'));
  if (action === 'getHolidays') return success(getData('Holidays'));
  if (action === 'getAttendance') return success(getData('Attendance'));
  if (action === 'getAssets') return success(getData('Assets'));
  
  // Add operations
  if (action === 'addTeacher') return success(addData('Teachers', e.parameter));
  if (action === 'addClass') return success(addData('Classes', e.parameter));
  if (action === 'addSchedule') return success(addData('Schedules', e.parameter));
  if (action === 'addQuiz') return success(addData('Quizzes', e.parameter));
  if (action === 'addQuizResult') return success(addData('QuizResults', e.parameter));  // ✅ FIXED!
  if (action === 'addMaterial') return success(addData('Materials', e.parameter));
  if (action === 'addHoliday') return success(addData('Holidays', e.parameter));
  if (action === 'addAttendance') return success(addData('Attendance', e.parameter));
  if (action === 'addAsset') return success(addData('Assets', e.parameter));
  
  // ... dst
}

// ==================== GOOGLE SCRIPT RUN FUNCTIONS ====================
// These functions can be called directly from frontend via google.script.run

function apiLogin(username, password, role) {
  Logger.log('=== apiLogin called ===');
  Logger.log('Username: ' + username + ', Role: ' + role);
  
  try {
    const ss = getActiveSpreadsheet();
    Logger.log('Spreadsheet: ' + (ss ? ss.getName() : 'NULL'));
    
    if (!ss) {
      Logger.log('ERROR: No spreadsheet');
      return { success: false, error: 'Database not connected' };
    }
    
    const result = handleLogin({ username, password, role });
    Logger.log('Login result: ' + JSON.stringify(result));
    
    return result;
  } catch (e) {
    Logger.log('FATAL ERROR in apiLogin: ' + e.message);
    Logger.log('Stack: ' + e.stack);
    return { success: false, error: 'Server error: ' + e.message };
  }
}

function apiChangePassword(userId, role, currentPassword, newPassword) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const result = changePassword({ userId, role, currentPassword, newPassword });
    return result;
  } catch (e) {
    Logger.log('apiChangePassword error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetStudents() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const students = getData('Students');
    return { success: true, data: students };
  } catch (e) {
    Logger.log('apiGetStudents error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddStudent(student) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    Logger.log('Adding student: ' + JSON.stringify(student));
    const result = addData('Students', student);
    Logger.log('Add result: ' + JSON.stringify(result));
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddStudent error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetTeachers() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const teachers = getData('Teachers');
    return { success: true, data: teachers };
  } catch (e) {
    Logger.log('apiGetTeachers error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetClasses() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const classes = getData('Classes');
    return { success: true, data: classes };
  } catch (e) {
    Logger.log('apiGetClasses error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetAssets() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const assets = getData('Assets');
    return { success: true, data: assets };
  } catch (e) {
    Logger.log('apiGetAssets error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddTeacher(teacher) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    Logger.log('Adding teacher: ' + JSON.stringify(teacher));
    const result = addData('Teachers', teacher);
    Logger.log('Add result: ' + JSON.stringify(result));
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddTeacher error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddClass(classData) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    Logger.log('Adding class: ' + JSON.stringify(classData));
    const result = addData('Classes', classData);
    Logger.log('Add result: ' + JSON.stringify(result));
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddClass error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddSchedule(schedule) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      Logger.log('apiAddSchedule: No spreadsheet connected');
      return { success: false, error: 'Database not connected' };
    }
    
    Logger.log('apiAddSchedule: Adding schedule...');
    Logger.log('Schedule data: ' + JSON.stringify(schedule));
    
    // Check if Schedules sheet exists
    const scheduleSheet = ss.getSheetByName('Schedules');
    if (!scheduleSheet) {
      Logger.log('apiAddSchedule: Creating Schedules sheet...');
      createSheet(ss, 'Schedules', ['scheduleId','subject','scheduleType','day','timeStart','timeEnd','classId','className','room','teacher']);
    }
    
    const result = addData('Schedules', schedule);
    Logger.log('apiAddSchedule: Add result: ' + JSON.stringify(result));
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddSchedule error: ' + e.message);
    Logger.log('Stack: ' + e.stack);
    return { success: false, error: e.message };
  }
}

function apiAddHoliday(holiday) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    Logger.log('Adding holiday: ' + JSON.stringify(holiday));
    const result = addData('Holidays', holiday);
    Logger.log('Add result: ' + JSON.stringify(result));
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddHoliday error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetSchedules() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const schedules = getData('Schedules');
    return { success: true, data: schedules };
  } catch (e) {
    Logger.log('apiGetSchedules error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetHolidays() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      return { success: false, error: 'Database not connected' };
    }
    const holidays = getData('Holidays');
    return { success: true, data: holidays };
  } catch (e) {
    Logger.log('apiGetHolidays error: ' + e.message);
    return { success: false, error: e.message };
  }
}

// ==================== UPDATE FUNCTIONS ====================
function apiUpdateStudent(studentId, student) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Updating student: ' + studentId);
    const result = updateData('Students', 'studentId', studentId, student);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateStudent error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiUpdateTeacher(teacherId, teacher) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Updating teacher: ' + teacherId);
    const result = updateData('Teachers', 'teacherId', teacherId, teacher);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateTeacher error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiUpdateClass(classId, classData) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Updating class: ' + classId);
    const result = updateData('Classes', 'classId', classId, classData);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateClass error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiUpdateSchedule(scheduleId, schedule) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Updating schedule: ' + scheduleId);
    const result = updateData('Schedules', 'scheduleId', scheduleId, schedule);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateSchedule error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiUpdateHoliday(id, holiday) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Updating holiday: ' + id);
    const result = updateData('Holidays', 'id', id, holiday);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateHoliday error: ' + e.message);
    return { success: false, error: e.message };
  }
}

// ==================== DELETE FUNCTIONS ====================
function apiDeleteStudent(studentId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Deleting student: ' + studentId);
    const result = deleteData('Students', 'studentId', studentId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteStudent error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteTeacher(teacherId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Deleting teacher: ' + teacherId);
    const result = deleteData('Teachers', 'teacherId', teacherId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteTeacher error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteClass(classId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Deleting class: ' + classId);
    const result = deleteData('Classes', 'classId', classId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteClass error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteSchedule(scheduleId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Deleting schedule: ' + scheduleId);
    const result = deleteData('Schedules', 'scheduleId', scheduleId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteSchedule error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteHoliday(id) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Deleting holiday: ' + id);
    const result = deleteData('Holidays', 'id', id);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteHoliday error: ' + e.message);
    return { success: false, error: e.message };
  }
}

// ==================== QUIZ API ====================
function apiGetQuizzes() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    
    const sheet = ss.getSheetByName('Quizzes');
    if (!sheet) return { success: true, data: [] };
    
    const quizzes = getData('Quizzes');
    
    // Parse questions JSON string back to array
    quizzes.forEach(q => {
      if (typeof q.questions === 'string') {
        try { q.questions = JSON.parse(q.questions); } catch(e) { q.questions = []; }
      }
      if (!q.questions) q.questions = [];
    });
    
    return { success: true, data: quizzes };
  } catch (e) {
    Logger.log('apiGetQuizzes error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddQuiz(quiz) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    
    // Auto-create Quizzes sheet if missing
    let sheet = ss.getSheetByName('Quizzes');
    if (!sheet) {
      Logger.log('Creating Quizzes sheet...');
      createSheet(ss, 'Quizzes', ['quizId','title','description','classId','className','subject','teacher','teacherId','duration','dueDate','status','createdAt','createdBy','questions']);
    }
    
    // Stringify questions array for spreadsheet storage
    if (quiz.questions && typeof quiz.questions !== 'string') {
      quiz.questions = JSON.stringify(quiz.questions);
    }
    
    const result = addData('Quizzes', quiz);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddQuiz error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteQuiz(quizId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    const result = deleteData('Quizzes', 'quizId', quizId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteQuiz error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiUpdateQuiz(quizId, quizData) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    const result = updateData('Quizzes', 'quizId', quizId, quizData);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiUpdateQuiz error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetQuizResults() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    
    const sheet = ss.getSheetByName('QuizResults');
    if (!sheet) return { success: true, data: [] };
    
    const results = getData('QuizResults');
    
    // Parse answers JSON string back to array
    results.forEach(r => {
      if (typeof r.answers === 'string') {
        try { r.answers = JSON.parse(r.answers); } catch(e) { r.answers = []; }
      }
      if (!r.answers) r.answers = [];
    });
    
    return { success: true, data: results };
  } catch (e) {
    Logger.log('apiGetQuizResults error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiSubmitQuizResult(result) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    
    // Auto-create QuizResults sheet if missing
    let sheet = ss.getSheetByName('QuizResults');
    if (!sheet) {
      Logger.log('Creating QuizResults sheet...');
      createSheet(ss, 'QuizResults', ['resultId','quizId','studentId','studentName','answers','score','correctCount','wrongCount','timeSpent','submittedAt','status']);
    }
    
    // Stringify answers array for spreadsheet storage
    if (result.answers && typeof result.answers !== 'string') {
      result.answers = JSON.stringify(result.answers);
    }
    
    const data = addData('QuizResults', result);
    return { success: true, data: data };
  } catch (e) {
    Logger.log('apiSubmitQuizResult error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiSubmitAttendance(attendance) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    Logger.log('Submitting attendance: ' + JSON.stringify(attendance));
    const result = addData('Attendance', attendance);
    Logger.log('Attendance submitted: ' + JSON.stringify(result));

    // ========== OPTIONAL: Send WhatsApp notification to parent ==========
    if (WHATSVA_ENABLED) {
      try {
        // Look up student's parent phone from Students sheet
        const students = getData('Students');
        const student = students.find(s =>
          s.studentId == attendance.studentId ||
          s.studentID == attendance.studentId ||
          s.studentNumber == attendance.studentId
        );

        if (student && student.parentPhone) {
          const waMessage =
            '🏫 *Notifikasi Absensi Sekolah*\n\n' +
            '👤 Nama: ' + (attendance.studentName || student.name) + '\n' +
            '📅 Tanggal: ' + (attendance.date || new Date().toLocaleDateString('id-ID')) + '\n' +
            '🕐 Waktu: ' + (attendance.time || new Date().toLocaleTimeString('id-ID')) + '\n' +
            '📍 Status: ' + (attendance.status || 'Hadir') + '\n' +
            (attendance.location ? '📌 Lokasi: ' + attendance.location + '\n' : '') +
            (attendance.notes ? '📝 Catatan: ' + attendance.notes + '\n' : '') +
            '\n_Pesan otomatis dari Smart School Portal_';

          const waResult = sendWhatsvaMessage(student.parentPhone, waMessage);
          Logger.log('WhatsApp notification result: ' + JSON.stringify(waResult));
        } else {
          Logger.log('No parent phone found for student: ' + attendance.studentId);
        }
      } catch (waError) {
        // Never let WA errors break attendance submission
        Logger.log('WhatsApp notification error (non-blocking): ' + waError.message);
      }
    }
    // ========== END OPTIONAL ==========

    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiSubmitAttendance error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiGetAttendance(date) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      Logger.log('apiGetAttendance: No spreadsheet connected');
      return { success: false, error: 'Database not connected' };
    }
    
    Logger.log('apiGetAttendance: Getting attendance data...');
    const attendance = getData('Attendance');
    Logger.log('apiGetAttendance: Found ' + attendance.length + ' records');
    
    if (attendance.length > 0) {
      Logger.log('apiGetAttendance: First record: ' + JSON.stringify(attendance[0]));
    }

    // Filter by date if provided
    if (date) {
      const filtered = attendance.filter(a => a.date == date);
      Logger.log('apiGetAttendance: Filtered to ' + filtered.length + ' records for date ' + date);
      return { success: true, data: filtered };
    }

    return { success: true, data: attendance };
  } catch (e) {
    Logger.log('apiGetAttendance error: ' + e.message);
    Logger.log('Stack: ' + e.stack);
    return { success: false, error: e.message };
  }
}

function updateData(sheetName, keyCol, keyValue, data) {
  const ss = getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet not found: ' + sheetName);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const keyIdx = headers.indexOf(keyCol);
  if (keyIdx === -1) throw new Error('Key column not found: ' + keyCol);

  const dataRange = sheet.getDataRange().getValues();
  for (let i = 1; i < dataRange.length; i++) {
    if (dataRange[i][keyIdx] == keyValue) {
      // Update row
      const row = headers.map(h => {
        const headerLower = h.toLowerCase();
        let value = data[h] || data[headerLower];
        if (value === undefined) {
          for (let key in data) {
            if (key.toLowerCase() === headerLower) {
              value = data[key];
              break;
            }
          }
        }
        if (typeof value === 'object' && value !== null) {
          return JSON.stringify(value);
        }
        return value !== undefined ? value : dataRange[i][headers.indexOf(h)];
      });
      sheet.getRange(i + 1, 1, 1, row.length).setValues([row]);
      return { message: 'Updated successfully' };
    }
  }
  throw new Error('Record not found');
}

function createSheet(ss, sheetName, headers) {
  const sheet = ss.insertSheet(sheetName);
  if (headers && headers.length > 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  Logger.log('Created sheet: ' + sheetName + ' with headers: ' + headers.join(', '));
  return sheet;
}

// ==================== CONFIGURATION ====================
// Your spreadsheet ID (from the URL)
const SPREADSHEET_ID = '1CkgsmBa4-6-Ul2JUPByDOsa5I0wfsIj2tRYMSLG3PuU';

// ==================== WHATSVA CONFIG (OPTIONAL) ====================
// Set WHATSVA_ENABLED to true and paste your API key to activate
// WhatsApp notifications when students submit attendance.
// If false, everything works normally without WhatsApp.
const WHATSVA_ENABLED = false;
const WHATSVA_API_KEY = 'YOUR_API_KEY_HERE';  // Get from whatsva.com dashboard
const WHATSVA_API_URL = 'https://whatsva.com/api/sendMessageText';

// Helper to get spreadsheet
function getActiveSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

// ==================== WHATSVA HELPER ====================
function sendWhatsvaMessage(phone, message) {
  if (!WHATSVA_ENABLED || !phone || !WHATSVA_API_KEY || WHATSVA_API_KEY.length < 5) {
    return { success: false, error: 'WhatsApp notification disabled or not configured' };
  }

  try {
    // Normalize phone: 0812... → 62812...
    let jid = phone.toString().replace(/\D/g, ''); // Remove non-digits
    if (jid.startsWith('0')) {
      jid = '62' + jid.substring(1);
    }
    if (!jid.startsWith('62')) {
      jid = '62' + jid;
    }

    Logger.log('Sending WhatsApp to: ' + jid);

    const payload = {
      apikey: WHATSVA_API_KEY,
      jid: jid,
      message: message
    };

    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(WHATSVA_API_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    Logger.log('Whatsva response (' + responseCode + '): ' + responseBody);

    if (responseCode === 200) {
      return { success: true };
    } else {
      return { success: false, error: 'Whatsva API returned ' + responseCode };
    }
  } catch (e) {
    Logger.log('sendWhatsvaMessage error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function handleLogin(data) {
  const { username, password, role } = data;
  
  Logger.log('Login attempt - Username: ' + username + ', Role: ' + role);

  let user = null;

  // Check Users sheet (for Admin)
  if (role === 'Admin') {
    const users = getData('Users');
    Logger.log('Found ' + users.length + ' users in database');
    Logger.log('Looking for: username=' + username + ', password=' + password + ', role=' + role);
    
    user = users.find(u => {
      Logger.log('Checking user: ' + u.username + ' (password: ' + u.password + ', role: ' + u.role + ', active: ' + u.isActive + ')');
      return u.username == username &&
             u.password == password &&
             u.role == role &&
             (u.isActive == 'TRUE' || u.isActive == true || u.isActive === true);
    });
  }
  // Check Students sheet
  else if (role === 'Student') {
    const students = getData('Students');
    Logger.log('Found ' + students.length + ' students in database');
    Logger.log('Looking for: studentNumber/studentId=' + username + ', password=' + password);
    
    user = students.find(s => {
      Logger.log('Checking student: ' + (s.studentNumber || s.studentnumber) + '/' + (s.studentId || s.studentID) + ' (password: ' + (s.password || s.Password) + ', status: ' + s.status + ')');
      const studentNum = s.studentNumber || s.studentnumber;
      const studentId = s.studentId || s.studentID;
      const pwd = s.password || s.Password;
      return (studentNum == username || studentId == username) &&
             pwd == password &&
             (s.status == 'Active' || s.status == true || s.status === true);
    });

    if (user) {
      user.role = 'Student';
      user.userId = user.studentId || user.studentID || user.studentNumber;  // Handle all cases
      Logger.log('Student login SUCCESS: ' + user.studentId + ', userId: ' + user.userId);
      Logger.log('User object to return: ' + JSON.stringify(user));
    } else {
      Logger.log('Student login FAILED - no match found');
    }
  }
  // Check Teachers sheet
  else if (role === 'Teacher') {
    const teachers = getData('Teachers');
    user = teachers.find(t => {
      const teacherNum = t.teacherNumber || t.teachernumber;
      const teacherId = t.teacherId || t.teacherID;
      const pwd = t.password || t.Password;
      return (teacherNum == username || teacherId == username) &&
             pwd == password &&
             (t.status == 'Active' || t.status == true || t.status === true);
    });
    if (user) {
      user.role = 'Teacher';
      user.userId = user.teacherId || user.teacherID || user.teacherNumber;  // Handle all cases
      Logger.log('Teacher login SUCCESS: ' + user.teacherId + ', userId: ' + user.userId);
    } else {
      Logger.log('Teacher login FAILED - no match found');
    }
  }

  if (!user) {
    Logger.log('Login FAILED - No matching user found');
    return error('Invalid credentials or account inactive');
  }

  Logger.log('Login SUCCESS for: ' + (user.username || user.name));
  Logger.log('User object before return: ' + JSON.stringify(user));
  Logger.log('user.userId = ' + user.userId);
  Logger.log('user.role = ' + user.role);

  // Remove sensitive data
  if (user.password) delete user.password;

  const result = success({ user: user });
  Logger.log('Result to return: ' + JSON.stringify(result));
  return result;
}

// ==================== HELPERS ====================
function success(data) {
  // Return plain object for google.script.run
  return { success: true, data: data };
}

function error(msg) {
  // Return plain object for google.script.run
  return { success: false, error: msg };
}

function getData(sheetName) {
  Logger.log('getData called for sheet: ' + sheetName);
  
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) {
      Logger.log('ERROR: No spreadsheet');
      return [];
    }
    
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      Logger.log('ERROR: Sheet not found: ' + sheetName);
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    Logger.log('Raw data rows: ' + data.length);
    
    if (data.length <= 1) {
      Logger.log('No data rows (only headers or empty)');
      return [];
    }
    
    const headers = data[0];
    Logger.log('Headers: ' + headers.join(', '));
    
    const result = data.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        let value = row[i];
        // Convert Date objects to readable strings
        // Google Sheets returns time/date cells as Date objects which get
        // corrupted (UTC-shifted) when serialized via google.script.run
        if (value instanceof Date) {
          if (value.getFullYear() < 1900) {
            // Time-only value (epoch date 1899-12-30) → format as HH:mm
            obj[h] = Utilities.formatDate(value, Session.getScriptTimeZone(), 'HH:mm');
          } else {
            // Regular date → format as yyyy-MM-dd
            obj[h] = Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
          }
        } else {
          obj[h] = value;
        }
      });
      return obj;
    });
    
    Logger.log('First student data: ' + JSON.stringify(result[0]));
    return result;
  } catch (e) {
    Logger.log('ERROR in getData: ' + e.message);
    return [];
  }
}

function addData(sheetName, data) {
  const ss = getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    Logger.log('addData ERROR: Sheet not found: ' + sheetName);
    throw new Error('Sheet not found: ' + sheetName);
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  Logger.log('addData: Headers = ' + JSON.stringify(headers));
  Logger.log('addData: Data to add = ' + JSON.stringify(data));
  
  // Build row in correct column order
  const row = headers.map(h => {
    // Handle case-insensitive header matching
    const headerLower = h.toLowerCase();
    let value = data[h] || data[headerLower];
    
    // Try to find matching key with different case
    if (value === undefined) {
      for (let key in data) {
        if (key.toLowerCase() === headerLower) {
          value = data[key];
          break;
        }
      }
    }
    
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value !== undefined ? value : '';
  });

  Logger.log('addData: Row to append = ' + JSON.stringify(row));
  sheet.appendRow(row);
  Logger.log('addData: SUCCESS - Row added to ' + sheetName);
  return { message: 'Added successfully', data: data };
}

function deleteData(sheetName, keyCol, keyValue) {
  const ss = getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet not found: ' + sheetName);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const keyIdx = headers.indexOf(keyCol);
  if (keyIdx === -1) throw new Error('Column not found: ' + keyCol);

  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][keyIdx] == keyValue) {
      sheet.deleteRow(i + 1);
      return { message: 'Deleted successfully' };
    }
  }
  return { message: 'Not found' };
}

function changePassword(data) {
  const { userId, role, currentPassword, newPassword } = data;
  
  Logger.log('changePassword called: userId=' + userId + ', role=' + role);

  if (!userId || !role || !currentPassword || !newPassword) {
    throw new Error('All fields are required');
  }

  let sheetName = '';
  let keyColumns = [];

  if (role === 'Student') {
    sheetName = 'Students';
    keyColumns = ['studentId', 'studentID', 'studentid'];  // Handle all cases
  } else if (role === 'Teacher') {
    sheetName = 'Teachers';
    keyColumns = ['teacherId', 'teacherID', 'teacherid'];  // Handle all cases
  } else {
    throw new Error('Invalid role');
  }

  const ss = getActiveSpreadsheet();
  Logger.log('Spreadsheet: ' + ss.getName());
  
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    throw new Error('Sheet not found: ' + sheetName);
  }
  
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  Logger.log('Headers: ' + headers.join(', '));
  
  const dataRange = sheet.getDataRange().getValues();

  // Find key column index (case-insensitive)
  let keyIdx = -1;
  for (let col of keyColumns) {
    keyIdx = headers.indexOf(col);
    if (keyIdx !== -1) {
      Logger.log('Found key column: ' + col + ' at index ' + keyIdx);
      break;
    }
  }
  
  // Find password column index (case-insensitive)
  let passwordIdx = -1;
  const passwordCols = ['password', 'Password', 'PASSWORD'];
  for (let col of passwordCols) {
    passwordIdx = headers.indexOf(col);
    if (passwordIdx !== -1) {
      Logger.log('Found password column: ' + col + ' at index ' + passwordIdx);
      break;
    }
  }
  
  Logger.log('keyIdx=' + keyIdx + ', passwordIdx=' + passwordIdx);

  if (keyIdx === -1) {
    throw new Error('Key column not found. Headers: ' + headers.join(', '));
  }
  if (passwordIdx === -1) {
    throw new Error('Password column not found. Headers: ' + headers.join(', '));
  }

  for (let i = 1; i < dataRange.length; i++) {
    if (dataRange[i][keyIdx] == userId) {
      // Verify current password
      if (dataRange[i][passwordIdx] != currentPassword) {
        throw new Error('Current password is incorrect');
      }

      // Update password
      sheet.getRange(i + 1, passwordIdx + 1).setValue(newPassword);
      Logger.log('Password updated for ' + userId);
      return { success: true, message: 'Password changed successfully' };
    }
  }

  throw new Error('User not found');
}

// ==================== MATERIALS API ====================
// ponytail: materials store a URL (Drive/link) rather than uploaded file bytes,
// avoiding Sheets per-cell size limits. If in-app file hosting is ever needed,
// swap the 'url' field for a DriveApp-uploaded file URL — schema stays the same.
function apiGetMaterials() {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };

    const sheet = ss.getSheetByName('Materials');
    if (!sheet) return { success: true, data: [] };

    const materials = getData('Materials');
    return { success: true, data: materials };
  } catch (e) {
    Logger.log('apiGetMaterials error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiAddMaterial(material) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };

    // Auto-create Materials sheet if missing
    let sheet = ss.getSheetByName('Materials');
    if (!sheet) {
      Logger.log('Creating Materials sheet...');
      createSheet(ss, 'Materials', ['materialId', 'title', 'description', 'classId', 'className', 'url', 'teacher', 'teacherId', 'createdAt']);
    }

    if (!material.materialId) material.materialId = 'MAT' + new Date().getTime();
    if (!material.createdAt) material.createdAt = new Date().toISOString();

    const result = addData('Materials', material);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiAddMaterial error: ' + e.message);
    return { success: false, error: e.message };
  }
}

function apiDeleteMaterial(materialId) {
  try {
    const ss = getActiveSpreadsheet();
    if (!ss) return { success: false, error: 'Database not connected' };
    const result = deleteData('Materials', 'materialId', materialId);
    return { success: true, data: result };
  } catch (e) {
    Logger.log('apiDeleteMaterial error: ' + e.message);
    return { success: false, error: e.message };
  }
}