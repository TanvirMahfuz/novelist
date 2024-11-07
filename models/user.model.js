const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: [
      {
        productId: {type: mongoose.Schema.Types.ObjectId, ref: "Products"},
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {timestamps: true}
);
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});
userSchema.methods.comparePassword = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
userSchema.methods.addToCart = async function (productId, quantity) {
  this.cart.push({productId, quantity});
};
userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
