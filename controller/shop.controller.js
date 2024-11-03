const path = require("path");
const {getAllProducts} = require("../service/product.service.js");
const shopShow = async (req, res) => {
  const products = await getAllProducts();
  return res.render("shop", {
    products: products,
  });
};
module.exports = {shopShow};
