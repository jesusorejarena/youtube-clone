// Models
import { Likes } from '../models/likes.model.js';

const createOrUpdateLike = async (req, res) => {
	const { id_video, id_user } = req.query;
	const { type } = req.body;

	try {
		let like = await Likes.findOne({
			where: { id_video: id_video, id_user: id_user },
		});

		if (type !== 'deleted') {
			if (like) {
				await like.update({
					type: req.body.type,
					id_video: req.body.id_video,
					id_user: req.client.id,
				});
			} else {
				await Likes.create({
					type: req.body.type,
					id_video: req.body.id_video,
					id_user: req.client.id,
				});
			}
		} else {
			await like.destroy();
		}

		res.status(200).json({ message: 'Hecho correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

const getLikeByVideo = async (req, res) => {
	const { id } = req.query;

	try {
		videosComments = await Likes.findOne({
			where: { id_video: id },
		});

		res.status(200).json({ data: videos, message: 'Video conseguido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export default {
	createOrUpdateLike,
	getLikeByVideo,
};
