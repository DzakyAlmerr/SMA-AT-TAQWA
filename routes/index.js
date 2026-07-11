// 🌐 ROUTES: Smart School Portal API Endpoints
// 🔐 Main router configuration

const express = require('express');
const router = express.Router();

// Import controllers
const studentController = require('../controllers/studentController');
const quizController = require('../controllers/quizController');
const materialController = require('../controllers/materialController');
const { authenticateToken } = require('../utils/auth');

const { 
    schedulesController, 
    announcementsController, 
    holidaysController, 
    assetsController 
} = require('../controllers/genericController');
const attendanceController = require('../controllers/attendanceController');

// Health check endpoint
router.get('/health', async (req, res) => {
    try {
        const { Pool } = require('pg');
        const poolConfig = process.env.DATABASE_URL 
    ? { connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }
    : {
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'smart_school',
        password: process.env.DB_PASSWORD || 'password',
        port: process.env.DB_PORT || 5432,
    };
const pool = new Pool(poolConfig);

        const result = await pool.query('SELECT COUNT(*) as count FROM students');
        await pool.end();

        res.json({
            success: true,
            message: 'API is healthy',
            timestamp: new Date().toISOString(),
            database: 'connected',
            studentCount: parseInt(result.rows[0].count)
        });
    } catch (error) {
        res.status(503).json({
            success: false,
            message: 'Service unavailable',
            error: error.message
        });
    }
});

// Authentication routes
const authRoutes = require('./auth');
router.use('/auth', authRoutes);

