const express = require('express')
const router = express.Router();

const conversationController = require('../controllers/conversationController')

router.post('/scheduleMeeting',conversationController.scheduleMeeting);
router.get('/showMeeting',conversationController.showMeetings);
router.post('/rescheduleMeeting',conversationController.rescheduleMeeting);
router.delete('/removeMeeting/:id', conversationController.removeMeeting);


module.exports = router;