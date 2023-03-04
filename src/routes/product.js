const product = require("../controllers/product.controller");
const verifyAuth = require("./verifyToken");

module.exports = (app) => {
  const router = require("express").Router();
  router.delete("/api/product/delete/:id", verifyAuth, product.destroyProduct);
  router.put("/api/product/update/:id", verifyAuth, product.updateProduct);
  router.get("/api/product/:id", verifyAuth, product.getByIdProduct);
  router.post("/api/product/create", verifyAuth, product.createProduct);
  router.get("/api/product", verifyAuth, product.getProduct);
  app.use(router);
};
