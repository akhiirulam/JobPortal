const express = require('express');
const router = express.Router();
const auth = require('./auth-Route')
const userRoutes = require('./user-Route')
const userProfile = require('./userProfile-Route');

router.use('/user',userRoutes);
router.use('/profile',userProfile)
router.use('/otp',auth)

module.exports = router;