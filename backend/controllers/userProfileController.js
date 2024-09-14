const express = require("express");
const asyncHandler = require("express-async-handler");

const JWT_SECRET = process.env.JWT_SECRET;
const Job = require("../models/jobModel");
const Candidate = require("../models/candidateModel");
const Employer = require("../models/employerModel");

const userProfileController = {
  addProfile: asyncHandler(async (req, res) => {
    const { email } = req.cookies;
    if (!email) {
      return res.status(400).send("Email not found in cookies.");
    }
    const {
      fullName,
      DOB,
      gender,
      mobile,
      age,
      qualification,
      experience,
      language,
      salaryType,
      salary,
      role,
      category,
      subCategories,
      profile,
      jobTitle,
      jobDescription,
      // location,
      friendlyAddress,
      introductionVideo,
    } = req.body;
// console.log("Data from frontend:", fullName,
//   DOB,
//   gender,
//   mobile,
//   age,
//   qualification,
//   experience,
//   language,
//   salaryType,
//   salary,
//   role,
//   category,
//   subCategories,
//   profile,
//   jobTitle,
//   jobDescription,
//   // location,
//   friendlyAddress,
//   introductionVideo,)
  
      
    const profileImage = req.files["profileImage"]
      ? req.files["profileImage"][0].path
      : null;

      const socialMediaEntries = JSON.parse(req.body.socialMediaEntries || '{}');
     
    const newUserData = {
      profileImg: profileImage || undefined,
      name: fullName || undefined,
      DOB,
      gender,
      mobile,
      email: email,
      age,
      qualification,
      experience,
      languages: language ? [language] : undefined,
      salaryType,
      salary,
      category,
      showMyProfile: profile === 'Show' ? true : false,
      subCategory: subCategories || undefined,
      jobTitle,
      description: jobDescription,
      facebook: socialMediaEntries.facebook || null,
      twitter: socialMediaEntries.twitter || null,      
      instagram: socialMediaEntries.instagram || null,
      role,
      friendlyAddress,
      // location: {
      //   type: 'Point',
      //   coordinates
      // },
     
      profileVideo: introductionVideo,
    
    };

    console.log("hello",newUserData);

    const user = await Candidate.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }
    console.log(user);

    const response = await Candidate.updateOne(
      { email },
      { $set: newUserData }
    );

    if (response) {
      res.status(200).send("User information registered successfully.");
    } else {
      res.status(500).send("Failed to update user information.");
    }
  }),

  addResume: asyncHandler(async (req,res) => {
      // const { email } = req.cookies;
    // if (!email) {
    //   return res.status(400).send("Email not found in cookies.");
    // }
    const email = "test5@gmail.com";

    const education = JSON.parse(req.body.education || '[]');
    const previousExperience = JSON.parse(req.body.experience || '[]');
    const awards = JSON.parse(req.body.awards || '[]')

    const resumes = req.files["uploadedFile[]"]
    ? req.files["uploadedFile[]"].map((file) => file.path)
    : [];

    const images = req.files["images[]"]
    ? req.files["images[]"].map((file) => file.path)
    : [];

    console.log(education,previousExperience,awards)
    const educationalHistory = education.map((degree, index) => ({
      collegeName: degree.title,
      degreeName: degree.academy,
      educationDescription: degree.description, 
      year: degree.year,
    }));

   const previousWorkHistory = previousExperience.map((workHistory,index) => ({
    previousDesignation : workHistory.title,
    previousCompanyName : workHistory.company, 
    previousStartingDate : workHistory.startYear,
    previousEndDate : workHistory.endYear
   }))
    
   const candidateAwards = awards.map((award,index) => ({
    occasionName: award.title,
    awardName: award.name,
    shortSummery: award.description,
    dateOfCertification: award.year
   }))

   const newUserData = {
   resume: Array.isArray(resumes) ? resumes : resumes ? [resumes] : [],
   educationalHistory: educationalHistory.length ? educationalHistory : [], 
   previousWorkHistory: previousWorkHistory.length ? previousWorkHistory : [], 
   portfolioImgs :Array.isArray(images) ? images : images ? [images] : [],
   awards: candidateAwards.length ? candidateAwards : [], 
   }

   const user = await Candidate.findOne({ email });
   if (!user) {
     return res.status(404).send("User not found.");
   }
   console.log(user);

   const response = await Candidate.updateOne(
     { email },
     { $set: newUserData }
   );
   if (response) {
     res.status(200).send("User information registered successfully.");
   } else {
     res.status(500).send("Failed to update user information.");
   }
  }),


  addEmployer: asyncHandler(async (req, res) => {
    try {
      // Access form fields
      const {
        showProfileOption,
        employerName,
        email,
        mobileNumber,
        website,
        foundedDate,
        companySize,
        tempUrl,
        jobDescription,
      } = req.body;

      const selectedCategories = JSON.parse(req.body.selectedCategories);
      const members = JSON.parse(req.body.members);
      const socialMediaEntries = JSON.parse(req.body.socialMediaEntries);

      console.log("Show Profile Option:", showProfileOption);
      console.log("Employer Name:", employerName);
      console.log("Email:", email);
      console.log("Mobile Number:", mobileNumber);
      console.log("Website:", website);
      console.log("Founded Date:", foundedDate);
      console.log("Company Size:", companySize);
      console.log("Selected Categories:", selectedCategories);
      console.log("Temp URL:", tempUrl);
      console.log("Job Description:", jobDescription);
      console.log("Members:", members);
      console.log("Social Media Entries:", socialMediaEntries);

      const logoImage = req.files["logoImage"]
        ? req.files["logoImage"][0].path
        : null;
      const coverImage = req.files["coverImage"]
        ? req.files["coverImage"][0].path
        : null;
      const images = req.files["images[]"]
        ? req.files["images[]"].map((file) => file.path)
        : [];

      console.log("Logo Image:", logoImage);
      console.log("Cover Image:", coverImage);
      console.log("Images:", images);
      console.log("ProfileImage:", members.profileImage);
      // Handle the data as needed (e.g., save to database)

      res.status(200).json({ message: "Employer added successfully" });
    } catch (error) {
      console.error("Error adding employer:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }),

  viewUserProfile: asyncHandler(async (req, res) => {
    const { email } = req.user;

    const userFound = await User.findOne({ email });
    if (!userFound) {
      throw new Error("User Not Found");
    }
    res.send({
      name: userFound.name,
      designation: userFound.designation,
      location: userFound.address,
      phone: userFound.mobile,
      email: userFound.email,
      about: userFound.bio,
      website: userFound.personalWebsite,
      profileImg: userFound.profileImg,
      images: userFound.portfolioImgs,
      video: userFound.profileVideo,
      jobList: userFound.listedJobs,
    });
  }),

  editProfile: asyncHandler(async (req, res) => {
    const { email } = req.cookies;

    if (!email) {
      return res.status(400).send("Email not found in cookies.");
    }

    const {
      mobile,
      location,
      role,
      companyName,
      designation,
      DOB,
      gender,
      educationalQualification,
      languages,
      experience,
      bio,
      foundYear,
      companySize,
    } = req.body;

    // Create an object with the new user data
    const updatedUserData = {
      ...(mobile && { mobile }),
      ...(location && { location }),
      ...(role && { role }),
      ...(companyName && { companyName }),
      ...(designation && { designation }),
      ...(DOB && { DOB }),
      ...(gender && { gender }),
      ...(educationalQualification && { educationalQualification }),
      ...(languages && { languages }),
      ...(experience && { experience }),
      ...(bio && { bio }),
      ...(foundYear && { foundYear }),
      ...(companySize && { companySize }),
    };

    // Find the user by email and update their profile
    const updatedUser = await Candidate.findOneAndUpdate(
      { email },
      { $set: updatedUserData },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      updatedUser = await Employer.findOneAndUpdate(
        { email },
        { $set: updatedUserData },
        { new: true, runValidators: true }
      );
    }

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }
    res
      .status(200)
      .json({ message: "Profile updated successfully", updatedUser });
  }),

  viewPersonProfile: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userFound = await Employer.findById(id);
    if (!userFound) {
      throw new Error("User Not Found");
    }
    res.send({
      name: userFound.name,
      designation: userFound.designation,
      location: userFound.address,
      phone: userFound.mobile,
      email: userFound.email,
      bio: userFound.bio,
      dob: userFound.DOB,
      resume: userFound.resume,
      experience: userFound.experience,
      gender: userFound.gender,
      qualification: userFound.educationalQualification,
      languages: userFound.languages,
      profileImg: userFound.profileImg,
      images: userFound.portfolioImgs,
      video: userFound.profileVideo,
      awards: userFound.awards,
      educationalHistory: userFound.educationalHistory,
      workHistory: userFound.previousWorkHistory,
    });
  }),

  viewCompanyProfile: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const companyFound = Employer.findById(id);
    if (!companyFound) {
      throw new Error("Company Not Found");
    }
    res.send({
      name: companyFound.name,
      designation: companyFound.designation,
      location: companyFound.address,
      phone: companyFound.mobile,
      email: companyFound.email,
      about: companyFound.bio,
      website: companyFound.personalWebsite,
      profileImg: companyFound.profileImg,
      images: companyFound.portfolioImgs,
      video: companyFound.profileVideo,
      jobList: companyFound.listedJobs,
    });
  }),

  filterEmployer: asyncHandler(async (req, res) => {
    const { tags, location, category, foundDateFrom, foundDateTo } = req.query;

    let filter = {};

    if (tags) {
      filter.tags = { $all: tags }; // Match all tags
    }
    if (location) {
      filter.location = location;
    }
    if (category) {
      filter.type = category;
    }
    if (foundDateFrom || foundDateTo) {
      filter.foundDate = {
        $gte: new Date(foundDateFrom),
        $lte: new Date(foundDateTo),
      };
    }

    console.log(filter);

    const employerList = await Employer.find(filter);

    res.send(employerList);
  }),
  filterCandidate: asyncHandler(async (req, res) => {
    const {
      tags,
      location,
      category,
      gender,
      datePosted,
      experienceLevel,
      qualification,
    } = req.query;

    let filter = {};

    if (tags) {
      filter.tags = { $all: tags }; // Match all tags
    }
    if (location) {
      filter.location = location;
    }
    if (category) {
      filter.type = category;
    }
    if (gender) {
      filter.gender = gender;
    }
    if (datePosted) {
      const lastDay = new Date();
      lastDay.setDate(lastDay.getDate() - datePosted);
      filter.updatedAt = { $gte: lastDay };
    }
    if (experienceLevel) {
      filter.experienceLevel = experienceLevel;
    }
    if (qualification) {
      filter.educationalQualification = qualification;
    }

    const candidateList = await Candidate.find(filter);

    res.send(candidateList);
  }),
};

module.exports = userProfileController;
