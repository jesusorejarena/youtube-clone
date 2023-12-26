// Libraries
import { Router } from 'express';

// Middlewares
import { jwt } from '../middlewares/auth.js';

// Router
const router = Router();

// Controllers
import {
	createVideo,
	getVideoById,
	getAllVideos,
	getAllMyVideos,
	getAllVideosPopular,
} from '../controllers/videos.controllers.js';

router.post('/', jwt, createVideo);
router.get('/get-all', getAllVideos);
router.get('/get-all-my-videos', jwt, getAllMyVideos);
router.get('/get-all-popular-videos', getAllVideosPopular);
router.get('/get-by-id/:id', getVideoById);

export default router;
