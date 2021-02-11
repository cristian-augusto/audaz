import { v4 } from 'uuid';


import Operator from "../../models/Operator";
import IOperatorRepository from "../IOperatorRepository";

class OperatorRepository implements IOperatorRepository{
  private operators: Operator[] = [];
  async create(operatorDTO: Omit<Operator, "id">): Promise<Operator> {
    
    const createdOperator: Operator = {...operatorDTO, id: v4() };

    this.operators.push(createdOperator);

    return createdOperator;
  }

  async findByCode(code: string): Promise<Operator | undefined> {

    console.log(this.operators);
    const operator = this.operators.find(operator => operator.code === code);

    return operator;
  }
}


export default OperatorRepository;