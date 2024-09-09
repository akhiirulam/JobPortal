const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');
const JobAlert = require('../models/jobAlertModel'); // Import the JobAlert model
const { uploadImage } = require('../Middlewares/imageUpload');

const jobController = {
    // Add Job Details
    addJobDetails: asyncHandler(async (req, res) => {
        const {
            jobTitle: title,
            jobDescription: description,
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
            CareerType: careerLevel,
            introVideoURL,
            applicationDeadlineDate,
            address,
            featuredImage,
            photos
        } = req.body;

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


            //  job alert for the new job

            const newJobAlert = new JobAlert({
                jobId: job._id,
                title: job.title,
                description: job.description,
                expiresAt: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days from now
            });

            // Save the job alert to the database
            await newJobAlert.save();

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
    }),

    // List Jobs
    listJobs: asyncHandler(async (req, res) => {
        const jobs = await Job.find();
        if (!jobs) {
            res.status(404);
            throw new Error('No jobs found');
        }
        res.json(jobs);
    }),

    // Filtering Jobs
    filterJobs: asyncHandler(async(req, res) => {
        const { tags, location, jobType, datePosted, experienceLevel, careerLevel, salaryRange } = req.query;

        let filter = {};

        if (tags) {
            filter.tags = { $all: tags }; // Match all tags
        }
        if (location) {
            filter.location = location;
        }
        if (jobType) {
            filter.type = jobType;
        }
        if (datePosted) {
            const lastDay = new Date();
            lastDay.setDate(lastDay.getDate() - datePosted);
            filter.updatedAt = { $gte: lastDay };
        }
        if (experienceLevel) {
            filter.experienceLevel = { $in: experienceLevel };
        }
        if (careerLevel) {
            filter.careerLevel = { $in: careerLevel };
        }
        if (salaryRange) {
            const [minSalary, maxSalary] = salaryRange.split('-');
            filter.minSalary = { $gte: parseInt(minSalary) };
            filter.maxSalary = { $lte: parseInt(maxSalary) };
        }
        console.log(filter);

        const jobs = await Job.find(filter);

        res.send(jobs);
    })
};

module.exports = jobController;
