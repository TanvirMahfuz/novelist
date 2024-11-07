const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/api.js");
const cookieParser = require("cookie-parser");
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Novelist")
  .then(() => {
    app.listen(3000, () => {
      console.log("server strated on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
