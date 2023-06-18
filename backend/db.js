
// db.js

const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database Successfully Connected");
  } catch (error) {
    console.error("Error Connecting to the Database:", error);
  }
};

module.exports = connectToMongo;


