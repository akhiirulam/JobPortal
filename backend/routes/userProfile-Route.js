const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const userProfile = require('../controllers/userProfileController')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads',
      allowed_formats: ['pdf', 'doc', 'jpg', 'png'],
      resource_type: 'raw' // For PDFs
    },
});

const upload = multer({ storage: storage }).fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'resumePdf', maxCount: 1 },
    { name: 'portfolioImgs', maxCount: 5 }
]);

router.post('/addProfile',upload, userProfile.addProfile);

router.get('/viewProfile',userProfile.viewUserProfile);
router.post('/editProfile',userProfile.editProfile);

module.exports = router;