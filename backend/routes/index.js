const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');
const userProfileRoute = require('./userProfile-Route');
const jobRoute = require('./job-Route');
const paymentRoute = require ('./payment-Route');

router.use('/user', authRoute);
router.use('/profile', userProfileRoute);
router.use('/job', jobRoute);
router.use('/payment',paymentRoute);


module.exports = router;
