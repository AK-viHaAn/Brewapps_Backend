const mongoose = require("mongoose");

const { DATABASE_URL } = process.env;

module.exports = async function db() {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(DATABASE_URL).then();
    console.log("MongoDB is Connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
