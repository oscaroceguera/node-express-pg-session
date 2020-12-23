/** @format */

import express from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes';

const app = express();

app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

export default app;
