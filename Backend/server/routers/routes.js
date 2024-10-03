
const express = require("express");
const controller = require("../controller/ProductController");
const upload = require("../middleware/FileUplod");

const route = express.Router();

// Post api  
route.post("/api/product/new", upload.single("image"), controller.PostProduct);

//Summer get api
route.get("/api/product/summer", (req, res) => {
  controller.APIcontroler(req, res, "summer");
});

//Food get api
route.get("/api/product/food", (req, res) => {
  controller.APIcontroler(req, res, "food");
});

//popular get api
route.get("/api/product/popular", (req, res) => {
  controller.APIcontroler(req, res, "popular");
});

//flash get api 
route.get("/api/product/flash", (req, res) => {
    controller.APIcontroler(req,res,'flash')
});

//cleaning get api
route.get("/api/product/cleaning", (req, res) => {
  controller.APIcontroler(req, res, "cleaning");
});

// personal care get api
route.get("/api/product/personal", (req, res) => {
  controller.APIcontroler(req, res, "personal");
});

//health get api
route.get("/api/product/health", (req, res) => {
  controller.APIcontroler(req, res, "health");
});

// baby get api
route.get("/api/product/baby", (req, res) => {
  controller.APIcontroler(req, res, "baby");
});

//kitchen get api
route.get("/api/product/kitchen", (req, res) => {
  controller.APIcontroler(req, res, "kitchen");
});

//stationery get api
route.get("/api/product/stationery", (req, res) => {
  controller.APIcontroler(req, res, "stationery");
});

//pet get api
route.get("/api/product/pet", (req, res) => {
  controller.APIcontroler(req, res, "pet");
});

// toys get api
route.get("/api/product/toys", (req, res) => {
  controller.APIcontroler(req, res, "toys");
});

//beauty get api
route.get("/api/product/beauty", (req, res) => {
  controller.APIcontroler(req, res, "beauty");
});
 
//fashion get api
route.get("/api/product/fashion", (req, res) => {
  controller.APIcontroler(req, res, "fashion");
});

//vehicle get api
route.get("/api/product/vehicle", (req, res) => {
  controller.APIcontroler(req, res, "vehicle");
});
module.exports=route