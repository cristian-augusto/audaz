import {Router} from 'express';
import FareController from './controllers/FareController';

const appRoutes = Router();

const fareController = new FareController();

appRoutes.post('/fare', fareController.create);

export default appRoutes;