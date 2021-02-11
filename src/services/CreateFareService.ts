import {subMonths} from 'date-fns';

import Fare from "../models/Fare";
import IFareRepository from "../repositories/IFareRepository";
import IOperatorRepository from "../repositories/IOperatorRepository";

class CreateFareService{

  constructor(

    private operatorRepository: IOperatorRepository,

    private fareRepository: IFareRepository,

  ){}


  public async execute(operatorCode: string, fareValue: number): Promise<Fare>{

    const operator = await this.operatorRepository.findBYCode(operatorCode);

    if(!operator) throw new Error('Operator not found.');

    const fares = await this.fareRepository.findByOperator(operator.id);

    const validFare = fares.find(fare => fare.status === 1 && fare.createdAt <= subMonths(new Date(), 6));

    if(validFare) throw new Error('Cant register another fare.');

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