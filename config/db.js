const mongoose = require("mongoose");

async function connectToMongoDB() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected successfully!");
}

module.exports = connectToMongoDB;