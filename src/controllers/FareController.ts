import { Request, Response } from "express";
import FareRepositoy from "../repositories/FakeImplementation/FareRepository";
import OperatorRepository from "../repositories/FakeImplementation/OperatorRepository";

import CreateFareService from "../services/CreateFareService";

class FareController{


  async create(request: Request, response: Response): Promise<Response>{

    const {operatorCode, fareValue} = request.body;

    const operatorRepository = new OperatorRepository();

    const fareRepository = new FareRepositoy();

    const createFare = new CreateFareService(operatorRepository, fareRepository);

    const fare = await createFare.execute(operatorCode, fareValue);

    return response.json(fare);

  }

}


export default FareController;