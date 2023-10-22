import { Router } from 'express';
import {
  createDepartment,
  getDepartmentById,
  updateDepartmentById,
  deleteDepartmentById,
  getAllDepartments,
} from '../controllers/department.controllers.js';

const departmentRouter = Router();

departmentRouter.post('/', createDepartment);
departmentRouter.get('/:departmentId', getDepartmentById);
departmentRouter.put('/:departmentId', updateDepartmentById);
departmentRouter.delete('/:departmentId', deleteDepartmentById);
departmentRouter.get('/', getAllDepartments);

export default departmentRouter;
