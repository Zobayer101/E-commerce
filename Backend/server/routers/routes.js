
const express = require("express");
const controller = require("../controller/ProductController");
const multer = require('multer');
const route = express.Router();

const upload = multer({ dest: "uplods/" });
// Post api  
route.post("/api/product/new",upload.single("image"),controller.PostProduct);

module.exports=route