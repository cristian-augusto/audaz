import {Router} from 'express';
import FareController from './controllers/FareController';
import OperatorController from './controllers/OperatorController';

const appRoutes = Router();

const operatorController = new OperatorController();

const fareController = new FareController();

appRoutes.post('/operator', operatorController.create);

appRoutes.post('/fare', fareController.create);

export default appRoutes;