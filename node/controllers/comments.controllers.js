// Models
import { Comments } from '../models/comments.model.js';
import { Users } from '../models/users.model.js';

export const createComment = async (req, res) => {
	try {
		const response = await Comments.create({
			...req.body,
			id_user: req.client.id,
			created: new Date(),
		});

		return res.status(200).json({ data: response, message: 'Video subido correctamente.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getCommentsByVideo = async (req, res) => {
	try {
		const videosComments = await Comments.findAll({
			where: { id_video: req.params.id },
			order: [['created', 'DESC']],
			include: [
				{
					model: Users,
					attributes: ['id', 'name', 'email'],
				},
			],
		});

		return res.status(200).json({ data: videosComments, message: 'Video conseguido correctamente.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};
