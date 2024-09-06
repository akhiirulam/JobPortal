const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuth = require('../middlewares/auth');
const passport = require('passport');
const generateToken = require('../utilis/generateToken');
const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

router.post('/login', userController.login);
router.post('/otpGeneration', userController.otpGeneration);
router.post('/otpVerification', userController.otpVerification);
router.post('/signup', userController.signup);
router.post('/forgotPassword', isAuth, userController.forgotPassword);
router.post('/resetPassword', isAuth, userController.resetPassword);

const JWT_SECRET = process.env.JWT_SECRET;

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
  (req, res) => {
   
    if (req.user) {
      const token = jwt.sign({ id: req.user.id, username: req.user.username }, JWT_SECRET, { expiresIn: '1h' });
      const email = req.user.email;
      res.redirect(`http://localhost:3000/loginSuccess?token=${token}&email=${email}`);
    } else {
      console.log("Authentication failed");
      res.redirect('http://localhost:3000/');
    }
  }
);

  
  // Login success
  router.get('/login/success', (req, res) => {
    if (req.user) {
      res.status(200).json({
        message: 'Successfully logged in',
        user: req.user,
      });
    } else {
      res.status(403).json({ message: 'Not Authorized' });
    }
  });
  
  // Login failure
  router.get('/login/failed', (req, res) => {
    res.status(401).json({ message: 'Login Failed' });
  });

// Logout
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.redirect('/');
  });
});

module.exports = router;
