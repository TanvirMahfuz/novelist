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

module.exports = {getUserById, getUserByEmail, createNewUser};
