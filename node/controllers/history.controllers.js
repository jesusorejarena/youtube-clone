// Models
import History from '../models/history.model.js';
import { Videos } from '../models/videos.model.js';

export const saveHistoryByUser = async (req, res) => {
	try {
		const historyAll = await History.findOne({ where: { id_video: req.body.id, id_user: req.client.id } });

		if (historyAll) {
			await historyAll.update({ created: new Date() });

			return res.status(200).json({ message: 'Ya existe en el historial.' });
		}

		const history = await History.create({ id_video: req.body.id, id_user: req.client.id, created: new Date() });

		return res.status(200).json({ data: history, message: 'Historial obtenido.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getHistoryByUser = async (req, res) => {
	try {
		const history = await History.findAll({
			where: { id_user: req.client.id },
			order: [['created', 'DESC']],
			include: [
				{
					model: Videos,
					attributes: ['id', 'id_user', 'title', 'video', 'created'],
				},
			],
		});

		return res.status(200).json({ data: history, message: 'Historial obtenido.' });
	} catch {
		return res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};
