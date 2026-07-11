const BaseController = require('./baseController');

class AttendanceController extends BaseController {
    constructor() {
        super();
        this.model = 'attendance';
    }

    async submitAttendance(userId, role, attendanceData) {
        const today = new Date().toISOString().split('T')[0];
        
        const existing = await this.query(
            'SELECT * FROM attendance WHERE user_id = $1 AND date = $2',
            [userId, today]
        );

        if (existing.count > 0) {
            return { success: false, error: 'Already submitted attendance for today' };
        }

        const now = new Date();
        const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        return await this.create({
            user_id: userId,
            role: role,
            date: today,
            time: timeStr,
            photo_url: attendanceData.photoUrl || '',
            latitude: attendanceData.latitude || null,
            longitude: attendanceData.longitude || null,
            accuracy: attendanceData.accuracy || null
        });
    }

    async getAttendanceByDate(date) {
        return await this.query('SELECT * FROM attendance ORDER BY created_at DESC LIMIT 1000');
    }
}

module.exports = new AttendanceController();
