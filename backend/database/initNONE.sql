CREATE DATABASE IF NOT EXISTS 'youtube-db';

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  created TIMESTAMP
);

CREATE TABLE IF NOT EXISTS videos (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  video VARCHAR(255) NOT NULL,
  popularity INTEGER NOT NULL,
  created TIMESTAMP,
  FOREIGN KEY (id_user) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  id_video INTEGER NOT NULL,
  comment VARCHAR(255) NOT NULL,
  created TIMESTAMP,
  FOREIGN KEY (id_user) REFERENCES users (id),
  FOREIGN KEY (id_video) REFERENCES videos (id)
);

CREATE TABLE IF NOT EXISTS likes (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  id_video INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  created TIMESTAMP,
  FOREIGN KEY (id_user) REFERENCES users (id),
  FOREIGN KEY (id_video) REFERENCES videos (id)
);

CREATE TABLE IF NOT EXISTS histories (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  id_video INTEGER NOT NULL,
  created TIMESTAMP,
  FOREIGN KEY (id_user) REFERENCES users (id),
  FOREIGN KEY (id_video) REFERENCES videos (id)
);
