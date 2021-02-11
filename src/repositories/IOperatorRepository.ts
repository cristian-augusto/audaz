import Operator from "../models/Operator";

export default interface IOperatorRepository{
  findByCode(code: string): Promise<Operator | undefined>;

  create(operatorDTO: Omit<Operator, 'id'>): Promise<Operator>;

}

