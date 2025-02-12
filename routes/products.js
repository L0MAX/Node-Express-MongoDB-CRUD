import express from "express";
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from "../controllers/products.js";

// Create a new router
const router = express.Router();

// Define the routes
// Get all products route
router.get("/", getProducts);

// Create a new product route
router.post("/", createProduct);

// Get a product by ID route
router.get("/:id", getProductById);

// Update a product route
router.put("/:id", updateProduct);

// Delete a product route
router.delete("/:id", deleteProduct);

// Export the router
export default router;
