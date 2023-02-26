const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { registerVal, loginVal } = require("../constant/validate");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const { error } = registerVal(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).send("Email already exists!");
  const salt = await bcrypt.genSalt(11);
  const passwordHash = await bcrypt.hash(password, salt);
  const user = new User({
    name,
    email,
    password: passwordHash,
  });
  try {
    await user.save();
    res.send({
      data: {
        message: "Register success!",
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginVal(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).send({
      data: {
        message: "Email not found!",
      },
    });
  const passwordVali = await bcrypt.compare(password, user.password);
  if (!passwordVali)
    return res.status(400).send({
      data: {
        message: "Invalid password",
      },
    });
  const token = jwt.sign({ _id: user._id }, "skjhfdjsdhfkkjwer");
  res.header("auth-token", token).send({
    data: {
      message: "Login success",
      token,
    },
  });
};
