const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');
const {uploadImage} = require('../Middlewares/imageUpload');

const jobController = {
    // Add Job Details
    addJobDetails: asyncHandler(async (req, res) => {
        const {
            title,
            description,
            location,
            salaryType,
            minSalary,
            maxSalary,
            type,
            category,
            company,
            experience,
            preferredSkills,
            qualification,
            tags,
            gender,
            jobApplyType,
            externalURLforApply,
            jobApplyEmail,
            careerLevel,
            introVideoURL,
            applicationDeadlineDate,
            address,
            featuredImage,
            photos
        } = req.body;
        
        console.log( 
            title,
            description,
            salaryType,
            minSalary,
            maxSalary,
            type,
            category,
            company,
            experience,
            preferredSkills,
            qualification,
            tags,
            gender,
            jobApplyType,
            externalURLforApply,
            jobApplyEmail,
            careerLevel,
            introVideoURL,
            applicationDeadlineDate,
            address,
            featuredImage,
            photos)

        try {
            // Validate required fields
            if (!title || !description || !location || !salaryType || !minSalary || !maxSalary) {
                return res.status(400).json({ error: "Missing required fields" });
            }
    
            // Create a new job object
            const newJob = new Job({
                title,
                description,
                //location,
                salaryType,
                minSalary,
                maxSalary,
                type,
                category,
                company,
                experience,
                preferredSkills,
                qualification,
                tags,
                gender,
                jobApplyType,
                externalURLforApply,
                jobApplyEmail,
                careerLevel,
                introVideoURL,
                applicationDeadlineDate,
                address,
                featuredImage,
                photos
            });
    
            // Save the new job to the database
            const job = await newJob.save();
    
            // Respond with the created job
            res.status(201).json({ message: "Job created successfully", job });
        } catch (error) {
            console.error("Error details:", error);
            res.status(500).json({ error: "An error occurred while creating the job" });
        }
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
