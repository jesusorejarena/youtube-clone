// Models
import { Videos } from '../models/videos.model.js';
import { Comments } from '../models/comments.model.js';
import { Likes } from '../models/likes.model.js';

export const createVideo = async (req, res) => {
	try {
		const response = await Videos.create({
			...req.body,
			id_user: req.client.id,
			created: new Date(),
		});

		res.status(200).json({ data: response, message: 'Video subido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getVideoById = async (req, res) => {
	const { id } = req.params;

	try {
		const videos = await Videos.findOne({
			where: { id: id },
		});

		const videosComments = await Comments.findOne({
			where: { id_video: id },
		});

		const videosLike = await Likes.count({
			where: { id_video: id, type: 'like' },
		});

		const videosDislike = await Likes.count({
			where: { id_video: id, type: 'dislike' },
		});

		res.status(200).json({ data: videos, message: 'Video conseguido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getAllVideos = async (req, res) => {
	try {
		const videos = await Videos.findAll({ order: [['created', 'DESC']] });

		res.status(200).json({ data: videos, message: 'Videos conseguidos correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getAllMyVideos = async (req, res) => {
	try {
		const videos = await Videos.findAll({ where: { id_user: req.client.id } });

		res.status(200).json({ data: videos, message: 'Videos conseguidos correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};