const {
  getUserById,
  getUserByEmail,
  createNewUser,
} = require("../service/user.service.js");

const getUserProfile = async (req, res) => {
  const id = req.query.id;
  console.log(id)
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({msg: "user not found"});
  }
  return res.render("profile", {user: user});
};
const login = async (req, res) => {
  const data = req.body;
  console.log(data);
  return res.status(200).json({msg: "ok"});
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
  console.log(user);
  return res.status(200).json({msg: "ok"});
};

module.exports = {getUserProfile, login, register};
