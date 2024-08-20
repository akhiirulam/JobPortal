const express = require('express');
const router = express.Router();
const auth = require('./auth-Route');
const userRoutes = require('./user-Route');
const userProfile = require('./userProfile-Route');
const job = require('./job-Route');

router.use('/user', userRoutes);
router.use('/profile', userProfile);
router.use('/otp', auth);
router.use('/job', job);

module.exports = router;
