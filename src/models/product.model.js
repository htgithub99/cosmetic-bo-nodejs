const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name_product: { type: String, require: true },
  price: { type: Number, require: true },
  type: { type: String, require: true },
  total: { type: Number, require: true },
  image: { type: String },
});

module.exports = mongoose.model("Product", Product);
