const express = require("express");
const asyncHandler = require("express-async-handler");

const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/userModel");

const userProfileController = {
  addProfile: asyncHandler(async (req, res) => {
    // const { email } = req.cookies;
    // if (!email) {
    //   return res.status(400).send("Email not found in cookies.");
    // }

    const email = "test1@example.com"


    const {
      fullName,
      DOB,
      gender,
      mobile,
      educationalQualification,
      yearsOfExperience,
      languages,
      salaryType,
      salary,
      categories,
      showMyProfile,
      jobTitle,
      description,
      socialNetwork,
      role,
      companyName,
      designation,
      friendlyAddress,
      location,
      introductionVideo,
      educationalHistory,
      collegeName,
      degreeName,
      educationDescription,
      startDate,
      endDate,
      previousDesignation,
      previousStartingDate,
      previousEndDate,
      previousCompanyName,
      reasonForQuit,
      portfolio,
      award
    } = req.body;

    const profileImage = req.files?.profileImage ? req.files.profileImage[0].path : null;
    const resumePdf = req.files?.resumePdf ? req.files.resumePdf[0].path : null;
    const portfolioImgs = req.files?.portfolioImgs ? req.files.portfolioImgs.map(file => file.path) : [];

    const coordinates = Array.isArray(location?.coordinates) 
        ? location.coordinates.map(coord => parseFloat(coord))
        : [0, 0];

    const newUserData = {
      profileImg: profileImage,
      name: fullName,
      DOB,
      gender,
      mobile,
      email :'test1@example.com',
      educationalQualification,
      experience: yearsOfExperience,
      languages,
      salaryType,
      salary,
      categories,
      showMyProfile,
      jobTitle,
      description,
      socialNetwork,
      role,
      companyName,
      designation,
      friendlyAddress,
      location: {
        type: 'Point',
        coordinates
      },
      introductionVideo,
      resume: resumePdf ? [resumePdf] : [],
      educationalHistory: [{
        collegeName,
        degreeName,
        educationDescription,
        startDate,
        endDate
      }],
      previousWorkHistory: [{
        previousDesignation,
        previousCompanyName,
        reasonForQuit,
        previousStartingDate,
        previousEndDate
      }],
      portfolioImgs,
      profileVideo: introductionVideo,
      awards: award ? [award] : []
    };

    console.log(newUserData)

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    await User.updateOne({ email }, { $set: newUserData });
    res.status(200).send("User information registered successfully.");
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
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: updatedUserData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", updatedUser });
  }),

  viewPersonProfile: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userFound = User.findById(id);
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
    const companyFound = User.findById(id);
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
  
};

module.exports = userProfileController;