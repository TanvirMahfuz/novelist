const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({msg: "Unauthorized"});
  }
  try {
    const decoded = await jwt.verify(token, "the secret lies in the open");
    console.log(decoded);
    const user = await User.findOne(decoded._id);
    if (!user) {
      return res.status(401).json({msg: "Unauthorized"});
    }
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(401).json({msg: "Unauthorized"});
  }
};
module.exports = {isLoggedIn};
