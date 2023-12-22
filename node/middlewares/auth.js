import { Users } from '../models/users.model.js';

// Libraries
import jsonwebtoken from 'jsonwebtoken';

// Config
import dotenv from 'dotenv';
dotenv.config();

export const jwt = async (req, res, next) => {
	try {
		// Read token from header
		const token = req.header('x-auth-token');

		if (!token) return res.status(401).json({ message: 'Acceso denegado!.' });

		const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);

		try {
			const user = await Users.findOne({
				attributes: ['id', 'email', 'name'],
				where: { email: decoded.email.toLowerCase() },
			});

			if (user) {
				req.token = decoded;
				req.client = decoded;
				next();
			} else {
				return res.status(404).json({ message: 'Usuario no encontrado.' });
			}
		} catch {
			// Error in database
			return res.status(400).json({ message: 'Error en la base de datos.' });
		}
	} catch (error) {
		return res.status(401).json({ message: 'Token inválido.' });
	}
};
