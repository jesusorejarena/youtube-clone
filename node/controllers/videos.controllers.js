// Models
import { Videos } from '../models/videos.model.js';
import { Comments } from '../models/comments.model.js';
import { Likes } from '../models/likes.model.js';

const createVideo = async (req, res) => {
	try {
		response = await Videos.create({
			...req.body,
		});

		res.status(200).json({ data: response, message: 'Video subido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

const getVideoById = async (req, res) => {
	const { id } = req.query;

	try {
		videos = await Videos.findOne({
			where: { id: id },
		});

		videosComments = await Comments.findOne({
			where: { id_video: id },
		});

		videosLike = await Likes.count({
			where: { id_video: id, type: 'like' },
		});

		videosDislike = await Likes.count({
			where: { id_video: id, type: 'dislike' },
		});

		res.status(200).json({ data: videos, message: 'Video conseguido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

const getAllVideos = async (req, res) => {
	try {
		videos = await Videos.findAll();

		res.status(200).json({ data: videos, message: 'Videos conseguidos correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export default {
	createVideo,
	getVideoById,
	getAllVideos,
};
