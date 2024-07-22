// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: String, required: true },
    mobile: { type: String, required: true },
    items: [{
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
