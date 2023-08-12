const mongoose = require("mongoose");
require("dotenv").config();
const MONGOURL = process.env.MONGO_URL;

const mongoDB = async () => {
  try {
    await mongoose.connect(MONGOURL, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
    const FoodItem = mongoose.model("FoodItem", {}, "food_items");
    const FoodCategory = mongoose.model("FoodCategory", {}, "food_category");
    global.data = await FoodItem.find({});
    global.catData = await FoodCategory.find({});
    // console.log("data:",catData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
