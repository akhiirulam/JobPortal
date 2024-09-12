const express = require('express');
const router = express.Router();
const { sendMessage, markMessageAsRead } = require('../controllers/messageController');

router.post('/', sendMessage); 
router.post('/read', markMessageAsRead);  

module.exports = router;
