// 🎯 QUIZ CONTROLLER - Teacher Quiz Management
// 🧑‍🏫 Handles quiz creation, grading, and analytics

const BaseController = require('./baseController');

class QuizController extends BaseController {
  constructor() {
    super();
    this.model = 'quizzes';
  }

  // Create new quiz with questions
  async createQuiz(quizData) {
    // Validate required fields
    if (!quizData.title || !quizData.questions) {
      return { success: false, error: 'Quiz title and questions are required' };
    }

    // Convert questions to JSON string
    const questions = JSON.stringify(quizData.questions);

    // Prepare quiz data
    const quizInfo = {
      quiz_id:          'Q' + Date.now(),
      title:            quizData.title,
      description:      quizData.description || '',
      class_id:         quizData.classId,
      duration_minutes: quizData.durationMinutes || 30,
      questions:        questions,
      status:           'Active',
      author_id:        quizData.teacherId,
      created_at:       new Date(),
      due_date:         quizData.dueDate || null,
      passing_score:    quizData.passingScore || 70,
      max_attempts:     quizData.maxAttempts || 1,
    };

    const result = await this.create(quizInfo);

    // Create quiz results for all students in the class
    if (result.success) {
      await this.createQuizResultsForStudents(
        quizData.classId,
        result.data[0].quiz_id,
        quizData.questions
      );
    }

    return result;
  }

