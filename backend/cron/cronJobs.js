const cron = require('node-cron');
const Candidate = require('../models/candidateModel'); 

// Schedule a cleanup task to run daily at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    await Candidate.deleteMany({
      alertExpiresAt: { $lt: new Date() },
    });
    console.log('Expired alerts removed');
  } catch (error) {
    console.error('Error removing expired alerts:', error.message);
  }
});
