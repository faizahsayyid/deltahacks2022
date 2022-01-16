const Joi = require("joi");

//Validation Rules for new user registration
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    username: Joi.string().min(6).max(16).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    //match: Joi.string().regex(/^[0-9+]{7}-[0-9+]{1}$/).required()
  });

  return schema.validate(data);
};

//Validation Rules for existing user
const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(6).max(16).required(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};
