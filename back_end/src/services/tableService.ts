import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newTable(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createTable(typeData);
}

export async function searchTable(user_id: number){
    const data = organizerRepository.findTable(user_id);
    return data;
}
