// Models
import { Comments } from '../models/comments.model.js';

const createComment = async (req, res) => {
	try {
		response = await Comments.create({
			...req.body,
			id_video: req.body.id_video,
			id_user: req.client.id,
		});

		res.status(200).json({ data: response, message: 'Video subido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

const getCommentsByVideo = async (req, res) => {
	const { id } = req.query;

	try {
		videosComments = await Comments.findOne({
			where: { id_video: id },
			order: [['created', 'DESC']],
		});

		res.status(200).json({ data: videos, message: 'Video conseguido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export default {
	createComment,
	getCommentsByVideo,
};
