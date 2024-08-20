const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const isAuth = require('../middlewares/auth');
const multer = require('multer');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename
    }
});

const upload = multer({ storage });

// Route to add job details
router.post('/add', upload.single('featuredImage'), jobController.addJobDetails);

// Route to edit job details
router.put('/edit/:id', isAuth, jobController.editJobDetails);

// Route to delete job details
router.delete('/delete/:id', isAuth, jobController.deleteJobDetails);

module.exports = router;
