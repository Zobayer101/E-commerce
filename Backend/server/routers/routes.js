
const express = require("express");
const controller = require("../controller/ProductController");
const upload = require("../middleware/FileUplod");

const route = express.Router();

// Post api  
route.post("/api/product/new", upload.single("image"), controller.PostProduct);

//Summer get api
route.get("/api/product/summer",controller.SummerConnction);

module.exports=route