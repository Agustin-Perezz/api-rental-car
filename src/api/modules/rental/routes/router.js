import { Router } from 'express';
import {
    createRental,
    deleteRental,
    getRental,
    getRentals,
    updateRental,
} from '../controller/rental.controller.js';

const router = Router();

router.get('/:id', getRental);
router.get('/', getRentals);
router.post('/', createRental);
router.put('/:id', updateRental);
router.delete('/:idRental', deleteRental);

export default router;
