// Models
import { Likes } from '../models/likes.model.js';

export const createOrUpdateLike = async (req, res) => {
	const { id } = req.params;
	let { type } = req.body;

	try {
		let like = await Likes.findOne({
			where: { id_video: id, id_user: req.client.id },
		});

		if (type !== 'deleted') {
			if (like) {
				await like.update({
					type: type,
					id_video: id,
					id_user: req.client.id,
					created: new Date(),
				});
			} else {
				await Likes.create({
					type: type,
					id_video: id,
					id_user: req.client.id,
					created: new Date(),
				});
			}
		} else {
			await like.destroy();

			type = '';
		}

		return res.status(200).json({ type: type, message: 'Hecho correctamente.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getLikeByVideo = async (req, res) => {
	try {
		const likesVideo = await Likes.findOne({
			where: { id_video: req.params.id },
		});

		return res.status(200).json({ data: likesVideo, message: 'likes conseguido correctamente.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getLikesCountByVideo = async (req, res) => {
	try {
		const likes = await Likes.count({
			where: { id_video: req.params.id, type: 'like' },
		});

		const dislikes = await Likes.count({
			where: { id_video: req.params.id, type: 'dislike' },
		});

		return res.status(200).json({ data: { likes, dislikes }, message: 'Likes conseguido correctamente.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};