  // Create quiz results for all students in a class
  async createQuizResultsForStudents(classId, quizId, questions) {
    // Get all students in the class
    const studentsResult = await this.query(
      'SELECT student_id FROM students WHERE class_id = $1',
      [classId]
    );

    if (!studentsResult.success) return { success: false };

    // Create quiz result for each student (use quiz_results table directly)
    for (const student of studentsResult.data) {
      const nameResult = await this.query(
        'SELECT name FROM students WHERE student_id = $1',
        [student.student_id]
      );
      const studentName = nameResult.success && nameResult.data.length > 0
        ? nameResult.data[0].name
        : '';

      const resultId = `R${Date.now()}${student.student_id}`;
      await this.query(
        `INSERT INTO quiz_results
           (result_id, quiz_id, student_id, student_name, answers,
            score, correct_count, wrong_count, time_spent_seconds,
            started_at, submitted_at, status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
        [
          resultId, quizId, student.student_id, studentName,
          JSON.stringify(Array(questions.length).fill(null)),
          0, 0, 0, 0, null, null, 'Pending',
        ]
      );
    }

    return { success: true };
  }

  // Get all quizzes
  async getQuizzes(filters = {}) {
    const conditions = [];
    const params = [];
    let idx = 1;

    if (filters.teacherId) {
      conditions.push(`author_id = $${idx++}`);
      params.push(filters.teacherId);
    }
    if (filters.classId) {
      conditions.push(`class_id = $${idx++}`);
      params.push(filters.classId);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const result = await this.query(
      `SELECT * FROM quizzes ${where} ORDER BY created_at DESC`,
      params
    );

    if (result.success && result.data) {
      result.data = result.data.map(q => {
        return {
          quizId: q.quiz_id,
          title: q.title,
          description: q.description || '',
          classId: q.class_id,
          teacherId: q.author_id,
          durationMinutes: q.duration_minutes,
          dueDate: q.due_date,
          passingScore: q.passing_score,
          maxAttempts: q.max_attempts,
          questions: typeof q.questions === 'string' ? JSON.parse(q.questions || '[]') : q.questions,
          status: q.status,
          createdAt: q.created_at
        };
      });
    }
    return result;
  }

  // Get quiz details
  async getQuizDetails(quizId) {
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

  // Start quiz session (teacher activates)
  async startQuiz(quizId) {
    const quizDetails = await this.getQuizDetails(quizId);

    if (!quizDetails.success) {
      return quizDetails;
    }

    const quiz = quizDetails.data;

    if (quiz.status !== 'Active') {
      return { success: false, error: 'Quiz is not active' };
    }

    // Check if quiz has expired
    if (quiz.due_date && new Date() > new Date(quiz.due_date)) {
      return { success: false, error: 'Quiz has expired' };
    }

    return { success: true, data: quiz };
  }

  // Submit student's quiz answers and grade (teacher-side)
  async submitStudentQuiz(quizId, submissionData) {
    const { studentId, answers } = submissionData;

    const quizDetails = await this.getQuizDetails(quizId);

    if (!quizDetails.success) {
      return quizDetails;
    }

    const quiz = quizDetails.data;
    const questions = quiz.questions;

    // Get quiz result row
    const resultRow = await this.query(
      'SELECT * FROM quiz_results WHERE quiz_id = $1 AND student_id = $2',
      [quizId, studentId]
    );

    if (resultRow.count === 0) {
      return { success: false, error: 'Quiz result not found' };
    }

    const quizResult = resultRow.data[0];

    // Calculate score
    let correctCount = 0;
    let wrongCount   = 0;
    let score        = 0;

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

    // Save graded result (use quiz_results table explicitly)
    const timeSpent = quizResult.time_spent_seconds || 0;
    const updateResult = await this.query(
      `UPDATE quiz_results
         SET answers=$1, score=$2, correct_count=$3, wrong_count=$4,
             submitted_at=$5, status=$6, time_spent_seconds=$7
       WHERE result_id=$8
       RETURNING *`,
      [
        JSON.stringify(answers), score, correctCount, wrongCount,
        new Date(), 'Submitted', timeSpent,
        quizResult.result_id,
      ]
    );

    return updateResult;
  }

  // Get quiz submissions for grading
  async getQuizSubmissions(quizId) {
    const result = await this.query(
      'SELECT qr.*, s.name as student_name, s.class_id ' +
      'FROM quiz_results qr ' +
      'LEFT JOIN students s ON qr.student_id = s.student_id ' +
      'WHERE qr.quiz_id = $1 ORDER BY s.name',
      [quizId]
    );

    return result;
  }

  // Get quiz statistics
  async getQuizStatistics(quizId) {
    const result = await this.query(
      'SELECT ' +
      '  (SELECT COUNT(*) FROM quiz_results WHERE quiz_id = $1) as total_attempts, ' +
      '  (SELECT COUNT(*) FROM quiz_results WHERE quiz_id = $1 AND status = \'Submitted\') as completed_attempts, ' +
      '  (SELECT AVG(score) FROM quiz_results WHERE quiz_id = $1 AND status = \'Submitted\') as average_score, ' +
      '  (SELECT COUNT(*) FROM quiz_results WHERE quiz_id = $1 AND score >= 70) as passing_count ' +
      'FROM quizzes WHERE quiz_id = $1',
      [quizId]
    );

    if (result.count === 0) {
      return { success: false, error: 'Quiz not found' };
    }

    return result;
  }

  // Close quiz (teacher/admin action)
  async closeQuiz(quizId) {
    const result = await this.query(
      `UPDATE quizzes SET status=$1 WHERE quiz_id=$2 RETURNING *`,
      ['Closed', quizId]
    );

    return result;
  }

  // Get all quizzes for a class
  async getClassQuizzes(classId) {
    const result = await this.query(
      'SELECT * FROM quizzes WHERE class_id = $1 ORDER BY created_at DESC',
      [classId]
    );

    return result;
  }

  // Get quizzes available to students (active quizzes)
  async getAvailableQuizzes() {
    const result = await this.query(
      'SELECT q.* FROM quizzes q ' +
      "WHERE q.status = 'Active' AND (q.due_date IS NULL OR q.due_date >= CURRENT_DATE) " +
      'ORDER BY created_at DESC LIMIT 20',
      []
    );

    for (const quiz of result.data) {
      if (quiz.questions && typeof quiz.questions === 'string') {
        quiz.questions = JSON.parse(quiz.questions);
      }
    }

    return result;
  }

  // Duplicate quiz for students
  async duplicateQuiz(quizId, studentId) {
    const quizDetails = await this.getQuizDetails(quizId);

    if (!quizDetails.success) {
      return quizDetails;
    }

    const originalQuiz = quizDetails.data;

    // Get student info
    const studentInfo = await this.query(
      'SELECT name FROM students WHERE student_id = $1',
      [studentId]
    );

    if (!studentInfo.success || studentInfo.count === 0) {
      return { success: false, error: 'Student not found' };
    }

    const resultId = `R${Date.now()}${studentId}`;
    const duplicateResult = await this.query(
      `INSERT INTO quiz_results
         (result_id, quiz_id, student_id, student_name, answers,
          score, correct_count, wrong_count, time_spent_seconds,
          started_at, submitted_at, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
       RETURNING *`,
      [
        resultId, quizId, studentId, studentInfo.data[0].name,
        JSON.stringify(Array(originalQuiz.questions.length).fill(null)),
        0, 0, 0, 0, null, null, 'Pending',
      ]
    );

    return duplicateResult;
  }

  // Update quiz (teacher/admin only)
  async updateQuiz(quizId, updates) {
    const existing = await this.getQuizDetails(quizId);
    if (!existing.success) return existing;

    const allowedFields = ['title', 'description', 'duration_minutes', 'due_date',
                           'passing_score', 'max_attempts', 'status'];
    const filtered = {};
    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key)) filtered[key] = updates[key];
    });

    // Also allow updating questions (serialize to JSON)
    if (updates.questions && Array.isArray(updates.questions)) {
      filtered.questions = JSON.stringify(updates.questions);
    }

    if (Object.keys(filtered).length === 0) {
      return { success: false, error: 'No valid fields to update' };
    }

    // Note: quizzes table has no updated_at column

    const cols = Object.keys(filtered);
    const vals = Object.values(filtered);
    const set  = cols.map((c, i) => `${c} = $${i + 1}`).join(', ');

    const result = await this.query(
      `UPDATE quizzes SET ${set} WHERE quiz_id = $${cols.length + 1} RETURNING *`,
      [...vals, quizId]
    );

    if (result.success && result.count > 0 && result.data[0].questions) {
      try { result.data[0].questions = JSON.parse(result.data[0].questions); } catch (_) {}
    }

    return result;
  }

  // Delete quiz and all its results
  async deleteQuiz(quizId) {
    const existing = await this.getQuizDetails(quizId);
    if (!existing.success) return existing;

    // Delete quiz_results first (FK constraint)
    await this.query('DELETE FROM quiz_results WHERE quiz_id = $1', [quizId]);

    return await this.query(
      'DELETE FROM quizzes WHERE quiz_id = $1 RETURNING *',
      [quizId]
    );
  }
}

module.exports = new QuizController();