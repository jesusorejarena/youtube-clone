// Libraries
import jwt from 'jsonwebtoken';

export const createJwt = (user) => {
	return jwt.sign(
		{
			id: user.id,
			email: user.email,
			name: user.name,
		},
		process.env.SECRET_KEY,
		{
			expiresIn: '30d',
		}
	);
};

export const capitalize = async (s) => {
	if (typeof s !== 'string') return '';
	const sLower = s.toLowerCase();
	return sLower.charAt(0).toUpperCase() + sLower.slice(1);
};

export const formatoFecha = async (fecha, formato) => {
	const map = {
		dd: fecha.getDate(),
		mm: fecha.getMonth() + 1,
		yyyy: fecha.getFullYear(),
	};

	if (map.dd >= 1 || map.dd >= 9) map.dd = `0${map.dd}`;
	if (map.mm >= 1 || map.mm >= 9) map.mm = `0${map.mm}`;

	return formato.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
};

export const arreglarFecha = async (fecha) => {
	if (fecha) {
		const fechaSeparado = fecha.split(/[-]|[/]/);
		fechaSeparado[1] === '01' && (fechaSeparado[1] = 'Enero');
		fechaSeparado[1] === '02' && (fechaSeparado[1] = 'Febrero');
		fechaSeparado[1] === '03' && (fechaSeparado[1] = 'Marzo');
		fechaSeparado[1] === '04' && (fechaSeparado[1] = 'Abril');
		fechaSeparado[1] === '05' && (fechaSeparado[1] = 'Mayo');
		fechaSeparado[1] === '06' && (fechaSeparado[1] = 'Junio');
		fechaSeparado[1] === '07' && (fechaSeparado[1] = 'Julio');
		fechaSeparado[1] === '08' && (fechaSeparado[1] = 'Agosto');
		fechaSeparado[1] === '09' && (fechaSeparado[1] = 'Septiembre');
		fechaSeparado[1] === '10' && (fechaSeparado[1] = 'Octubre');
		fechaSeparado[1] === '11' && (fechaSeparado[1] = 'Noviempre');
		fechaSeparado[1] === '12' && (fechaSeparado[1] = 'Diciembre');
		return `${fechaSeparado[2]}/${fechaSeparado[1]}/${fechaSeparado[0]}`;
	} else {
		return null;
	}
};

export const arreglarHora = async (hora) => {
	if (hora) {
		const horaSeparado = hora.split(/[:]/);

		if (parseInt(horaSeparado[0]) > 12) {
			return `${parseInt(horaSeparado[0]) - 12}:${horaSeparado[1]} pm`;
		} else if (parseInt(horaSeparado[0]) === 12) {
			return `12:${horaSeparado[1]} pm`;
		} else if (parseInt(horaSeparado[0]) === 0) {
			return `12:${horaSeparado[1]} am`;
		} else {
			return `${parseInt(horaSeparado[0])}:${horaSeparado[1]} am`;
		}
	} else {
		return null;
	}
};
