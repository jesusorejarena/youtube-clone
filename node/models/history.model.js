/* import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

export const History = sequelize.define(
	'histories',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		id_user: { type: DataTypes.INTEGER, allowNull: false },
		id_video: { type: DataTypes.INTEGER, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
); */

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

import { Users } from './users.model.js';
import { Videos } from './videos.model.js';

const History = sequelize.define(
	'histories',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		id_user: { type: DataTypes.INTEGER, allowNull: false },
		id_video: { type: DataTypes.INTEGER, allowNull: false },
		created: { type: DataTypes.DATE, allowNull: true },
	},
	{
		timestamps: false,
	}
);

Users.hasMany(History, { foreignKey: 'id_user' });
History.belongsTo(Users, { foreignKey: 'id_user' });

Videos.hasMany(History, { foreignKey: 'id_video' });
History.belongsTo(Videos, { foreignKey: 'id_video' });

export default History;
