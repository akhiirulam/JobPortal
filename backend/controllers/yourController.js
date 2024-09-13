// controllers/yourController.js
const Employer = require("../models/employerModel");
const Candidate = require("../models/candidateModel");

const shortlistCandidate = async (req, res) => {
  const { employerId, candidateId } = req.body; // Assuming these come in the request body

  try {
    // Find the employer
    const employer = await Employer.findById(employerId);
    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    // Check if candidate is already shortlisted
    if (!employer.shortlistedCandidates.includes(candidateId)) {
      employer.shortlistedCandidates.push(candidateId);
      await employer.save();
    }

    return res.status(200).json({ message: "Candidate shortlisted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
};

const getShortlistedCandidates = async (req, res) => {
  const { employerId } = req.params;

  try {
    const employer = await Employer.findById(employerId).populate("shortlistedCandidates");

    if (!employer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    return res.status(200).json({ shortlistedCandidates: employer.shortlistedCandidates });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error });
  }
};

// Export the functions
module.exports = { shortlistCandidate, getShortlistedCandidates };
