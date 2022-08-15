import { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateSchema (schema: Schema){
    
  return async function(req: Request, res: Response, next: NextFunction){

    const { error } = schema.validate(req.body, { abortEarly: false });
    console.log(error) 
    
    if (error) return res.status(422).send(error.details.map(({message}) => message))
    next();
   
  }
}