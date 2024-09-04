const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: Number,
        trim: true,
    },
    location: {
        type: {
            type: String,  // This will always be 'Point'
            enum: ['Point'],
<<<<<<< HEAD:backend/models/userModel.js
            required: true,
        },
        coordinates: {
            type: [Number],  // Array of numbers: [longitude, latitude]
            required: true,
=======
        },
        coordinates: {
            type: [Number],  // Array of numbers: [longitude, latitude]

>>>>>>> origin/doneByBasil:backend/models/candidateModel.js
        },
    },
    role: {
        type: String,
        default: "candidate",
    },
    designation: {
        type: String,
        trim: true,
    },
    description:{
        type: String,
    },
    DOB:{
        type:Date
    },
    salary:{
        type:Number
    },
    gender:{
        type:String
    },
<<<<<<< HEAD:backend/models/userModel.js
    salaryType: {
        type:String
    },
    salary:{
        type:Number
    },
    categories:[{
        type:String
    }],
=======
>>>>>>> origin/doneByBasil:backend/models/candidateModel.js
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
<<<<<<< HEAD:backend/models/userModel.js
=======
    bookmarkedProfiles: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Employer'
        }
    ],
>>>>>>> origin/doneByBasil:backend/models/candidateModel.js
    listedJobs: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Job'
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
        dateOfCertification:{
            type:Date
        },
    }],
    professionalSkills:[
        {
            type: String,
            trim:true
        }
    ]
},{
    timestamps:true
})

const Candidate = mongoose.model("Candidate",candidateSchema)

module.exports = Candidate