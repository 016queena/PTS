import { Router } from 'express';
import {
  createCourse,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  getAllCourses,
} from '../controllers/course.controllers.js';

const courseRouter = Router();

courseRouter.post('/', createCourse);
courseRouter.get('/:courseId', getCourseById);
courseRouter.put('/:courseId', updateCourseById);
courseRouter.delete('/:courseId', deleteCourseById);
courseRouter.get('/', getAllCourses);

export default courseRouter;
