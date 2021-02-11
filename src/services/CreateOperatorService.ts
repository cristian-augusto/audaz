import { inject, injectable } from "tsyringe";

import AppError from "../models/AppError";
import Operator from "../models/Operator";
import IOperatorRepository from "../repositories/IOperatorRepository";


@injectable()
class CreateOperatorService{

  constructor(
    @inject('OperatorRepository')
    private operatorRepository: IOperatorRepository,
  ){}

  public async execute(code: string): Promise<Operator> {

    
    let operator = await this.operatorRepository.findByCode(code);

    if(operator) throw new AppError('Operator already registered.', 400);

    operator = new Operator();

    operator.code = code;    
    
    const createdOperator = await this.operatorRepository.create(operator);

    return createdOperator;
  }

}

export default CreateOperatorService;