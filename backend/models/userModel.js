const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
        trim: true,
    },
    email: {
        type: String,
        requried: true,
        trim: true,
    },
    password: {
        type: String,
        requried: true,
        trim: true,
    },
    mobile: {
        type: Number,
        requried: true,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
    },
    companyName: {
        type: String,
    },
    Designation: {
        type: String,
    },
    bio: {
        type: String,
    },
    listedJobs: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Job'
        }
    ],
    bookmarkedProfiles: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    previousHistory:{
        designation:{
            type:String
        },
        salary:{
            type:Number
        },
        companyName:{
            type:String
        },
        reasonFotQuit:{
            type:String
        },
        lastWorkingDate:{
            type:Date
        }
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;