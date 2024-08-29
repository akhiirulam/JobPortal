const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const isAuth = require('../middlewares/auth');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads',
      allowed_formats: ['jpg', 'png'],
    },
  });

  const upload = multer({ storage: storage }).fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'photos', maxCount: 5 }  // Adjust maxCount as needed
]);

// Route to add job details
router.post('/add', upload, jobController.addJobDetails);

// Route to edit job details
router.put('/edit/:id', isAuth, jobController.editJobDetails);

// Route to delete job details
router.delete('/delete/:id', isAuth, jobController.deleteJobDetails);

//list all jobs 
router.get('/jobs', jobController.listJobs);

module.exports = router;
