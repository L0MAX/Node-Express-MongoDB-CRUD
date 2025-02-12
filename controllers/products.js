import express from "express";
import Product from "../models/product.model.js";

// Get all products
export const getProducts = (req, res) => {
  Product.find().then((products) => {
    res.send(products);
  }).catch((err) => {
    res.status(500).send(err);
  });
};

// Create a new product
export const createProduct = async(req, res) => {
  const { name, description, price, image } = req.body;
  const product = new Product({ name, description, price, image });
  product.save().then((product) => {
    res.send(product);
  }).catch((err) => {
    res.status(500).send(err);
  });
};

// Get a product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;
  Product.findById(id).then((product) => {
    res.send(product);
  }).catch((err) => {
    res.status(500).send(err);
  });
};

// Update a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image } = req.body;
  Product.findByIdAndUpdate(id, { name, description, price, image }, { new: true }).then((product) => {
    res.send(product);
  }).catch((err) => {
    res.status(500).send(err);
  });
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id).then(() => {
    res.send("Product deleted successfully");
  }).catch((err) => {
    res.status(500).send(err);
  });
};