import { Router } from 'express';
import { authenticateUser } from '@modules/login/middlewares/auth';
import { login } from '@modules/login/controllers/authHandlers';

const router = Router();

router.post('/login', login);

router.use(authenticateUser);

export default router;