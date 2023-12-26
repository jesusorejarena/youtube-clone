import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

import { Users } from './users.model.js';

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
		popularity: { type: DataTypes.INTEGER, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);

Users.hasMany(Videos, { foreignKey: 'id_user' });
Videos.belongsTo(Users, { foreignKey: 'id_user' });

export default Videos;
