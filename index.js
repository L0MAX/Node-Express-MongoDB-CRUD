import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World");
});

// import productRoutes from "./routes/products.js";
// Use the product routes
app.use("/api/products", productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.log("Error: ", err);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});