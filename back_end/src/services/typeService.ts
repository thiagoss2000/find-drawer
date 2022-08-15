import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newType(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createType(typeData);
}

export async function searchType(user_id: number){
    const data = organizerRepository.findType(user_id);
    return data;
}