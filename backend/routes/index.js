const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');
const userProfileRoute = require('./userProfile-Route');
const jobRoute = require('./job-Route');

router.use('/user',userProfileRoute );
router.use('/profile',authRoute);
router.use('/job', jobRoute);


module.exports = router;
