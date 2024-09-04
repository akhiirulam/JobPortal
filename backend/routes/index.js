const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');
const userProfileRoute = require('./userProfile-Route');
const jobRoute = require('./job-Route');

<<<<<<< HEAD
router.use('/user', authRoute);
router.use('/profile', userProfileRoute);
=======
router.use('/user',userProfileRoute );
router.use('/profile',authRoute);
>>>>>>> origin/doneByBasil
router.use('/job', jobRoute);


module.exports = router;
