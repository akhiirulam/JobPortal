const Conversation = require('../models/conversation');
const Message = require('../models/messages');

// Start a new conversation
const startConversation = async (req, res) => {
  const { senderId, receiverId, message } = req.body;

  // Check if the conversation already exists
  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
        lastMessage: message,
        lastMessageTimestamp: new Date()
      });

      await conversation.save();
    }

    const newMessage = new Message({
      conversationId: conversation._id,
      senderId,
      receiverId,
      message,
      timestamp: new Date(),
      read: false
    });

    await newMessage.save();

    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all conversations for a user
const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({ participants: req.params.userId })
      .populate('participants', 'name');

    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { startConversation, getConversations };
