import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

export const Videos = sequelize.define(
	'videos',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		id_user: { type: DataTypes.INTEGER, allowNull: false },
		title: { type: DataTypes.STRING, allowNull: false },
		video: { type: DataTypes.STRING, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);
