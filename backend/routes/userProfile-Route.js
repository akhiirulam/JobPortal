const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const userProfile = require('../controllers/userProfileController')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const isAuth = require('../middlewares/auth');

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

router.put('/addProfile', isAuth, upload, userProfile.addProfile);

router.get('/viewProfile', isAuth, userProfile.viewUserProfile);
router.get('/candidate/:id', isAuth, userProfile.viewPersonProfile)
router.get('/employer/:id', isAuth, userProfile.viewCompanyProfile)
router.post('/editProfile', isAuth, userProfile.editProfile);
router.get('/filter-candidate', userProfile.filterCandidate);
router.get('/filter-employer', userProfile.filterEmployer);
router.post('/shortlist-job', isAuth, userProfile.shortlistJob);
router.get('/applied-jobs', isAuth, userProfile.viewAppliedJobs);
router.post('/follow-employer', isAuth, userProfile.followEmployer);
router.post('/unfollow-employer', isAuth, userProfile.unfollowEmployer);

module.exports = router;