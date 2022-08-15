import { Request, Response } from "express";
import * as unitService from "../services/unitService.js";

export async function newUnit(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await unitService.newUnit(userId, name);

    res.sendStatus(201);
}