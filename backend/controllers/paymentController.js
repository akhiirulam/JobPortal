const Razorpay = require("razorpay");
const express = require("express");
const asyncHandler = require("express-async-handler");
const { CartItem } = require("../models/CartItem");
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const paymentController = {
  checkoutOrder: asyncHandler(async (req, res) => {
    const userId = req.cookies.userId;

    if (!userId) {
      return res.status(401).json({ error: "Please sign in and try again." });
    }

    const { cartItems, totalPrice } = req.body;

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: "Invalid cart items data." });
    }

    try {
      const { id: productId, name, price, quantity } = cartItems[0];

      // Check if the item exists in the user's cart based on userId and productId
      const existingItem = await CartItem.findOne({ userId });

      if (existingItem) {
        // Update the existing cart item by incrementing the quantity and updating name, price
        await CartItem.updateOne(
          { userId },
          {
            $set: { name, price, totalPrice },
          }
        );

        res.status(200).json({ message: "Cart updated successfully" });
      } else {
        // Create new cart item if it does not exist
        const data = {
          userId,
          productId,
          name,
          price,
          quantity,
          totalPrice,
        };

        await CartItem.create(data);

        res.status(200).json({ message: "New cart item created successfully" });
      }
    } catch (error) {
      console.error("Error updating in MongoDB:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }),

  billing: asyncHandler(async (req, res) => {
    const userId = req.cookies.userId;

    console.log("User ID:", userId);

    if (!userId) {
      return res.status(401).json({ error: "Please sign in and try again." });
    }

    try {
      // Fetch cart items from the database based on userId
      const cartItems = await CartItem.find({ userId });

      // If cart items are found
      if (cartItems.length === 0) {
        return res.status(404).json({ error: "No items found in cart." });
      }

      // Send cart items to the client
      res.status(200).json(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }),

  createOrder: asyncHandler(async (req, res) => {
    const { amount, currency, receipt } = req.body;
    console.log(amount, currency, receipt);

    try {
      const options = {
        amount: amount * 100, // Amount in paisa (multiply by 100)
        currency,
        receipt,
      };

      const order = await razorpay.orders.create(options);
      console.log("Order Created:", order);
      res.json(order);

      if (order) {
        console.log("Order Placed");
      }
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).send("Something went wrong.");
    }
  }),

  verifyPayment: asyncHandler(async (req, res) => {
    try {
     
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

      const secret = process.env.RAZORPAY_KEY_SECRET;
      if (!secret) {
    
        return res.status(500).json({ success: false, message: "Internal server error" });
      }
  
      const generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      if (generatedSignature === razorpay_signature) {
        return res.json({ success: true });
      } else {
        return res.json({ success: false });
      }
    } catch (error) {
      console.error("Error in verifyPayment function:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  }),
};
module.exports = paymentController;
