import Operator from "../models/Operator";

export default interface IOperatorRepository{


  findBYCode(code: string): Promise<Operator | undefined>;

}

