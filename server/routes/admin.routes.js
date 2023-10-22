import { Router } from 'express';
import {
  // createAdmin,
  getAdminProfileById,
  // updateAdminById,
  // deleteAdminById,
  // getAllAdmins,
  // getAdminProfileById, // Import the new route
} from '../controllers/admin.controllers.js';

const adminRouter = Router();

// adminRouter.post('/', createAdmin);
adminRouter.get('/', getAdminProfileById);
// adminRouter.put('/:adminId', updateAdminById);
// adminRouter.delete('/:adminId', deleteAdminById);
// adminRouter.get('/', getAllAdmins);
// adminRouter.get('/profile/:adminId', getAdminProfileById); // Add this route

export default adminRouter;
