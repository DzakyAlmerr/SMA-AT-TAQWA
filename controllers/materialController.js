// 📚 MATERIAL CONTROLLER - Teacher Material Management
// Handles CRUD for learning materials

const BaseController = require('./baseController');

class MaterialController extends BaseController {
  constructor() {
    super();
    this.model = 'materials';
  }

  // Create new material
  async createMaterial(materialData) {
    const { title, description, url, classId, teacherId, teacher } = materialData;

    if (!title) {
      return { success: false, error: 'Material title is required' };
    }

    const material_id = `M${Date.now()}`;
    const content = JSON.stringify({ description: description || '', url: url || '' });

    return await this.query(
      `INSERT INTO materials
         (material_id, title, content, class_id, author_id, author_name, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING *`,
      [
        material_id, title, content, classId || '',
        teacherId || '', teacher || '',
        new Date(), new Date()
      ]
    );
  }

  // Get all materials (optionally filtered by classId or subject)
  async getMaterials(filters = {}) {
    const conditions = [];
    const params = [];
    let idx = 1;

    if (filters.classId) {
      conditions.push(`class_id = $${idx++}`);
      params.push(filters.classId);
    }
    if (filters.subject) {
      conditions.push(`subject = $${idx++}`);
      params.push(filters.subject);
    }
    if (filters.teacherId) {
      conditions.push(`author_id = $${idx++}`);
      params.push(filters.teacherId);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const result = await this.query(
      `SELECT * FROM materials ${where} ORDER BY created_at DESC`,
      params
    );

    if (result.success && result.data) {
      result.data = result.data.map(m => {
        let parsedContent = {};
        try { parsedContent = JSON.parse(m.content || '{}'); } catch(e){}
        return {
          ...m,
          materialId: m.material_id,
          classId: m.class_id,
          description: parsedContent.description || '',
          url: parsedContent.url || '',
          teacherId: m.author_id,
          teacher: m.author_name
        };
      });
    }

    return result;
  }

  // Get single material by ID
  async getMaterialById(materialId) {
    const result = await this.query(
      'SELECT * FROM materials WHERE material_id = $1',
      [materialId]
    );

    if (result.count === 0) {
      return { success: false, error: 'Material not found' };
    }

    return { success: true, data: result.data[0] };
  }

  // Update a material (teacher/admin only)
  async updateMaterial(materialId, updates) {
    const allowedFields = ['title', 'subject', 'class_id', 'content', 'file_url', 'material_type'];
    const filtered = {};
    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key)) filtered[key] = updates[key];
    });

    if (Object.keys(filtered).length === 0) {
      return { success: false, error: 'No valid fields to update' };
    }

    // Check exists first
    const existing = await this.getMaterialById(materialId);
    if (!existing.success) return existing;

    filtered.updated_at = new Date();
    return await this.update(materialId, filtered);
  }

  // Delete a material
  async deleteMaterial(materialId) {
    const existing = await this.getMaterialById(materialId);
    if (!existing.success) return existing;

    return await this.delete(materialId);
  }

  // Student: get materials for their class
  async getStudentMaterials(classId) {
    return await this.getMaterials({ classId });
  }
}

module.exports = new MaterialController();
