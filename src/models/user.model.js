const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, max: 50 },
    email: { type: String, require: true, max: 50 },
    password: { type: String, require: true, max: 11 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
