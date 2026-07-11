// Base controller class for database operations
class BaseController {
    constructor() {
        this.model = '';
    }

    // Helper to execute database queries
    async query(sql, params = []) {
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

        try {
            const result = await pool.query(sql, params);
            await pool.end();
            return { success: true, data: result.rows, count: result.rows.length };
        } catch (error) {
            await pool.end();
            console.error(`Database error in ${this.model}:`, error.message);
            return { success: false, error: error.message };
        }
    }

    // Generic CRUD operations
    async getAll(filter = '', params = []) {
        let sql = `SELECT * FROM ${this.model}`;
        if (filter) sql += ` WHERE ${filter}`;
        sql += ' ORDER BY created_at DESC';
        return await this.query(sql, params);
    }

    async getById(id) {
        return await this.query(
            `SELECT * FROM ${this.model} WHERE ${this.getIdColumn()} = $1`,
            [id]
        );
    }

    async create(data) {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ');
        const sql = `INSERT INTO ${this.model} (${columns.join(', ')}) VALUES (${placeholders}) RETURNING *`;
        return await this.query(sql, values);
    }

    async update(id, data) {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const setClause = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');
        const sql = `UPDATE ${this.model} SET ${setClause} WHERE ${this.getIdColumn()} = $${columns.length + 1} RETURNING *`;
        return await this.query(sql, [...values, id]);
    }

    async delete(id) {
        return await this.query(
            `DELETE FROM ${this.model} WHERE ${this.getIdColumn()} = $1 RETURNING *`,
            [id]
        );
    }

    // Return the primary key column name for each table
    getIdColumn() {
        const idMap = {
            quizzes:      'quiz_id',
            quiz_results: 'result_id',
            students:     'student_id',
            teachers:     'teacher_id',
            classes:      'class_id',
            users:        'user_id',
            materials:    'material_id',
        };
        return idMap[this.model] || 'id';
    }
}

module.exports = BaseController;