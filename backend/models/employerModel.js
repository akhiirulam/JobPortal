const mongoose = require('mongoose')

const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        trim: true
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

        },
        coordinates: {
            type: [Number],  // Array of numbers: [longitude, latitude]

        },
    },
    role: {
        type: String,
        default: "employer",
    },
    description: {
        type: String,
    },
    facebook: {
        type: String,
        default: null,
        trim: true,
    },
    twitter: {
        type: String,
        default: null,
        trim: true,
    },
    instagram: {
        type: String,
        default: null,
        trim: true,
    },
    personalWebsite: {
        type: String,
        default: null,
        trim: true,
    },
    profileImg: {
        type: String,
    },
    portfolioImgs: [
        {
            type: String
        }
    ],
    profileVideo: {
        type: String
    },
    bookmarkedProfiles: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Candidate'
        }
    ],
    companySize: {
        type: String
    },
    foundYear: {
        type: Number
    },
    showMyProfile: {
        type: Boolean
    },
    postedJobs: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Job'
        }
    ]

}, {
    timestamps: true
})

const Employer = mongoose.model("Employer", employerSchema)

module.exports = Employer