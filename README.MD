# CRUD API Tutorial with Node, Express, and MongoDB

This project is a tutorial on how to create a CRUD (Create, Read, Update, Delete) API using Node.js, Express, and MongoDB.

## Prerequisites

- Node.js installed
- MongoDB Atlas account or local MongoDB server
- npm (Node Package Manager)

## Getting Started

### Clone the repository

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## Install dependencies

```sh
npm install
```

### Set up environment variables

Create a `.env` file in the root of your project and add the following line:

```sh
MONGODB_URI=your_mongodb_uri
```

## Run the server

```sh
npm start
```

## Project Structure

```
.
├── models
│   └── product.model.js
├── routes
│   └── products.js
├── controllers
│   └── products.js
├── .env
├── index.js
├── package.json
└── README.md
```

## API Endpoints

### GET /api/products

### POST /api/products

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "image": "image_url"
}
```

### GET /api/products/:id

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "image": "image_url"
}
```

### Update a product by ID

### PUT /api/products/:id

```json
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 150,
  "image": "updated_image_url"
}
```

### DELETE /api/products/:id

Feel free to customize the content as needed.
Feel free to customize the content as needed.




