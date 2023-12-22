// Libraries
import { Router } from 'express';

// Middlewares
import { jwt } from '../middlewares/auth.js';

// Router
const router = Router();

// Controllers
import { login, signIn, verifyUser } from '../controllers/auth.controllers.js';

// Login
router.post('/login', login);
router.post('/signin', signIn);

router.get('/whois', jwt, verifyUser);

export default router;
