import { inject, injectable } from 'tsyringe';
import {subMonths} from 'date-fns';

import AppError from '../models/AppError';
import Fare from "../models/Fare";
import IFareRepository from "../repositories/IFareRepository";
import IOperatorRepository from "../repositories/IOperatorRepository";

@injectable()
class CreateFareService{

  constructor(

    @inject('OperatorRepository')
    private operatorRepository: IOperatorRepository,

    @inject('FareRepository')
    private fareRepository: IFareRepository,

  ){}


  public async execute(operatorCode: string, fareValue: number): Promise<Fare>{

    console.log(operatorCode);

    const operator = await this.operatorRepository.findByCode(operatorCode);

    console.log(operator);

    if(!operator) throw new AppError('Operator not found.', 400);

    const fares = await this.fareRepository.findByOperator(operator.id);

    const validFare = fares.find(fare => fare.status === 1 && fare.value === fareValue && fare.createdAt >= subMonths(new Date(), 6));

    if(validFare) throw new AppError('Cant register another fare.', 400);

    const fare = new Fare();

    fare.operatorId  = operator.id;

    fare.value = fareValue;

    fare.createdAt = new Date();

    fare.status = 1;

    const createdFare = await this.fareRepository.create(fare);

    return createdFare;

  }

}

export default CreateFareService;