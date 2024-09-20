const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');        // For authentication (login/signup)
const userProfileRoute = require('./userProfile-Route');  // For user profiles
const jobRoute = require('./job-Route');          // For job-related operations
const paymentRoute = require('./payment-Route');  // For payment-related operations
const conversation = require('./conversation-Route')
const adminRoute = require('./admin-Route');

// Use the correct route paths
router.use('/profile', authRoute);      // Authentication routes (login, signup)
router.use('/user', userProfileRoute);    // User profile-related routes
router.use('/job', jobRoute);             // Job-related routes
router.use('/payment', paymentRoute);     // Payment-related routes
router.use('/meeting',conversation);
router.use('/admin',adminRoute);
router.use('/message',conversation);

module.exports = router;

