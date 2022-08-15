import { Request, Response } from "express";
import * as classService from "../services/classService.js"

export async function newClass(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await classService.newClass(userId, name);

    res.sendStatus(201);
}