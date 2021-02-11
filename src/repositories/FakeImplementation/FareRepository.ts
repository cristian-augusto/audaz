import { v4 } from 'uuid';

import Fare from "../../models/Fare";
import IFareRepository from "../IFareRepository";

class FareRepositoy implements IFareRepository{
  private fares: Fare[] = [];
  async findByOperator(operatorId: string): Promise<Fare[]> {
    const fares = this.fares.filter(fare => fare.operatorId === operatorId);

    return fares;
  }

  async create(fareDTO: Omit<Fare, "id">): Promise<Fare> {

    const fare: Fare = {...fareDTO, id: v4() };
    
    this.fares.push(fare);

    return fare;

  }

};


export default FareRepositoy;