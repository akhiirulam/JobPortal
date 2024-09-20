const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController')

router.post('/checkout',paymentController.checkoutOrder)
router.get('/billing',paymentController.billing)
router.post('/order',paymentController.createOrder);
router.post('/verify',paymentController.verifyPayment);
router.post('/savePayment',paymentController.savePayment);


  

module.exports = router