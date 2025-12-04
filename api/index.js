import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let mongUrl =
  "mongodb+srv://pujalahane2024:E8iaiZgVESaeoiu5@cluster0.ik7zs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("API server is running on http://localhost:3000");
});

export default app;
