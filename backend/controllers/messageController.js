const asyncHandler = require("express-async-handler");
const Message = require('../models/messageModel');
const Candidate = require('../models/candidateModel');
const Employer = require('../models/employerModel');

const messageController = {
    // Send message (between candidate and employer)
    sendMessage: asyncHandler(async (req, res) => {
        const { receiverId, receiverType, messageBody } = req.body; 
        const senderId = req.user._id;
        const senderType = req.user.role === 'employer' ? 'Employer' : 'Candidate';

        let receiver;
        if (receiverType === 'Employer') {
            receiver = await Employer.findById(receiverId);
        } else if (receiverType === 'Candidate') {
            receiver = await Candidate.findById(receiverId);
        }

        if (!receiver) {
            res.status(404);
            throw new Error('Receiver not found');
        }

        // Create and save the message
        const message = new Message({
            senderId,
            receiverId,
            messageBody,
            date: new Date(),
        });

        await message.save();

        res.status(201).json({
            message: "Message sent successfully",
            data: message,
        });
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
