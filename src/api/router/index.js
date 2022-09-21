import { Router } from 'express';
import carsRouter from '../modules/cars/routes/router.js';
import usersRouter from '../modules/users/routes/router.js';
import rentalRouter from '../modules/rental/routes/router.js';

const router = Router();

router.use('/cars', carsRouter);
router.use('/users', usersRouter);
router.use('/rental', rentalRouter);

export default router;
