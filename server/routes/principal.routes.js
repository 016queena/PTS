import { Router } from 'express';
import {
    createPrincipal,
    getPrincipalById,
    updatePrincipalById,
    deletePrincipalById,
    getAllPrincipals,
} from ('../controllers/principal.controllers');

const principalRouter = Router();

principalRouter.post('/', createPrincipal);
principalRouter.get('/:principalId', getPrincipalById);
principalRouter.put('/:principalId', updatePrincipalById);
principalRouter.delete('/:principalId', deletePrincipalById);
principalRouter.get('/', getAllPrincipals);

export default principalRouter;
