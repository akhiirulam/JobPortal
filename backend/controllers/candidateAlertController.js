const Candidate = require('../models/candidateModel'); 

const createCandidateAlert = async (req, res) => {
  try {
    const { candidateId } = req.body; 

   
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: 'Candidate not found',
      });
    }

    
    candidate.alertCreatedAt = new Date();
    candidate.alertExpiresAt = new Date();
    candidate.alertExpiresAt.setDate(candidate.alertExpiresAt.getDate() + 15);

   
    await candidate.save();

    res.status(200).json({
      success: true,
      candidate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating candidate alert',
      error: error.message,
    });
  }
};


const getActiveCandidateAlerts = async (req, res) => {
  try {
    const now = new Date();

    const activeAlerts = await Candidate.find({
      alertExpiresAt: { $gte: now },
    });

    res.status(200).json({
      success: true,
      candidates: activeAlerts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching active candidate alerts',
      error: error.message,
    });
  }
};

module.exports = { createCandidateAlert, getActiveCandidateAlerts };
