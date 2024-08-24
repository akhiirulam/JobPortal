const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    featuredImage: {
        filename: String,
        contentType: String,
        length: Number,
        chunkSize: Number,
        uploadDate: Date,
        aliases: [String],
        metadata: Schema.Types.Mixed,
        md5: String,
    },
    company: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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
    },
    externalURLforApply: {
        type: String,
    },
    jobApplyEmail: {
        type: String,
        required: true,
    },
    salaryType: {
        type: String,
        required: true,
    },
    minSalary: {
        type: String,
        required: true,
    },
    maxSalary: {
        type: String,
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
    photos: {
        filename: String,
        contentType: String,
        length: Number,
        chunkSize: Number,
        uploadDate: Date,
        aliases: [String],
        metadata: Schema.Types.Mixed,
        md5: String,
    },
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
            required: true,
        },
        coordinates: {
            type: [Number],  // Array of numbers: [longitude, latitude]
            required: true,
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
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