// ─── Student login (public) ────────────────────────────────────────────────
router.post('/student/login', async (req, res) => {
    try {
        const { studentId, password } = req.body;
        const result = await studentController.login(studentId, password);
        const status = result.success ? 200 : 401;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Auth + role guard for /student/* ────────────────────────────────────
router.use('/student', authenticateToken, (req, res, next) => {
    // Allow Students, Teachers, and Admins (teachers need to view quiz results)
    if (!['Student', 'Teacher', 'Admin'].includes(req.user.role)) {
        return res.status(403).json({ success: false, error: 'Unauthorized access' });
    }
    next();
});

// ─── Student routes ───────────────────────────────────────────────────────
router.get('/student/quizzes', async (req, res) => {
    if (req.user.role !== 'Student') {
        return res.status(403).json({ success: false, error: 'Unauthorized access' });
    }
    try {
        const result = await studentController.getStudentQuizzes(req.user.userId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/student/quizzes/:quizId/start', async (req, res) => {
    try {
        const result = await studentController.startQuiz(req.params.quizId, req.user.userId);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/student/quizzes/:quizId', async (req, res) => {
    try {
        const result = await studentController.getQuizById(req.params.quizId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/student/quizzes/:quizId/submit', async (req, res) => {
    try {
        const { answers } = req.body;
        const result = await studentController.submitQuiz(
            req.params.quizId, req.user.userId, answers
        );
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/student/results', async (req, res) => {
    try {
        let result;
        // If teacher or admin, fetch ALL results. Otherwise fetch student's results.
        if (req.user.role === 'Teacher' || req.user.role === 'Admin') {
            result = await studentController.query('SELECT qr.*, q.title as quiz_title, q.class_id, s.name as student_name FROM quiz_results qr LEFT JOIN quizzes q ON qr.quiz_id = q.quiz_id LEFT JOIN students s ON qr.student_id = s.student_id ORDER BY qr.submitted_at DESC');
        } else {
            result = await studentController.getStudentResults(req.user.userId);
        }
        
        if (result.success && result.data) {
            result.data = result.data.map(r => ({
                resultId: r.result_id,
                quizId: r.quiz_id,
                studentId: r.student_id,
                studentName: r.student_name || req.user.name || req.user.username,
                answers: typeof r.answers === 'string' ? JSON.parse(r.answers || '[]') : r.answers,
                score: r.score,
                correctCount: r.correct_count,
                wrongCount: r.wrong_count,
                timeSpent: r.time_spent_seconds ? Math.floor(r.time_spent_seconds / 60) : 0,
                startedAt: r.started_at,
                submittedAt: r.submitted_at,
                status: r.status,
                quiz_title: r.quiz_title,
                classId: r.class_id
            }));
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/student/profile', async (req, res) => {
    try {
        const result = await studentController.getStudentProfile(req.user.userId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.put('/student/profile', async (req, res) => {
    try {
        const result = await studentController.updateStudentProfile(
            req.user.userId, req.body
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Auth + role guard for /quiz/* ────────────────────────────────────────
router.use('/quiz', authenticateToken, (req, res, next) => {
    if (req.user.role !== 'Teacher' && req.user.role !== 'Admin') {
        return res.status(403).json({ success: false, error: 'Unauthorized access' });
    }
    next();
});

// ─── Teacher quiz routes ──────────────────────────────────────────────────
router.get('/quiz', async (req, res) => {
    try {
        const result = await quizController.getQuizzes(req.query);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
router.post('/quiz', async (req, res) => {
    try {
        const { title, questions } = req.body;
        // Validate required fields early (before touching DB)
        if (!title || !questions) {
            return res.status(400).json({
                success: false,
                error: 'Quiz title and questions are required'
            });
        }
        const result = await quizController.createQuiz(req.body);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/quiz/:quizId', async (req, res) => {
    try {
        const result = await quizController.getQuizDetails(req.params.quizId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/quiz/:quizId/start', async (req, res) => {
    try {
        const result = await quizController.startQuiz(req.params.quizId);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/quiz/:id/submit', async (req, res) => {
    try {
        const result = await quizController.submitStudentQuiz(req.params.id, req.body);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/quiz/:quizId/submissions', async (req, res) => {
    try {
        const result = await quizController.getQuizSubmissions(req.params.quizId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/quiz/:quizId/statistics', async (req, res) => {
    try {
        const result = await quizController.getQuizStatistics(req.params.quizId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/quiz/:quizId/close', async (req, res) => {
    try {
        const result = await quizController.closeQuiz(req.params.quizId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Edit quiz (title, description, questions, status, etc.)
router.put('/quiz/:quizId', async (req, res) => {
    try {
        const result = await quizController.updateQuiz(req.params.quizId, req.body);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Delete quiz
router.delete('/quiz/:quizId', async (req, res) => {
    try {
        const result = await quizController.deleteQuiz(req.params.quizId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Material routes (Teacher/Admin) ───────────────────────────────────────────
router.use('/material', authenticateToken);

// Create material (Teacher/Admin)
router.post('/material', async (req, res) => {
    try {
        if (req.user.role !== 'Teacher' && req.user.role !== 'Admin') {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }
        const result = await materialController.createMaterial(req.body);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// List materials (with optional ?classId= or ?subject= filter)
router.get('/material', async (req, res) => {
    try {
        const result = await materialController.getMaterials(req.query);
        // Controller already mapped the data
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Get single material
router.get('/material/:materialId', async (req, res) => {
    try {
        const result = await materialController.getMaterialById(req.params.materialId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Edit material (Teacher/Admin)
router.put('/material/:materialId', async (req, res) => {
    try {
        if (req.user.role !== 'Teacher' && req.user.role !== 'Admin') {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }
        const result = await materialController.updateMaterial(req.params.materialId, req.body);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Delete material (Teacher/Admin)
router.delete('/material/:materialId', async (req, res) => {
    try {
        if (req.user.role !== 'Teacher' && req.user.role !== 'Admin') {
            return res.status(403).json({ success: false, error: 'Unauthorized' });
        }
        const result = await materialController.deleteMaterial(req.params.materialId);
        const status = result.success ? 200 : 404;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Student: list materials for their class
router.get('/student/materials', async (req, res) => {
    try {
        const result = await materialController.getStudentMaterials(
            req.query.classId || req.user?.classId || ''
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Common data routes ───────────────────────────────────────────────────
router.get('/students', async (req, res) => {
    try {
        const result = await studentController.getAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/students', async (req, res) => {
    try {
        const result = await studentController.createStudent(req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/classes', async (req, res) => {
    try {
        const result = await studentController.query('SELECT * FROM classes ORDER BY name');
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/classes', async (req, res) => {
    try {
        const { class_id, name, grade, teacher_id } = req.body;
        const result = await studentController.query(
            'INSERT INTO classes (class_id, name, grade, teacher_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [class_id, name || req.body.class_name, grade || req.body.grade_level, teacher_id || req.body.homeroom_teacher]
        );
        res.json({ success: true, data: result.data[0] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.delete('/classes/:id', async (req, res) => {
    try {
        await studentController.query('DELETE FROM classes WHERE class_id = $1', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/teachers', async (req, res) => {
    try {
        const result = await studentController.query('SELECT * FROM teachers ORDER BY name');
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/teachers', async (req, res) => {
    try {
        const { teacher_id, name, email, phone, subjects, status, password } = req.body;
        const result = await studentController.query(
            'INSERT INTO teachers (teacher_id, name, email, phone, subjects, status, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [teacher_id, name, email, phone, subjects || '[]', status || 'Active', password || 'password123']
        );
        res.json({ success: true, data: result.data[0] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.delete('/teachers/:id', async (req, res) => {
    try {
        await studentController.query('DELETE FROM teachers WHERE teacher_id = $1', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        await studentController.query('DELETE FROM students WHERE student_id = $1', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Attendance ────────────────────────────────────────────────────────────
router.post('/attendance', authenticateToken, async (req, res) => {
    try {
        const result = await attendanceController.submitAttendance(req.user.userId, req.user.role, req.body);
        const status = result.success ? 200 : 400;
        res.status(status).json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/attendance', authenticateToken, async (req, res) => {
    try {
        const result = await attendanceController.getAttendanceByDate(req.query.date);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ─── Generic CRUD Helper ──────────────────────────────────────────────────
const addCrudRoutes = (path, controller) => {
    router.get(path, async (req, res) => {
        try {
            const result = await controller.getAll();
            res.json(result);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    });

    router.post(path, async (req, res) => {
        try {
            const result = await controller.create(req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    });

    router.put(`${path}/:id`, async (req, res) => {
        try {
            const result = await controller.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    });

    router.delete(`${path}/:id`, async (req, res) => {
        try {
            const result = await controller.delete(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    });
};

addCrudRoutes('/schedule', schedulesController);
addCrudRoutes('/announcements', announcementsController);
addCrudRoutes('/holidays', holidaysController);
addCrudRoutes('/assets', assetsController);

// Add missing PUT routes for existing entities
router.put('/students/:id', async (req, res) => {
    try {
        const result = await studentController.update(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.put('/teachers/:id', async (req, res) => {
    try {
        const result = await studentController.query('UPDATE teachers SET name=$1, email=$2, phone=$3 WHERE teacher_id=$4 RETURNING *', [req.body.name, req.body.email, req.body.phone, req.params.id]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.put('/classes/:id', async (req, res) => {
    try {
        const result = await studentController.query('UPDATE classes SET name=$1, grade=$2 WHERE class_id=$3 RETURNING *', [req.body.name || req.body.className, req.body.grade || req.body.gradeLevel, req.params.id]);
        res.json(result);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
