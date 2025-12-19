const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./db');
const Order = require('./Models/Order');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/order', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});
app.post('/order', async (req, res) => {
    try {
        const order = await Order.create({
            orderId: req.body.orderId,
            customerName: req.body.customerName,
            shippingAddress: req.body.shippingAddress,
            items: req.body.items,
            totalAmount: req.body.totalAmount
        })
        res.status(201).json(order);
    } catch (err) {
        console.err("Fail to post order: ", err)
    };
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = app;
