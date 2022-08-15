import prisma from "../db/db.js";

export interface drawerData {
    user_id: number;
    code: number;
    name: string;
    type_id: number;
    unit_id: number;
    value: string;
    cost: number;
    class_id: number;
    subclass_id: number;
    group_id: number;
    manufacturer: string;
    table_id: number;
    position: string;
    document: string;
    note: string;
}

export async function createDrawer(drawerData: drawerData) {
    await prisma.drawers.create({data: drawerData});
}

export async function findDrawer(user_id: number) {
    return await prisma.drawers.findMany({
        where:{user_id}, include:{
            types: {select: {name: true}},
            units: {select: {name: true}},
            classes: {select: {name: true}},
            subclasses: {select: {name: true}},
            groups: {select: {name: true}},
            tables: {select: {name: true}},
        }
    });
}

export interface editDrawer {
    position: string;
    document: string;
    note: string;
    qtd: number
}
export interface authTable {
    user_id: number;
    id: number;
}

export async function updateDrawer(credential: authTable, editData: editDrawer) {
    await prisma.drawers.updateMany({where: credential, data: editData});
}

export interface authFindGroup {
    user_id: number;
    group_id: number;
}
export async function findDrawerGroup(credential: authFindGroup) {
    return await prisma.drawers.findMany({
        where: credential, include:{
            types: {select: {name: true}},
            units: {select: {name: true}},
            classes: {select: {name: true}},
            subclasses: {select: {name: true}},
            groups: {select: {name: true}},
            tables: {select: {name: true}},
        }
    });
}

export interface authFindTable {
    user_id: number;
    table_id: number;
}
export async function findDrawerTable(credential: authFindTable) {
    return await prisma.drawers.findMany({
        where: credential, include:{
            types: {select: {name: true}},
            units: {select: {name: true}},
            classes: {select: {name: true}},
            subclasses: {select: {name: true}},
            groups: {select: {name: true}},
            tables: {select: {name: true}},
        }
    });
}