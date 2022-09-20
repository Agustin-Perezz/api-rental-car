import { Router } from 'express';

import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    getUserTasks,
    updateUser,
} from '../controllers/users.controller.js';

const router = Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.get('/:id/cars', getUserTasks);

export default router;
