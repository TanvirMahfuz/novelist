const path = require("path");
const {
  getFeaturedProducts,
  getNewArrivalProducts,
} = require("../service/product.service.js");
const homeShow = async (req, res) => {
  const featuredProducts = await getFeaturedProducts();
  const newArrival = await getNewArrivalProducts();
  return res.render("index", {
    featuredProducts: featuredProducts,
    newArrival: newArrival,
  });
};

module.exports = {homeShow};
