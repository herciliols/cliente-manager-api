import { Router } from 'express';
import { authenticateUser } from './middlewares/auth';
import { login } from './controllers/authHandlers';

const router = Router();

router.post('/login', login);

router.use(authenticateUser);

export default router;