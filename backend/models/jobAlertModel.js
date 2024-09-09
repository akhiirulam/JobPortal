const mongoose = require('mongoose');

const jobAlertSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId, // Ref to the job
    ref: 'Job',
    required: true,
  },
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const JobAlert = mongoose.model('JobAlert', jobAlertSchema);
module.exports = JobAlert;
