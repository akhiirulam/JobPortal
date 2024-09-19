const asyncHandler = require("express-async-handler");
const Job = require("../models/jobModel");
const Employer = require("../models/employerModel");

const jobController = {
  // Add Job Details
  addJobDetails: asyncHandler(async (req, res) => {
   const {userId} = req.cookies
   console.log(userId);
   
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
    } = req.body;

    
    
    try {
      // Validate required fields
      if (
        !title ||
        !description ||
        !location ||
        !salaryType ||
        !minSalary ||
        !maxSalary
      ) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Ensure req.files exists
      if (!req.files) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const coordinates = Array.isArray(location.coordinates)
        ? location.coordinates.map(coord => {
          const num = parseFloat(coord);
          if (isNaN(num)) {
            throw new Error('Invalid coordinate value');
          }
          return num;
        })
        : [0, 0];

      const featuredImage = req.files?.featuredImage
        ? req.files.featuredImage[0].path
        : null;
      const photos = req.files?.photos
        ? req.files.photos.map((photo) => photo.path)
        : [];

      // Create a new job object
      const newJob = new Job({
        userId,
        title,
        description,
        location: {
          type: 'Point',
          coordinates
        },
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
        photos,
        employer: employerId
      });

      const job = await newJob.save();

      // Respond with the created job
      res.status(201).json({ message: "Job created successfully", job });
    } catch (error) {
      console.error("Error details:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the job" });
    }
  }),

  addJobPage:asyncHandler(async(req,res)=>{

    try {
      const employerId = req.cookies.userId;
      console.log(employerId);
  
      const validEmployee = await Employer.findById(employerId);
      console.log(validEmployee);
      
      if (validEmployee) {
       
        res.json({ success: true, message: 'Access granted' });
      } else {
       
        res.status(403).json({ success: false, message: 'Access denied' });
      }
    } catch (error) {
      console.error('Error in /addJobPage route:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }

  }),
  // Edit Job Details
  editJobDetails: asyncHandler(async (req, res) => {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      res.status(404);
      throw new Error("Job not found");
    }

    res.json({
      message: "Job updated successfully",
      updatedJob,
    });
  }),

  //Job Applied Candidates
  appliedCandidates: asyncHandler(async(req,res) => {
    const employerId = req.cookies.userId;

    const candidateDetails = await Job.find().populate('appliedCandidates', '_id name jobTitle').exec();


  }),



  // Delete Job Details
  deleteJobDetails: asyncHandler(async (req, res) => {
    const { id } = req.params;

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    res.json({
      message: "Job deleted successfully",
    });
  }),

  //list jobs
  listJobs: asyncHandler(async (req, res) => {
    const jobs = await Job.find();
    if (!jobs) {
      res.status(404);
      throw new Error("No jobs found");
    }
    res.json(jobs);
  }),

  //filter Jobs
  filterJobs: asyncHandler(async (req, res) => {
    const { tags, location, jobType, datePosted, experienceLevel, careerLevel, salaryRange } = req.query

    let filter = {};

    if (tags) {
      filter.tags = { $all: tags }; // Match all tags
    }
    if (location) {
      filter.location = location;
    }
    if (jobType) {
      filter.type = { $in: jobType };
    }
    if (datePosted) {
      const lastDay = new Date();
      lastDay.setDate(lastDay.getDate() - datePosted);
      filter.updatedAt = { $gte: lastDay };
    }
    if (experienceLevel) {
      filter.experienceLevel = experienceLevel
    }
    if (careerLevel) {
      filter.careerLevel = careerLevel
    }
    if (salaryRange) {
      const [minSalary, maxSalary] = salaryRange.split('-');
      filter.minSalary = { $gte: parseInt(minSalary) };
      filter.maxSalary = { $lte: parseInt(maxSalary) };
    }
    console.log(filter);



    const jobs = await Job.find(filter);

    res.send(jobs)

  }),
  viewJob: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id)
    res.send(job)
  }),

  //my jobs
  myJobs: asyncHandler(async (req, res) => {
    const employerId = req.user._id;

    const jobs = await Job.find({ employer: employerId });

    if (!jobs) {
      res.status(404);
      throw new Error('No jobs found');
    }
    res.status(200).json(jobs);
  }),


  // apply for a job
  applyForJob: asyncHandler(async (req, res) => {
    const { jobId } = req.params;
    const candidateId = req.user._id;

    //find the job and update it
    const job = await Job.findByIdAndUpdate(jobId, {
      $addToSet: { appliedCandidates: candidateId }
    }, { new: true });

    if (!job) {
      res.status(404);
      throw new Error("Job not found");
    }

    //update the candidate's listedjobs array
    const candidate = await Candidate.findByIdAndUpdate(candidateId, {
      $addToSet: { listedJobs: jobId }
    }, { new: true });

    if (!candidate) {
      res.status(404);
      throw new Error("Candidate not found");
    }

    res.status(200).json({
      message: "Applied successfully",
      job,
      candidate,
    })
  })
};

module.exports = jobController;
