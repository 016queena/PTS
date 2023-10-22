import { Router } from 'express';
import {
  createParent,
  getParentById,
  updateParentById,
  deleteParentById,
  getAllParents,
} from '../controllers/parent.controllers.js';

const parentRouter = Router();

parentRouter.post('/', createParent);
parentRouter.get('/:parentId', getParentById);
parentRouter.put('/:parentId', updateParentById);
parentRouter.delete('/:parentId', deleteParentById);
parentRouter.get('/', getAllParents);

export default parentRouter; // Export the router for use in other parts of your application
