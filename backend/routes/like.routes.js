// Libraries
import { Router } from 'express';

// Middlewares
import { jwt } from '../middlewares/auth.js';

// Router
const router = Router();

// Controllers
import { createOrUpdateLike, getLikeByVideo, getLikesCountByVideo } from '../controllers/like.controllers.js';

router.post('/:id', jwt, createOrUpdateLike);
router.get('/:id', jwt, getLikeByVideo);
router.get('/get-likes-by-video/:id', getLikesCountByVideo);

export default router;
