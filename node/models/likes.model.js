import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

export const Likes = sequelize.define(
	'likes',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		id_user: { type: DataTypes.INTEGER, allowNull: false },
		id_video: { type: DataTypes.INTEGER, allowNull: false },
		type: { type: DataTypes.STRING, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);
