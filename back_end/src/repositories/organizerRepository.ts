import prisma from "../db/db.js";

export interface organizerData {
    user_id: number;
    name: string;
}

export async function createType(typeData: organizerData) {
    await prisma.types.create({data: typeData});
}

export async function createGroup(groupData: organizerData) {
    await prisma.groups.create({data: groupData});
}

export async function createUnit(unitData: organizerData) {
    await prisma.units.create({data: unitData});
}

export async function createClass(classData: organizerData) {
    await prisma.classes.create({data: classData});
}

export async function createSubclass(subclassData: organizerData) {
    await prisma.subclasses.create({data: subclassData});
}

export async function createTable(tableData: organizerData) {
    await prisma.tables.create({data: tableData});
}

export async function findTable(user_id: number) {
    return await prisma.tables.findMany({where:{user_id}});
}
export async function findUnit(user_id: number) {
    return await prisma.units.findMany({where:{user_id}});
}
export async function findGroup(user_id: number) {
    return await prisma.groups.findMany({where:{user_id}});
}
export async function findClass(user_id: number) {
    return await prisma.classes.findMany({where:{user_id}});
}
export async function findSubclass(user_id: number) {
    return await prisma.subclasses.findMany({where:{user_id}});
}
export async function findType(user_id: number) {
    return await prisma.types.findMany({where:{user_id}});
}