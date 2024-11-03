const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    brand: {
      type: String,

      trim: true,
    },
    name: {
      type: String,

      trim: true,
    },
    description: {
      type: String,

      trim: true,
    },
    price: {
      type: Number,

      trim: true,
    },
    image: {
      type: String,

      trim: true,
    },
    rating: {
      type: Number,
    },
    stock: {
      type: Number,

      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
