const auth = require("../controllers/auth.controller");
// const authMiddleware = require("../middlewares/auth.middleware");

module.exports = (app) => {
  const router = require("express").Router();
  router.post("/api/client-auth/login", auth.login);
  router.post("/api/client-auth/register", auth.register);
  app.use(router);
};
