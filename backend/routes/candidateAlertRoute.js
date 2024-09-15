const express = require('express');
const { createCandidateAlert, getActiveCandidateAlerts } = require('../controllers/candidateAlertController'); // Adjust the path as necessary

const router = express.Router();

router.post('/create-alert', createCandidateAlert);

router.get('/active-alerts', getActiveCandidateAlerts);

module.exports = router;
