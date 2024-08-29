const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const auth = require('./auth-Route');
const userRoutes = require('./user-Route');
const userProfile = require('./userProfile-Route');
const job = require('./job-Route');

router.use('/user', userRoutes);
router.use('/profile', userProfile);
router.use('/otp', auth);
router.use('/job', job);
=======
const authRoute = require('./auth-Route');
const userProfileRoute = require('./userProfile-Route');
const jobRoute = require('./job-Route');

router.use('/user', authRoute);
router.use('/profile', userProfileRoute);
router.use('/job', jobRoute);
>>>>>>> origin/doneByBasil

module.exports = router;
