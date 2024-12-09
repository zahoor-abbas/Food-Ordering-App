import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const URL = process.env.Mongo_URL; // MongoDB connection string

export const connectDB = async () => {
  try {
    await mongoose.connect(URL); // Connect without deprecated options
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};
