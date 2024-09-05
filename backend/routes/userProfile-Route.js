const express = require('express');
const router = express.Router();

const userProfile = require('../controllers/userProfileController')

//USER PROFILE VIEW

router.post('/addProfile', userProfile.addProfile)
router.get('/viewProfile',userProfile.viewUserProfile);
router.post('/editProfile',userProfile.editProfile);

module.exports = router;