const {get} = require("mongoose");
const Product = require("../models/product.model");

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};
const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const getFeaturedProducts = async () => {
  const products = await Product.find({category: "featured"});
  return products;
};

const getNewArrivalProducts = async () => {
  const products = await Product.find({category: "new arrival"});
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  getNewArrivalProducts,
};
