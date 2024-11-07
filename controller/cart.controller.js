const path = require("path");
const {getProductById} = require("../service/product.service.js");
const {addToUserCart} = require("../service/user.service.js");
const User = require("../models/user.model.js");
const cartShow = async (req, res) => {
  const user = await User.findOne({_id: req.user.id});
  if (!user) {
    return res.status(404).json({msg: "user not found"});
  }
  const cart = await Promise.all(
    user.cart.map(async (item) => {
      return {
        product: await getProductById(item.productId),
        quantity: item.quantity,
      };
    })
  );

  console.log(cart);
  return res.render("cart", {cart});
};
const addToCart = async (req, res) => {
  const {productId, quantity} = req.body;
  const userId = req.user.id;
  const user = await addToUserCart(userId, productId, quantity);
  if (!user) {
    return res.status(500).json({msg: "internal server error"});
  }
  console.log(user);
  return res.status(200).json({msg: "ok"});
};
module.exports = {cartShow, addToCart};
