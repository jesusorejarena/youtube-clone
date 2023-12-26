import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db-config.js';

import { Users } from './users.model.js';
import { Videos } from './videos.model.js';

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

Users.hasMany(Comments, { foreignKey: 'id_user' });
Comments.belongsTo(Users, { foreignKey: 'id_user' });

Videos.hasMany(Comments, { foreignKey: 'id_video' });
Comments.belongsTo(Videos, { foreignKey: 'id_video' });

export default Comments;
