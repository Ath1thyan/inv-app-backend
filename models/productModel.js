const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
  },
  { timeStamps: true }
);

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
