import mongoose from "mongoose";
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/midtermDB";
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
