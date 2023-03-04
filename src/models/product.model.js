const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    product_name: { type: String, require: true },
    quantity: { type: Number, require: true },
    product_type: { type: String, require: true },
    price: { type: Number, require: true },
    entry_price: { type: Number, require: true },
    contributor_price: { type: Number, require: true },
    image: { type: String },
    branch: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
