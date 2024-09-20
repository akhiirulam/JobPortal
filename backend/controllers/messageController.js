const asyncHandler = require("express-async-handler");
const Message = require('../models/messageModel');
const Candidate = require('../models/candidateModel');
const Employer = require('../models/employerModel');

const messageController = {
    // Send message (between candidate and employer)
        sendMessage : asyncHandler(async (req, res) => {
        const { senderId, messageBody } = req.body;
    
        const receiverId = "45a4dadeqweq"; // Assuming this is a hardcoded receiver ID for now
        
        // Check if sender is an employer or candidate
        const employerData = await Employer.findById(senderId);
        let receiverType;
    
        if (employerData) {
            receiverType = 'Employer';
        } else {
            const candidateData = await Candidate.findById(senderId); // Check if sender is a candidate
            if (candidateData) {
                receiverType = 'Candidate';
            } else {
                return res.status(404).json({ message: 'Sender not found' }); // Handle case where sender is neither
            }
        }
    
        // Construct the message data
        const messageData = new Message({
            senderId,
            receiverId,
            messageBody,
            date: new Date(),
        });
    
        console.log(messageData);
        try {
            const savedMessage = await messageData.save();
            res.status(201).json({
                message: "Message sent successfully",
                data: savedMessage,
            });
        } catch (error) {
            console.error("Error saving message:", error);
            return res.status(500).json({ message: "Error saving message", error: error.message });
        }
    }),
    

    // Get all messages between candidate and employer
    getMessages: asyncHandler(async (req, res) => {
        const { receiverId } = req.params;
        const senderId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId, receiverId },
                { senderId: receiverId, receiverId: senderId },
            ],
        }).sort({ date: 1 });

        res.status(200).json({ messages });
    }),

    // Mark a message as read
    markAsRead: asyncHandler(async (req, res) => {
        const { messageId } = req.params;
        const message = await Message.findById(messageId);

        if (!message) {
            res.status(404);
            throw new Error('Message not found');
        }

        message.seen = true; 
        await message.save();

        res.status(200).json({ message: 'Message marked as read' });
    }),
}

module.exports = messageController;
