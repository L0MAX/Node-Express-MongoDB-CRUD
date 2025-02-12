import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
},
  { timestamps: true },
);

// Create a model from the schema
const Product = mongoose.model("Product", productSchema);

// Export the model
export default Product;