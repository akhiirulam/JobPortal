const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  employerId:{
    type:String,
    required: true
  },
  candidateId:{
    type:String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, // Assuming time is in a string format (e.g., "14:00")
    required: true
  },
  duration: {
    type: String, // You can use String or Number depending on your duration format
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isZoomMeeting: {
    type: Boolean,
    required: true
  }
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;