const Joi = require("@hapi/joi");

//VALIDATE AUTH
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

//VALIDATE PRODUCT
const productVal = (data) => {
  const schema = Joi.object({
    product_name: Joi.string().required(),
    image: Joi.string(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    product_type: Joi.string().required(),
    branch: Joi.string().required(),
    entry_price: Joi.number().required(),
    contributor_price: Joi.number().required(),
  });
  return schema.validate(data);
};

module.exports = {
  registerVal,
  loginVal,
  productVal,
};
