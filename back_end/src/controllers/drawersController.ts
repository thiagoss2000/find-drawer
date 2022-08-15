import { Request, Response } from "express";
import * as drawerService from "../services/drawerService.js"

export async function postData(req: Request, res: Response) {
    const {
        code,name,type,unit,value,cost,class: classes,
        subclass: subclasses,group,manufacturer,table,
        position,document,note
    } = req.body.name;
    const userId = res.locals.user.id;

    const data = {
        user_id: userId,
        code: code !== '' ? parseInt(code) : null,
        name: name,
        type_id: parseInt(type),
        unit_id: parseInt(unit),
        value: value,
        cost: cost !== '' ? parseInt(cost) : null,
        class_id: parseInt(classes),
        subclass_id: parseInt(subclasses),
        group_id: parseInt(group),
        manufacturer: manufacturer,
        table_id: parseInt(table),
        position: position,
        document: document,
        note: note,
    }
    await drawerService.newDrawer(data);

    console.log(req.body);
    console.log(group);

    res.sendStatus(201);
}

export async function searchDrawer(req: Request, res: Response) {
    const userId = res.locals.user.id;
    const data = await drawerService.searchDrawer(userId);

    res.send(data);
}

export async function searchFew(req: Request, res: Response) {
    const userId = res.locals.user.id;
    const data = await drawerService.searchDrawer(userId);

    const minAmount = 10;
    const fewItens = data.filter(e => e.qtd <= minAmount)

    res.send(fewItens);
}

export async function updateDrawer(req: Request, res: Response) {
    const userId = res.locals.user.id;
    const drawerId = req.query.id.toString();
    const data = req.body.data;
    
    await drawerService.updateDrawer(parseInt(drawerId), userId, data);

    res.sendStatus(200);
}