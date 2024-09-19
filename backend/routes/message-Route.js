const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const isAuth = require('../middlewares/auth');

router.post('/send', isAuth, messageController.sendMessage);

router.get('/:receiverId', isAuth, messageController.getMessages);

router.patch('/markAsRead/:messageId', isAuth, messageController.markAsRead);

module.exports = router;
