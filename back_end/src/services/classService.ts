import * as organizerRepository from "../repositories/organizerRepository.js";

export async function newClass(user_id: number, name: string){
    const typeData = {
        user_id,
        name
    };
    organizerRepository.createClass(typeData);
}

export async function searchClass(user_id: number){
    const data = organizerRepository.findClass(user_id);
    return data;
}