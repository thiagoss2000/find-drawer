import joi from "joi";

export const authSchema = joi.object({
  user_name: joi.string().required(),
  password: joi.string().required()
});