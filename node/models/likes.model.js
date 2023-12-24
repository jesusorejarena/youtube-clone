import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

import { Users } from './users.model.js';
import { Videos } from './videos.model.js';

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

Users.hasMany(Likes, { foreignKey: 'id_user' });
Likes.belongsTo(Users, { foreignKey: 'id_user' });

Videos.hasMany(Likes, { foreignKey: 'id_video' });
Likes.belongsTo(Videos, { foreignKey: 'id_video' });

export default Likes;
