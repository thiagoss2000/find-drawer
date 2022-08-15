import { Request, Response } from "express";
import * as groupService from "../services/groupService.js"

export async function newGroup(req: Request, res: Response) {
    const {name} = req.body;
    const userId = res.locals.user.id;
    
    await groupService.newGroup(userId, name);

    res.sendStatus(201);
}