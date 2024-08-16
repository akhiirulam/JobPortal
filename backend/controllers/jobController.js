const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');

const jobController = {
    // Add Job Details
    addJobDetails: asyncHandler(async (req, res) => {
        const {
            title,
            description,
            location,
            salary,
            type,
            category,
            company,
            shiftType,
            experience,
            requiredSkills,
            preferedSkills,
            educationalQualification,
            tags
        } = req.body;

        const job = await Job.create({
            title,
            description,
            location,
            salary,
            type,
            category,
            company,
            shiftType,
            experience,
            requiredSkills,
            preferedSkills,
            educationalQualification,
            tags,
            appliedCandidates: []
        });

        res.status(201).json({
            message: 'Job created successfully',
            job
        });
    }),

    // Edit Job Details
    editJobDetails: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedJob) {
            res.status(404);
            throw new Error('Job not found');
        }

        res.json({
            message: 'Job updated successfully',
            updatedJob
        });
    }),

    // Delete Job Details
    deleteJobDetails: asyncHandler(async (req, res) => {
        const { id } = req.params;

        const job = await Job.findByIdAndDelete(id);

        if (!job) {
            res.status(404);
            throw new Error('Job not found');
        }

        res.json({
            message: 'Job deleted successfully'
        });
    })
};

module.exports = jobController;
