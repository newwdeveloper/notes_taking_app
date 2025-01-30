import DB_URL from "./serverConfig.js";
import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("something went wrong while connecting mongoDB");
    console.log(error);
  }
}

export default connectDB;
