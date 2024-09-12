const Message = require('../models/messages');

// Send a new message
const sendMessage = async (req, res) => {
  const { conversationId, senderId, receiverId, message } = req.body;

  try {
    const newMessage = new Message({
      conversationId,
      senderId,
      receiverId,
      message,
      timestamp: new Date(),
      read: false
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a message as read
const markMessageAsRead = async (req, res) => {
  try {
    await Message.findByIdAndUpdate(req.body.messageId, { read: true });
    res.status(200).json({ message: 'Message marked as read' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendMessage, markMessageAsRead };
