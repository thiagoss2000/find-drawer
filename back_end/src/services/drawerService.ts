import * as drawersRepository from "../repositories/drawerRepository.js";

export async function newDrawer(data: drawersRepository.drawerData){
    drawersRepository.createDrawer(data);
}

export async function searchDrawer(user_id: number){
    const data = drawersRepository.findDrawer(user_id);
    return data;
}

export async function updateDrawer(id:number, user_id: number, data: drawersRepository.editDrawer){
    drawersRepository.updateDrawer({id, user_id}, data);
}

export async function searchDrawerGroup(group_id:number, user_id: number){
    const data = drawersRepository.findDrawerGroup({group_id, user_id});
    return data;
}

export async function searchDrawerTable(table_id:number, user_id: number){
    const data = drawersRepository.findDrawerTable({table_id, user_id});
    return data;
}