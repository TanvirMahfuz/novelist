const {
  getUserById,
  getUserByEmail,
  createNewUser,
  addToUserCart,
} = require("../service/user.service.js");
const jwt = require("jsonwebtoken");
const getUserProfile = async (req, res) => {
  const id = req.user.id;
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({msg: "user not found"});
  }
  return res.render("profile", {user: user});
};
const login = async (req, res) => {
  console.log(req.body);
  const {email, password} = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(404).json({msg: "user not found"});
  }
  if (!user.comparePassword(password)) {
    return res.status(401).json({msg: "invalid credentials"});
  }
  const token = jwt.sign({id: user.id}, "the secret lies in the open");
  console.log(user);

  return res.status(200).cookie("token", token).json({msg: "ok"});
};
const register = async (req, res) => {
  const data = req.body;
  if (data.password != data.conpassword) {
    return res.status(400).json({msg: "bad request"});
  }

  const preUser = await getUserByEmail(data.email);
  if (preUser) {
    return res.status(409).send({msg: "email or username aleady exists"});
  }

  delete data.conpassword;

  const user = await createNewUser(data);
  if (!user) {
    return res.status(500).json({msg: "internal server error"});
  }
  const token = jwt.sign({id: user.id}, "the secret lies in the open");
  console.log(user);
  return res.status(200).cookie("token", token).json({msg: "ok"});
};

module.exports = {getUserProfile, login, register};
