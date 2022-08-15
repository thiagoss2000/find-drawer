import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/authRepository.js";
import dotenv from "dotenv";
dotenv.config();

export async function signUp(userData: authRepository.userData){
  const { user_name, password } = userData;

  const user = await authRepository.searchUser(user_name);
  if(user) throw {status: 409, message: "user exists"};
  
  const hashPassword = bcrypt.hashSync(password,10);
  await authRepository.createUser({ user_name, password: hashPassword })  
}

export async function signIn(userData: authRepository.userData){

  const verifyUser = await authRepository.searchUser(userData.user_name);
  
  if(!verifyUser || !bcrypt.compareSync(userData.password, verifyUser.password))
    throw {status: 401, message: "invalid data"};      
    
  const data = { id: verifyUser.id }
  const config = { expiresIn: "1d" };
  const token = jwt.sign(data ,process.env.ENCRYPTPASSWORD, config);

  await authRepository.insertToken(verifyUser.id, token);

  return token;
}