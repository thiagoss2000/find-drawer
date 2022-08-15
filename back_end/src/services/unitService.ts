import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newUnit(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createUnit(typeData);
}

export async function searchUnit(user_id: number){
    const data = organizerRepository.findUnit(user_id);
    return data;
}