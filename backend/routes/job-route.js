const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const isAuth = require('../middlewares/auth');

router.post('/add',isAuth, jobController.addJobDetails);
router.put('/edit/:id',isAuth, jobController.editJobDetails);
router.delete('/delete/:id',isAuth, jobController.deleteJobDetails);

module.exports = router