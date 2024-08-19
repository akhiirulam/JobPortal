const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login',userController.login);
router.post('/signup',userController.signup )

//Forgot password
router.post('/forgotPassword',userController.forgotPassword)
router.post('/resetPassword',userController.resetPassword)


module.exports = router;