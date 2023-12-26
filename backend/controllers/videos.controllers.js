// Models
import { Videos } from '../models/videos.model.js';

import { format } from 'date-fns';
import { sequelize } from '../config/db-config.js';

export const createVideo = async (req, res) => {
	try {
		const response = await Videos.create({
			...req.body,
			popularity: 0,
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

		res.status(200).json({ data: videos, message: 'Video conseguido correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al subir los datos.' });
	}
};

export const getAllVideos = async (req, res) => {
	try {
		const videos = await Videos.findAll({ order: sequelize.literal('RANDOM()') });

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

export const getAllVideosPopular = async (req, res) => {
	try {
		let videos = await Videos.findAll({
			order: [
				['popularity', 'DESC'],
				['created', 'DESC'],
			],
			limit: 5,
		});

		videos = videos.map((video) => {
			video = video.dataValues;

			const created = format(new Date(video?.created), 'MM/dd/yyyy') === format(new Date(), 'MM/dd/yyyy');

			return {
				...video,
				popularity: created ? video.popularity + 100 : video.popularity,
			};
		});

		videos.sort((a, b) => {
			// Ordenar por popularidad de mayor a menor
			const popularityComparison = b.popularity - a.popularity;

			// Si hay un empate en popularidad, ordenar aleatoriamente cada vez
			if (popularityComparison === 0) {
				return Math.random() - 0.5; // Resta o suma un valor aleatorio entre -0.5 y 0.5
			}

			return popularityComparison;
		});

		res.status(200).json({ data: videos, message: 'Videos conseguidos correctamente.' });
	} catch {
		res.status(400).json({ message: 'Hubo un error al traer los datos.' });
	}
};
