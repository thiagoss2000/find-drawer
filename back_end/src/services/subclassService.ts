import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newSubclass(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createSubclass(typeData);
}

export async function searchSubclass(user_id: number){
    const data = organizerRepository.findSubclass(user_id);
    return data;
}