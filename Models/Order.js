const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: Number,
  productModel: String,
  price: String,
  quantity: Number,
  subTotal: String
});

const orderSchema = new mongoose.Schema({
  orderId: Number,

  customerName: String,
  shippingAddress: String,

  items: [orderItemSchema],   

  totalAmount: String,

  orderStatus: {
    type: String,
    default: 'Pending'
  },

  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
