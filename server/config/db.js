const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI).then(console.log("Connect To DB"));
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
