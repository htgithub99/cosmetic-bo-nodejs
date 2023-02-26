const product = require("../controllers/product.controller");
const verifyAuth = require("./verifyToken");

module.exports = (app) => {
  const router = require("express").Router();
  router.get("/api/product", verifyAuth, product.getList);
  app.use(router);
};
