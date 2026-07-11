// 📁 CONTROLLERS DIRECTORY STRUCTURE SETUP
// Creating the essential controller modules for Express.js backend

// ✓ BaseController - Core database operations
const BaseController = require('./baseController');
module.exports = BaseController;

// ✓ AuthController - Authentication management
const AuthController = require('./authController');
module.exports = AuthController;

// ✓ StudentController - Student operations
const StudentController = require('./studentController');
module.exports = StudentController;

// ✓ TeacherController - Teacher operations
const TeacherController = require('./teacherController');
module.exports = TeacherController;

// ✓ QuizController - Quiz management and grading
const QuizController = require('./quizController');
module.exports = QuizController;

// ✓ MaterialController - Educational materials management
const MaterialController = require('./materialController');
module.exports = MaterialController;

// ✓ ScheduleController - Class schedules and timetables
const ScheduleController = require('./scheduleController');
module.exports = ScheduleController;