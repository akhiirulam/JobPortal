const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  lastMessage: { type: String },
  lastMessageTimestamp: { type: Date }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
