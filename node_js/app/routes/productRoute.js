const express = require("express");

const Router = express.Router();
const productController = require("../controller/productController");

Router.post("/products", productController.createProduct);
Router.get("/products", productController.getAllProduct);
Router.get("/product/:id", productController.getSingleProduct);
Router.put("/products/:id", productController.updateProduct);
Router.delete("/products/:id", productController.deleteProduct);

module.exports = Router;
