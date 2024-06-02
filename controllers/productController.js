const productModel = require("../models/productModel");

// Get all products

const getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

// Create A Product
const addProduct = async (req, res) => {
  try {
    const newProduct = await productModel.create({ ...req.body });
    // const newProduct = new productModel(req.body);
    if (!newProduct)
      return res.status(400).json({ msg: "Failed to create the product" });
    // await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

// Edit a product
const editProduct = async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const { itemId } = req.body;
    await productModel.findOneAndUpdate({ _id: itemId }, req.body, {
      new: true,
    });
    res.status(200).send("updated succedd");
  } catch (error) {
    console.log(err);
    res.status(400).send(err);
  }
};

// Delete Product

const deleteProduct = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await productModel.findOneAndDelete({ _id: itemId });
    res.status(200).json("item Deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
module.exports = { getProduct, addProduct, editProduct, deleteProduct };
