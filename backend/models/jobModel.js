const mongoose = require('mongoose');
const { Schema } = mongoose;


const jobSchema = new Schema({
    featuredImage: {
        type: String,
    },
    company: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    tags: [
        {
            type: String,
        },
    ],
    gender: {
        type: String,
        required: true,
    },
    jobApplyType: {
        type: String,
        required: true,
        required: true,
    },
    externalURLforApply: {
        type: String,
    },
    jobApplyEmail: {
        type: String,
        required: true,
        required: true,
    },
    salaryType: {
        type: String,
        required: true,
    },
    minSalary: {
        type: Number,
        required: true,
        required: true,
    },
    maxSalary: {
        type: Number,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    careerLevel: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    introVideoURL: {
        type: String,
    },
    photos: [
        {
            type: String,
        },
    ],
    applicationDeadlineDate: {
        type: Date,  // Changed to Date type for better handling of dates
    },
    address: {
        type: String,
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
    preferredSkills: [
    
        {
            type: String,
        },
    ],
    appliedCandidates: [
        {
            type: Schema.ObjectId,
            ref: 'User',
        },
    ],
        }, 
        
        { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

