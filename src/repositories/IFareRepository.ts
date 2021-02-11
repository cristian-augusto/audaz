import Fare from "../models/Fare";

export default interface IFareRepository{

  findByOperator(operatorId: string): Promise<Fare[]>;

  create(fareDTO: Omit<Fare, 'id'>): Promise<Fare>;

}