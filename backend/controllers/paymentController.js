const Razorpay = require('razorpay');
const express = require("express");
const asyncHandler = require("express-async-handler");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const paymentController = {

    createOrder: asyncHandler(async(req,res)=>{
        const { amount, currency, receipt } = req.body;
        console.log("here")
        try {
          const options = {
            amount: amount * 100, // Amount in paisa (multiply by 100 to convert to paisa)
            currency,
            receipt,
          };
      
          const order = await razorpay.orders.create(options);
          res.json(order);
          if(order)
          {
            console.log("Order Placed")
          }
        } catch (error) {
          console.error("Error creating Razorpay order:", error);
          res.status(500).send("Something went wrong.");
        }
    }),
    verifyPayment: asyncHandler(async(req,res) =>{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Verify the payment signature
        const crypto = require("crypto");
        const hmac = crypto.createHmac("sha256", RAZORPAY_KEY_SECRET);
      
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generated_signature = hmac.digest("hex");
      
        if (generated_signature === razorpay_signature) {
          res.json({ status: "success" });
        } else {
          res.status(400).json({ status: "failed" });
        }
    }),

  }
  module.exports = paymentController