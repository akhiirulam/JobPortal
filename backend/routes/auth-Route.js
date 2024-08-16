const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Relative path


router.post('/login', userController.login);
router.post('/otpGeneration',userController.otpGeneration)
router.post('/otpVerification',userController.otpVerification)

module.exports = router;