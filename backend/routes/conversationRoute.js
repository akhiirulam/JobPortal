const express = require('express');
const router = express.Router();
const { startConversation, getConversations } = require('../controllers/conversationController');

router.post('/', startConversation);  
router.get('/:userId', getConversations);  

module.exports = router;
