const Product = require("../model/productModel");
const StatusCode = require("../helper/statusCode");

class productController {
  async createProduct(req, res) {
    try {
      const { name, description, price, category, inStock } = req.body;
      const data = new Product({
        name,
        description,
        price,
        category,
        inStock,
      });
      await data.save();
      return res.status(StatusCode.CREATED).json({
        success: true,
        message: "Product created successfully",
        data: data,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }

  async getAllProduct(req, res) {
    try {
      const data = await Product.find();
      return res.status(StatusCode.OK).json({
        success: true,
        message: "Get all product successfully",
        data: data,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }
  async getSingleProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await Product.findById(id);
      return res.status(StatusCode.OK).json({
        success: true,
        message: "Get single product successfully",
        data: data,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await Product.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(StatusCode.OK).json({
        success: true,
        message: "Product updated successfully",
        data: data,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      const data = await Product.findByIdAndDelete(id);
      return res.status(StatusCode.OK).json({
        success: true,
        message: "Product deleted successfully",
        data: data,
      });
    } catch (err) {
      return res.status(StatusCode.SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }
}

module.exports = new productController();
