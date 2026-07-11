const BaseController = require('./baseController');

class GenericController extends BaseController {
    constructor(tableName) {
        super();
        this.model = tableName;
    }
}

module.exports = {
    attendanceController: new GenericController('attendance'),
    schedulesController: new GenericController('schedules'),
    announcementsController: new GenericController('announcements'),
    holidaysController: new GenericController('holidays'),
    assetsController: new GenericController('assets'),
    teachersController: new GenericController('teachers'),
    classesController: new GenericController('classes')
};
