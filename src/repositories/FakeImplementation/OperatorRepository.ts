import Operator from "../../models/Operator";
import IOperatorRepository from "../IOperatorRepository";

class OperatorRepository implements IOperatorRepository{

  private operators: Operator[] = [];
  async findBYCode(code: string): Promise<Operator | undefined> {
    const operator = this.operators.find(operator => operator.code === code);

    return operator;
  }
}


export default OperatorRepository;