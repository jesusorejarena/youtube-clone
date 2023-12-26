import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

export const Users = sequelize.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
		password: { type: DataTypes.STRING, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);
