import config from './config-env.js';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
	config.db_schema, // db name,
	config.db_user, // username
	config.db_password, // password
	{
		// host: config.db_host,
		// host: 'localhost',
		host: 'host.docker.internal',
		dialect: 'postgres',
	}
);
