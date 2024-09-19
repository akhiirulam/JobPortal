const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');        // For authentication (login/signup)
const userProfileRoute = require('./userProfile-Route');  // For user profiles
const jobRoute = require('./job-Route');          // For job-related operations
const paymentRoute = require('./payment-Route');  // For payment-related operations
const messageRoute = require('./message-Route');  // For message-related operations

// Use the correct route paths
router.use('/profile', authRoute);           // Authentication routes (login, signup)
router.use('/user', userProfileRoute);    // User profile-related routes
router.use('/job', jobRoute);             // Job-related routes
router.use('/payment', paymentRoute);     // Payment-related routes
router.use('/message', messageRoute);     // Message-related routes

module.exports = router;
