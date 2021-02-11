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

    const fare = new Fare();

    fare.operatorId  = operator.id;

    fare.value = fareValue;

    fare.status = 1;

    const createdFare = await this.fareRepository.create(fare);

    return createdFare;

  }

}

export default CreateFareService;