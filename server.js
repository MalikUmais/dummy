const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./db');
const Product = require('./Models/Product');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/product', async (req, res) => {
  const products = await Product.find();
  res.json(products);
  console.log(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
