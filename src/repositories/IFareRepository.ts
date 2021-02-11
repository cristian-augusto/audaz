import Fare from "../models/Fare";

export default interface IFareRepository{

  findByOperator(operatorId: string): Promise<Fare | undefined>;

  create(fareDTO: Omit<Fare, 'id'>): Promise<Fare>;

}