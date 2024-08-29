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
        type: {
            type: String,  // This will always be 'Point'
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],  // Array of numbers: [longitude, latitude]
            required: true,
        },
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
    description:{
        type: String,
    },
    DOB:{
        type:String
    },
    gender:{
        type:String
    },
    salaryType: {
        type:String
    },
    salary:{
        type:Number
    },
    categories:[{
        type:String
    }],
    showMyProfile:{
        type: Boolean
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
    friendlyAddress:{
        type:String,
        default:null,
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
        educationDescription:{
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
        previousDesignation:{
            type:String,
            trim: true,
        },
        previousCompanyName:{
            type:String,
            trim: true,
        },
        reasonForQuit:{
            type:String,
            trim: true,
        },
        previousStartingDate:{
            type:Date,
        },
        previousEndDate:{
            type:Date
        }
    }],
    profileImg:{
        type:String,
    },
    introductionVideo:{
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