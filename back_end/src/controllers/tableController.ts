import { Request, Response } from "express";
import * as tableService from "../services/tableService.js"

export async function newTable(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await tableService.newTable(userId, name);

    res.sendStatus(201);
}