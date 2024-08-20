const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const isAuth = require('../middlewares/auth');


// Route to add job details
router.post('/add', jobController.addJobDetails);

// Route to edit job details
router.put('/edit/:id', isAuth, jobController.editJobDetails);

// Route to delete job details
router.delete('/delete/:id', isAuth, jobController.deleteJobDetails);

module.exports = router;
