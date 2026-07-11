
const { 
    schedulesController, 
    announcementsController, 
    holidaysController, 
    assetsController 
} = require('../controllers/genericController');
const attendanceController = require('../controllers/attendanceController');

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
