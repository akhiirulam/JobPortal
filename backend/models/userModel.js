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
    location: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        default: "user",
    },
    companyName: {
        type: String,
        trim: true,
    },
    designation: {
        type: String,
        trim: true,
    },
    DOB:{
        type:String
    },
    gender:{
        type:String
    },
    educationalQualification:{
        type:String
    },
    languages:[{
        type:String
    }],
    experience:{
        type:String
    },
    bio: {
        type: String,
    },
    foundYear:{
        type:String,
    },
    companySize:{
        type:Number
    },
    facebook:{
        type:String,
        default:null,
        trim: true,
    },
    facebook:{
        type:String,
        default:null,
        trim: true,
    },
    twitter:{
        type:String,
        default:null,
        trim: true,
    },
    instagram:{
        type:String,
        default:null,
        trim: true,
    },
    personalWebsite:{
        type:String,
        default:null,
        trim: true,
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
    educationalHistory:[{
        collegeName:{
            type:String,
            trim: true,
        },
        degreeName:{
            type:String,
            trim:true
        },
        shortSummery:{
            type:String,
            trim: true,
        },
        startDate:{
            type:Date
        },
        endDate:{
            type:Date
        }
    }],
    previousWorkHistory:[{
        designation:{
            type:String,
            trim: true,
        },
        salary:{
            type:Number
        },
        companyName:{
            type:String,
            trim: true,
        },
        reasonFotQuit:{
            type:String,
            trim: true,
        },
        lastWorkingDate:{
            type:Date
        }
    }],
    profileImg:{
        type:String,
    },
    portfolioImgs:[
        {
            type:String
        }
    ],
    profileVideo:{
        type:String
    },
    resume:[{
        type:String
    }],
    awards:[{
        occasionName:{
            type:String,
            trim: true,
        },
        awardName:{
            type:String,
            trim:true
        },
        shortSummery:{
            type:String,
            trim: true,
        },
        startDate:{
            type:Date
        },
        endDate:{
            type:Date
        }
    }]

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;