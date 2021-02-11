import { Request, Response } from "express";
import { container } from "tsyringe";

import AppError from "../models/AppError";
import CreateFareService from "../services/CreateFareService";

class FareController{


  async create(request: Request, response: Response): Promise<Response>{

    const {operatorCode, fareValue} = request.body;

    if(!operatorCode || !fareValue) throw new AppError('Missing required values.', 400);

    const createFare = container.resolve(CreateFareService);

    const fare = await createFare.execute(operatorCode, fareValue);

    return response.json(fare);

  }

}


export default FareController;