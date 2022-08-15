import prisma from "../db/db.js";

export interface userData {
    user_name: string;
    password: string;
}

export async function searchUser(user_name: string) {
    return await prisma.users.findUnique({where:{user_name}});
}

export async function createUser(userData: userData) {
    await prisma.users.create({data: userData});
}

export async function insertToken(user_id: number, token: string) {
    await prisma.sessions.updateMany({where:{user_id}, data:{deleted_at: new Date()}});
    await prisma.sessions.create({data: {user_id, token}});
}