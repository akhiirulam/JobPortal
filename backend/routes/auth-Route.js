const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuth = require('../middlewares/auth');
 // Relative path

router.post('/login', userController.login);
router.post('/otpGeneration',userController.otpGeneration)
router.post('/otpVerification',userController.otpVerification)
router.post('/candidate/signup',userController.signupCandidate)
router.post('/employer/signup',userController.signupEmployer)
router.post('/forgotPassword',isAuth,userController.forgotPassword)
router.post('/resetPassword',isAuth,userController.resetPassword)


module.exports = router;