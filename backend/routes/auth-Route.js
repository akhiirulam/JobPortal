const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuth = require('../middlewares/auth');
const passport = require('passport');
const generateToken = require('../utilis/generateToken');
const User = require('../models/userModel');

// Routes

router.post('/login', userController.login);
router.post('/otpGeneration', userController.otpGeneration);
router.post('/otpVerification', userController.otpVerification);
router.post('/signup', userController.signup);
router.post('/forgotPassword', isAuth, userController.forgotPassword);
router.post('/resetPassword', isAuth, userController.resetPassword);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
  })
);

// Register or login user to DB
router.get('/login/success', async (req, res) => {
  if (req.user) {
    try {
      let user = await User.findOne({ email: req.user._json.email });
      if (!user) {
        user = new User({
          name: req.user._json.name,
          email: req.user._json.email,
          password: Date.now(), // dummy password
        });
        await user.save();
      }
      generateToken(res, user._id);
      res.status(200).json({
        user: { ...req.user, isAdmin: user.isAdmin },
        message: 'Successfully logged in',
        _id: user._id,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(403).json({ message: 'Not Authorized' });
  }
});

// Login failed
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
