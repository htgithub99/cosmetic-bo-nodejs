const Joi = require("@hapi/joi");

const registerVal = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(50),
    email: Joi.string().required().email().max(50),
    password: Joi.string().required().min(10).max(11),
  });
  return schema.validate(data);
};

const loginVal = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email().max(50),
    password: Joi.string().required().min(10).max(11),
  });
  return schema.validate(data);
};

module.exports = {
  registerVal,
  loginVal,
};
