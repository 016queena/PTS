import { Router } from 'express';
import {
    createTeacher,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    getAllTeachers,
} from ('../controllers/teacher.controllers.js');

const teacherRouter = Router();

teacherRouter.post('/', createTeacher);
teacherRouter.get('/:teacherId', getTeacherById);
teacherRouter.put('/:teacherId', updateTeacherById);
teacherRouter.delete('/:teacherId', deleteTeacherById);
teacherRouter.get('/', getAllTeachers);

export default teacherRouter;
