// routes/employerRoutes.js
const express = require("express");
const { shortlistCandidate, getShortlistedCandidates } = require("../controllers/yourController");

const router = express.Router();

router.post("/shortlist", shortlistCandidate);
router.get("/shortlisted/:employerId", getShortlistedCandidates);

module.exports = router;
