const express = require("express");
const asyncHandler = require("express-async-handler");

const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/userModel");

const userProfileController = {
  addProfile: asyncHandler(async (req, res) => {
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

    const newUserData = {
      mobile: JSON.parse(mobile),
      location: JSON.parse(location),
      role: JSON.parse(role),
      companyName: JSON.parse(companyName),
      designation: JSON.parse(designation),
      DOB: JSON.parse(DOB),
      gender: JSON.parse(gender),
      educationalQualification: JSON.parse(educationalQualification),
      languages: JSON.parse(languages),
      experience: JSON.parse(experience),
      bio: JSON.parse(bio),
      foundYear: JSON.parse(foundYear),
      companySize: JSON.parse(companySize),
    };
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    await User.updateOne({ email }, { $set: newUserData }).then(() => {
      res.status(200).send("User information registered successfully.");
    });
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