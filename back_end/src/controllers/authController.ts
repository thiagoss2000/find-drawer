import { Request, Response } from "express";
import * as authService from "../services/authService.js"

export async function signUp(req: Request, res: Response) {
  const { user_name, password } = req.body;  
  
  await authService.signUp({ user_name, password});

  res.status(201).send({message: "User created successfully"});   
}

export async function signIn (req: Request, res: Response){
  const { user_name, password } = req.body;

  const token = await authService.signIn({ user_name, password })

  res.status(200).send({ message: "Login successful", token, user_name });    
}