import express from 'express';
import 'dotenv/config';

import appRoutes from './routes';

const app = express();

app.use(express.json());

app.use('/api', appRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`API Running at port ${PORT}`));