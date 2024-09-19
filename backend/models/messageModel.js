const mongoose = require ('mongoose')

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    receiverId:{
        type: mongoose.Types.ObjectId,
        required:true
    },
    messageBody:{
        type:String,
        required: true,
    },
    date:{
        type: Date,
        required: true
    }

})

const Message = mongoose.model('Message',messageSchema);

module.exports = Message;
