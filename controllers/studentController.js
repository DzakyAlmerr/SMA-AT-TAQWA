// ==================== STUDENT CONTROLLER ====================
// Handles student authentication, quiz management, and profile operations

const BaseController = require('./baseController');
const { generateToken } = require('../utils/auth');

class StudentController extends BaseController {
  constructor() {
    super();
    this.model = 'students';
  }

  // Student login with credential verification
  async login(studentId, password) {
    const result = await this.query(
      'SELECT * FROM students WHERE student_id = $1 AND password = $2',
      [studentId, password]
    );

    if (!result.success || result.count === 0) {
      return { success: false, error: 'Invalid credentials' };
    }

    const student = result.data[0];
    const token = generateToken(student.student_id, student.name, 'Student', student.student_id);

    return {
      success: true,
      data: {
        student: {
          studentId:     student.student_id,
          name:          student.name,
          email:         student.email,
          classId:       student.class_id,
          studentNumber: student.student_number,
        },
        token,
      },
    };
  }

  // Get all quizzes available for student's class
  async getStudentQuizzes(studentId) {
    const result = await this.query(
      'SELECT q.* FROM quizzes q ' +
      'LEFT JOIN classes c ON q.class_id = c.class_id ' +
      "WHERE q.status = 'Active' AND c.class_id IN ( " +
      '  SELECT class_id FROM students WHERE student_id = $1 ' +
      ')',
      [studentId]
    );

    return result;
  }

  // Get specific quiz with questions
  async getQuizById(quizId) {
    const result = await this.query(
      'SELECT * FROM quizzes WHERE quiz_id = $1',
      [quizId]
    );

    if (result.count === 0) {
      return { success: false, error: 'Quiz not found' };
    }

    const quiz = result.data[0];
    if (quiz.questions && typeof quiz.questions === 'string') {
      quiz.questions = JSON.parse(quiz.questions);
    }

    return { success: true, data: quiz };
  }

  // Start quiz session for student
  async startQuiz(quizId, studentId) {
    const quizDetails = await this.getQuizById(quizId);

    if (!quizDetails.success) {
      return quizDetails;
    }

    const quiz = quizDetails.data;

    if (quiz.status !== 'Active') {
      return { success: false, error: 'Quiz is not active' };
    }

    // Check if quiz has already been started/taken
    const existingResult = await this.query(
      'SELECT * FROM quiz_results WHERE quiz_id = $1 AND student_id = $2',
      [quizId, studentId]
    );

    if (existingResult.count > 0) {
      return { success: true, data: existingResult.data[0] }; // Resume existing quiz
    }

    // Get student name
    const nameResult = await this.query(
      'SELECT name FROM students WHERE student_id = $1',
      [studentId]
    );
    const studentName = nameResult.success && nameResult.data.length > 0
      ? nameResult.data[0].name
      : '';

    // Create new quiz result
    const resultId = `R${Date.now()}`;
    const inserted = await this.query(
      `INSERT INTO quiz_results
         (result_id, quiz_id, student_id, student_name, answers,
          score, correct_count, wrong_count, time_spent_seconds,
          started_at, submitted_at, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
       RETURNING *`,
      [
        resultId, quizId, studentId, studentName,
        JSON.stringify(Array(quiz.questions.length).fill(null)),
        0, 0, 0, 0, new Date(), null, 'Pending',
      ]
    );

    if (!inserted.success || inserted.count === 0) {
      return { success: false, error: 'Failed to start quiz' };
    }

    return { success: true, data: inserted.data[0] };
  }

  // Submit quiz answers with automatic grading
  async submitQuiz(quizId, studentId, answers) {
    const result = await this.query(
      'SELECT * FROM quiz_results WHERE quiz_id = $1 AND student_id = $2',
      [quizId, studentId]
    );

    if (!result.success || result.count === 0) {
      return { success: false, error: 'Quiz result not found' };
    }

    const quizResult = result.data[0];
    const quizDetails = await this.getQuizById(quizId);

    if (!quizDetails.success) {
      return quizDetails;
    }

    const questions = quizDetails.data.questions;
    let correctCount = 0;
    let wrongCount   = 0;
    let score        = 0;

    // Calculate score
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const studentAnswer = answers[i];
      if (studentAnswer == question.correct) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
    score = Math.round((correctCount / questions.length) * 100);

    // Update quiz result (use quiz_results table directly)
    const updateResult = await this.query(
      `UPDATE quiz_results
         SET answers=$1, score=$2, correct_count=$3, wrong_count=$4,
             submitted_at=$5, status=$6
       WHERE result_id=$7
       RETURNING *`,
      [
        JSON.stringify(answers), score, correctCount, wrongCount,
        new Date(), 'Submitted',
        quizResult.result_id,
      ]
    );

    return updateResult;
  }

  // Get student's quiz results history
  async getStudentResults(studentId) {
    const result = await this.query(
      'SELECT qr.*, q.title as quiz_title, q.class_id FROM quiz_results qr ' +
      'LEFT JOIN quizzes q ON qr.quiz_id = q.quiz_id ' +
      'WHERE qr.student_id = $1 ORDER BY qr.submitted_at DESC',
      [studentId]
    );

    return result;
  }

  // Get student profile information
  async getStudentProfile(studentId) {
    const result = await this.query(
      'SELECT * FROM students WHERE student_id = $1',
      [studentId]
    );

    if (result.count === 0) {
      return { success: false, error: 'Student not found' };
    }

    return result;
  }

  // Update student profile information
  async updateStudentProfile(studentId, updates) {
    const allowedFields = ['name', 'email', 'phone'];
    const filteredUpdates = {};

    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key)) {
        filteredUpdates[key] = updates[key];
      }
    });

    if (Object.keys(filteredUpdates).length === 0) {
      return { success: false, error: 'No valid fields to update' };
    }

    const result = await this.update(studentId, filteredUpdates);
    return result;
  }

  // Admin function: Create a new student account
  async createStudent(studentData) {
    const { name, email, classId, studentNumber, phone } = studentData;
    
    // Auto generate student_id if not provided
    const student_id = `S${Date.now().toString().slice(-6)}`;
    
    const studentRecord = {
      student_id,
      name,
      email: email || '',
      class_id: classId || '',
      student_number: studentNumber || '',
      phone: phone || '',
      password: 'password123' // Default password
    };
    
    return await this.create(studentRecord);
  }
}

module.exports = new StudentController();