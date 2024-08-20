const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');

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

        console.log("title", title);
        console.log("description", description);
        console.log("location", location);
        console.log("salaryType", salaryType);
        console.log("minSalary", minSalary);
        console.log("maxSalary", maxSalary);
        console.log("type", type);
        console.log("category", category);
        console.log("company", company);
        console.log("experience", experience);
        console.log("preferredSkills", preferredSkills);
        console.log("qualification", qualification);
        console.log("tags", tags);
        console.log("gender", gender);
        console.log("jobApplyType", jobApplyType);
        console.log("externalURLforApply", externalURLforApply);
        console.log("jobApplyEmail", jobApplyEmail);
        console.log("careerLevel", careerLevel);
        console.log("introVideoURL", introVideoURL);
        console.log("applicationDeadlineDate", applicationDeadlineDate);
        console.log("address", address);
        console.log("featuredImage", featuredImage);
        console.log("photos", photos);

        try {
            // Validate required fields
            if (!title || !description || !location || !salaryType || !minSalary || !maxSalary) {
                return res.status(400).json({ error: "Missing required fields" });
            }


            // Create a new job object
            const newJob = new Job({
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
    }),

    //list jobs
    listJobs: asyncHandler(async (req, res) => {
        const jobs = await Job.find();
        if (!jobs) {
            res.status(404);
            throw new Error('No jobs found');
        }
        res.json(jobs);
    })
};

module.exports = jobController;
