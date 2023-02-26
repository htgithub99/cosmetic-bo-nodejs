const mongoose = require("mongoose");

const connection = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/bo_cosmetic")
    .then(() => console.log("_______Connected succsess!"))
    .catch((error) => console.log("________error", error));
};

module.exports = connection;
