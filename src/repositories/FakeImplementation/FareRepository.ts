import { uuid } from 'uuidv4';

import Fare from "../../models/Fare";
import IFareRepository from "../IFareRepository";

class FareRepositoy implements IFareRepository{
  private fares: Fare[] = [];
  async findByOperator(operatorId: string): Promise<Fare[]> {
    const fares = this.fares.filter(fare => fare.operatorId === operatorId);

    return fares;
  }

  async create(fareDTO: Pick<Fare, "operatorId" | "status" | "value">): Promise<Fare> {

    const fare: Fare = {...fareDTO, id: uuid() };
    
    this.fares.push(fare);

    return fare;

  }

};


export default FareRepositoy;