// Models
import { Users } from '../models/users.model.js';

// Functions
import { createJwt } from '../utils/functions.js';

// Validations
import { loginSchema, signInSchema } from '../middlewares/validations/auth.validation.js';

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		await loginSchema.validateAsync(req.body);
	} catch {
		return res.status(400).json({ message: 'Ocurrió un error al validar los datos' });
	}

	try {
		let user = await Users.findOne({
			where: { email: email },
		});

		// In case client do not exist
		if (!user)
			return res.status(404).json({
				message: `¡No se ha encontrado al usuario con el email ${email}!.`,
			});

		if (password !== user.password) {
			return res.status(401).json({ message: `Contraseña incorrecta!.` });
		}

		// Return token
		const token = createJwt(user);

		return res.status(200).json({
			token,
			user,
			message: 'Datos verificados correctamente.',
		});
	} catch {
		return res.status(400).json({ message: 'Error en la base de datos.' });
	}
};

export const signIn = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		await signInSchema.validateAsync(req.body);
	} catch {
		return res.status(400).json({ message: 'Ocurrió un error al validar los datos' });
	}

	try {
		let user = await Users.findOne({
			where: { email: email },
		});

		// In case client do not exist
		if (user)
			return res.status(404).json({
				message: `Este usuario con este correo ${email} ya existe!.`,
			});

		user = await Users.create({
			name,
			email,
			password,
			created: new Date(),
		});

		// Return token
		const token = createJwt(user);

		return res.status(200).json({
			token,
			user,
			message: 'Usuario creado correctamente.',
		});
	} catch {
		res.status(400).json({ message: 'Error en la base de datos.' });
	}
};

/* ------------------------------- */

export const verifyUser = async (req, res) => {
	return res.status(200).json({ message: 'User verified successfully.' });
};
