const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/add', jobController.addJobDetails);
router.put('/edit/:id', jobController.editJobDetails);
router.delete('/delete/:id', jobController.deleteJobDetails);

module.exports = router