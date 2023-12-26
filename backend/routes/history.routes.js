// Libraries
import { Router } from 'express';

// Middlewares
import { jwt } from '../middlewares/auth.js';

// Router
const router = Router();

// Controllers
import { getHistoryByUser, saveHistoryByUser } from '../controllers/history.controllers.js';

router.post('/', jwt, saveHistoryByUser);
router.get('/', jwt, getHistoryByUser);

export default router;
