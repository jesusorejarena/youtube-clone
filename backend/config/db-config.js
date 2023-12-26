import config from './config-env.js';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(config.db_schema, config.db_user, config.db_password, {
	host: config.db_host,
	dialect: 'postgres',
});
