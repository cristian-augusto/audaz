import { Request, Response } from "express";
import { container } from "tsyringe";

import AppError from "../models/AppError";
import CreateOperatorService from "../services/CreateOperatorService";

class OperatorController{


  async create(request: Request, response: Response): Promise<Response>{

    const {operatorCode} = request.body;

    if(!operatorCode) throw new AppError('Missing required values.', 400);

    const operatorService = container.resolve(CreateOperatorService);

    const operator = await operatorService.execute(operatorCode);

    return response.json(operator);

  }

}


export default OperatorController;