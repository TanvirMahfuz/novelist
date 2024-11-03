const path = require("path");
const {
  getProductById,
  getFeaturedProducts,
} = require("../service/product.service.js");
const singleProductShow = async (req, res) => {
  const id = req.query.id;
  const product = await getProductById(id);
  const featuredProducts = await getFeaturedProducts();
  console.log(product);
  return res.render("singleProduct", {
    product: product,
    featuredProducts: featuredProducts,
  });
};
module.exports = {singleProductShow};
