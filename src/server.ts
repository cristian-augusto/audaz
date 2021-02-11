import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import 'dotenv/config';

import appRoutes from './routes';
import handleError from './middlewares/handleError';

import './config/Containers';

const app = express();

app.use(express.json());

app.use('/api', appRoutes);

app.use(handleError);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API Running at port ${PORT}`));