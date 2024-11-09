const {Router} = require("express");
const {homeShow} = require("../controller/home.controller.js");
const {blogShow} = require("../controller/blog.controller.js");
const {aboutShow} = require("../controller/about.controller.js");
const {shopShow} = require("../controller/shop.controller.js");
const {
  singleProductShow,
} = require("../controller/singleProduct.controller.js");
const {cartShow, addToCart} = require("../controller/cart.controller.js");
const {contactShow} = require("../controller/contact.controller.js");
const {
  checkoutShow,
  submitPayment,
} = require("../controller/payment.controller.js");
const {
  getUserProfile,
  login,
  register,
} = require("../controller/profile.controller.js");
const {isLoggedIn} = require("../middleware/auth.middleware.js");
const path = require("path");
const router = Router();

router.get("/home", isLoggedIn, homeShow);
router.get("/blog", isLoggedIn, blogShow);
router.get("/about", isLoggedIn, aboutShow); //The router.get listens for that request.
router.get("/shop", isLoggedIn, shopShow);
router.get("/singleProduct", isLoggedIn, singleProductShow);
router.get("/cart", isLoggedIn, cartShow);
router.post("/toCart", isLoggedIn, addToCart);
router.get("/contact", isLoggedIn, contactShow);
router.get("/checkout", isLoggedIn, checkoutShow);
router.post("/checkout", isLoggedIn, submitPayment);
router.get("/profile", isLoggedIn, getUserProfile);

router.get("/data", isLoggedIn, (req, res) => {
  console.log("reached");
  return res.sendFile(path.join(__dirname, "../views/simpleview.html"));
});
router.post("/data", isLoggedIn, (req, res) => {
  console.log(req.body);
  const data = req.body;
  console.log(data);
  return res.status(200).json({msg: data});
});

router.get("/register", async (req, res) => {
  res.render("registration");
});
router.post("/register", register);

router.get("/login", async (req, res) => {
  res.render("login");
});
router.post("/login", login);

module.exports = router;
