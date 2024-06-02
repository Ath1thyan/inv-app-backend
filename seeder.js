const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./database");
const productModel = require("./models/productModel");
const products = require("./utils/data");
//config
dotenv.config();
connectDb();

//function seeder
const importData = async () => {
  try {
    await productModel.deleteMany({}); //clear the database before importing data
    const itemsData = await productModel.insertMany(products);
    console.log("All Items Added");
  } catch (error) {
    console.log(`${error}`);
  }
};

importData();
