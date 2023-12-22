import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

export const Comments = sequelize.define(
	'comments',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		id_user: { type: DataTypes.INTEGER, allowNull: false },
		id_video: { type: DataTypes.INTEGER, allowNull: false },
		comment: { type: DataTypes.STRING, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);
