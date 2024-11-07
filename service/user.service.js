const User = require("../models/user.model.js");

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    return null;
  }
  return user;
};
const getUserByEmail = async (email) => {
  const user = await User.findOne({email: email});
  if (!user) {
    return null;
  }
  return user;
};
const createNewUser = async (data) => {
  const user = await User.create(data);
  if (!user) {
    return null;
  }
  return user;
};

const addToUserCart = async (userId, productId, quantity = 1) => {
  const user = await User.findOneAndUpdate(
    {_id: userId, "cart.productId": productId},
    {$inc: {"cart.$.quantity": quantity}},
    {new: true}
  );
  if (!user) {
    return await User.findByIdAndUpdate(
      userId,
      {$push: {cart: {productId, quantity}}},
      {new: true}
    );
  }

  return user;
};

module.exports = {getUserById, getUserByEmail, createNewUser, addToUserCart};
