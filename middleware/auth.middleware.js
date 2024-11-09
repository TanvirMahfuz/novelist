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
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({msg: "Unauthorized"});
    }
    req.user = user;
    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      return res.redirect("/api/login");
    }
    throw error;
  }
};
module.exports = {isLoggedIn};
