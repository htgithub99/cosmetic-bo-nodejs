const jwt = require("jsonwebtoken");

const verifyAuth = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) return res.status(401).send({
    message: "Access Denied"
  });
  try {
    const verify = jwt.verify(token, "skjhfdjsdhfkkjwer");
    req.user = verify;
    next();
  } catch (error) {
    res.status(400).send({
      message: "Invalid Token"
    });
  }
};

module.exports = verifyAuth;
