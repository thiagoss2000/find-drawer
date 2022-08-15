import { Request, Response } from "express";
import * as subclassService from "../services/subclassService.js"

export async function newSubclass(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await subclassService.newSubclass(userId, name);

    res.sendStatus(201);
}