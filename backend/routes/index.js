const express = require('express');
const router = express.Router();

const authRoute = require('./auth-Route');        
const userProfileRoute = require('./userProfile-Route'); 
const jobRoute = require('./job-Route');         
const paymentRoute = require('./payment-Route'); 
const conversation = require('./conversation-Route')
const adminRoute = require('./admin-Route');
const messageRoute = require('./message-Route');  


router.use('/profile', authRoute);           
router.use('/user', userProfileRoute);    
router.use('/job', jobRoute);            
router.use('/payment', paymentRoute);    
router.use('/meeting',conversation);
router.use('/admin',adminRoute);
router.use('/message', messageRoute);    
     


module.exports = router;

