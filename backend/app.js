import express from 'express';
// import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';

// Configurar dotenv
dotenv.config();

// Config
const app = express();
const server = http.createServer(app);

// Default middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());

// Proprietary Routes
import authRouter from './routes/auth.routes.js';
import videoRouter from './routes/video.routes.js';
import commentRouter from './routes/comment.routes.js';
import historyRouter from './routes/history.routes.js';
import likesRouter from './routes/like.routes.js';

app.get('/api', (req, res) => res.send('Hello World!'));
app.use('/api/auth', authRouter);
app.use('/api/video', videoRouter);
app.use('/api/comments', commentRouter);
app.use('/api/history', historyRouter);
app.use('/api/likes', likesRouter);

// catch 404 and forward to error handler
/* app.use((req, res, next) => {
	let err = new Error('The requested route does not exist, or the call method is invalid.');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.status(err.status).json({ message: err.message });
}); */

export default server;
