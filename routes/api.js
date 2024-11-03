const {Router} = require("express");
const {homeShow} = require("../controller/home.controller.js");
const {blogShow} = require("../controller/blog.controller.js");
const {aboutShow} = require("../controller/about.controller.js");
const {shopShow} = require("../controller/shop.controller.js");
const {
  singleProductShow,
} = require("../controller/singleProduct.controller.js");
const {cartShow} = require("../controller/cart.controller.js");
const {contactShow} = require("../controller/contact.controller.js");
const {
  checkoutShow,
  submitPayment,
} = require("../controller/payment.controller.js"); // This is a CommonJS require statement. It imports the module located at '../controller/payment.controller.js'
const {
  getUserProfile,
  login,
  register,
} = require("../controller/profile.controller.js");
const path = require("path");
const router = Router();
//router is an instance of the Express.js router, which allows you to define route handlers for specific HTTP requests (like GET, POST, etc.)
router.get("/home", homeShow); //is part of an Express.js routing mechanism, typically found in a Node.js web application
//homeShow is a callback function that will be executed when a GET request is made to /home
router.get("/blog", blogShow);
router.get("/about", aboutShow); //The router.get listens for that request.
router.get("/shop", shopShow);
router.get("/singleProduct", singleProductShow);
router.get("/cart", cartShow);
router.get("/contact", contactShow);
router.get("/checkout", checkoutShow);
router.post("/checkout", submitPayment);
router.post("/profile", getUserProfile);
//is an Express.js route handler that serves an HTML file when a GET request is made to the /data URL endpoint. Let’s break this down step by step:
router.get("/data", (req, res) => {
  console.log("reached");
  return res.sendFile(path.join(__dirname, "../views/simpleview.html"));
});
router.post("/data", (req, res) => {
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
