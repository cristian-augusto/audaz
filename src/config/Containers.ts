import { container } from 'tsyringe';
import FareRepositoy from '../repositories/FakeImplementation/FareRepository';

import OperatorRepository from '../repositories/FakeImplementation/OperatorRepository';
import IFareRepository from '../repositories/IFareRepository';
import IOperatorRepository from '../repositories/IOperatorRepository';


container.registerSingleton<IOperatorRepository>('OperatorRepository', OperatorRepository);

container.registerSingleton<IFareRepository>('FareRepository', FareRepositoy);