import dotenv from 'dotenv';

dotenv.config();

export default {
	port: process.env.PORT || '3000',
	db_host: process.env.DEV_DB_URL,
	db_user: process.env.DEV_DB_USER,
	db_password: process.env.DEV_DB_PASSWORD,
	db_schema: process.env.DEV_DB_SCHEMA,
};
