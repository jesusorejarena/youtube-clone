// Libraries
import { Router } from 'express';

// Middlewares
import { jwt } from '../middlewares/auth.js';

// Router
const router = Router();

// Controllers
import { createComment, getCommentsByVideo } from '../controllers/comments.controllers.js';

router.post('/', jwt, createComment);
router.get('/get-by-video/:id', getCommentsByVideo);

export default router;
