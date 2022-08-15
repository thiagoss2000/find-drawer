import { Request, Response } from "express";
import * as typeService from "../services/typeService.js"

export async function newType(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await typeService.newType(userId, name);

    res.sendStatus(201);
}