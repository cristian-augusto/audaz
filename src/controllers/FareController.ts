import { Request, Response } from "express";

import CreateFareService from "../services/CreateFareService";

class FareController{


  async create(request: Request, response: Response): Promise<Response>{

    const {operatorCode, fareValue} = request.body;

    const createFare = new CreateFareService();

    const fare = await createFare.execute(operatorCode, fareValue);

    return response.json(fare);

  }

}


export default FareController;