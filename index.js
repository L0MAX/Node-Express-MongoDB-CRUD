import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log("Error: ", err);
});

// Import routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Z3l00cuGHj4AkAaD ankahdonatus