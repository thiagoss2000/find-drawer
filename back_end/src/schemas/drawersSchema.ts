import joi from "joi";

export const createDrawerSchema = joi.object({
  code: joi.string().required(),
  name: joi.string().required(),
  type: joi.string().required(),
  unit: joi.string().required(),
  value: joi.string().allow(null, ''),
  cost: joi.string().allow(null, ''),
  class: joi.string().required(),
  subclass: joi.string().required(),
  group: joi.string().required(),
  manufacturer: joi.string().allow(null, ''),
  table: joi.string().required(),
  position: joi.string().allow(null, ''),
  document: joi.string().allow(null, ''),
  note: joi.string().allow(null, '')
});

export const updateDrawerSchema = joi.object({
  position: joi.string().allow(null, ''),
  document: joi.string().allow(null, ''),
  note: joi.string().allow(null, ''),
  qtd: joi.number()
});