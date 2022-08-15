import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newGroup(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createGroup(typeData);
}

export async function searchGroup(user_id: number){
    const data = organizerRepository.findGroup(user_id);
    return data;
}