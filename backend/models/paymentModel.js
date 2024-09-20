const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Reference to User model
    },
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Create a Payment model
  const Payment = mongoose.model('Payment', paymentSchema);
  
  module.exports = Payment;