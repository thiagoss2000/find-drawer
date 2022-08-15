import { Request, Response } from "express";
import * as tableService from "../services/tableService.js"
import * as unitService from "../services/unitService.js"
import * as groupService from "../services/groupService.js"
import * as classService from "../services/classService.js"
import * as subclassService from "../services/subclassService.js"
import * as typeService from "../services/typeService.js"

export async function searchTable(req: Request, res: Response) {
    const userId = res.locals.user.id;
    
    res.send({
        type: await typeService.searchType(userId),
        unit: await unitService.searchUnit(userId),
        class: await classService.searchClass(userId),
        subclass: await subclassService.searchSubclass(userId),
        group: await groupService.searchGroup(userId),
        table: await tableService.searchTable(userId),
      });
}