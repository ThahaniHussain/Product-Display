const express = require("express");
const app = express();
const PORT = 3000;

// ----- Product Data -----
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Chair", category: "Furniture", price: 4000, inStock: false },
  { id: 4, name: "Headphones", category: "Accessories", price: 2000, inStock: true },
  { id: 5, name: "Table", category: "Furniture", price: 7000, inStock: false }
];

// Middleware to serve static files
app.use(express.static("public"));

// ----- GET /products -----
app.get("/products", (req, res) => {
  res.json(products);
});

// ----- GET /products/categories -----
app.get("/products/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// ----- GET /products/instock -----
app.get("/products/instock", (req, res) => {
  const inStockProducts = products.filter(p => p.inStock === true);
  res.json(inStockProducts);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
