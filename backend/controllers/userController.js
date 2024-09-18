const express = require("express");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");


const JWT_SECRET_KEY = process.env.JWT_SECRET;
const OTP = require("../models/otpModel");
const Employer = require("../models/employerModel");
const Candidate = require("../models/candidateModel");
require("dotenv").config();

const userController = {
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;


      let user;
      let userType;
      let userId
      let empUser;
      let candUser;

      empUser = await Employer.findOne({ email });
      if (empUser) {
        user = empUser;
        userType = 'Employer';
        userId = empUser._id 
        
      } else {
         candUser = await Candidate.findOne({ email });
        if (candUser) {
          user = candUser;
          userType = 'Candidate';
          userId = candUser._id
        } else {
          return res.status(404).json({ error: "No user record found" });
        }
      }
     
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

     

      if(empUser){
        console.log(empUser)
          res.cookie('userId', empUser._id, {
          maxAge:3600000,
          httpOnly: false, 
          secure: process.env.NODE_ENV === 'development', 
          
      });
      }
      else if( candUser)
      {
        res.cookie('userId', candUser._id, {
          maxAge:3600000,
          httpOnly: false, 
          secure: process.env.NODE_ENV === 'development', 
      });
      }
  
      res.cookie("token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "development",
        sameSite: "Strict",
        maxAge: 3600000,
      });
    

      res.cookie("email", email, { httpOnly: true, maxAge: 3600000 });
      res.json({ message: "Login successful", token,userType, userId });
   
  }),

  signupEmployer: asyncHandler(async (req, res) => {
    const { userMode, email, password } = req.body;
  
    console.log(userMode, email, password);
  
    // Check if the user already exists
    const existingUser = await Employer.findOne({ email }) || await Candidate.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create and save the new user
    const newUser = new Employer({
      role: userMode,
      email,
      password: hashedPassword,
    });
  
    await newUser.save();
    console.log( await newUser.save())

    res.status(201).json({ message: "User registered successfully" });
  }),
  
  signupCandidate: asyncHandler(async (req, res) => {
    const { userMode, email, password } = req.body;
  
    console.log(userMode, email, password);
  
    // Check if the user already exists
    const existingUser = await Employer.findOne({ email }) || await Candidate.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create and save the new candidate
    const newUser = new Candidate({
      role: userMode,  // Ensure userMode is correctly set
      email,
      password: hashedPassword,
    });
  
    console.log(newUser);
  
    try {
      await newUser.save();
      res.status(201).json({ message: "Registration Successfull" });
    } catch (error) {
      console.error("Error saving user:", error);
      
      res.status(500).json({ error: "Internal Server Error" });
    }
  }),
  

  otpGeneration: asyncHandler(async (req, res) => {
    const { email } = req.body;
    console.log("email:", email);

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    // Save OTP to the database
    await OTP.create({ email, otp });

    // Create transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP for verification is: ${otp}`,
    });

    // Respond with success
    res.status(200).send({ message: "OTP sent successfully" });
  }),

  otpVerification: asyncHandler(async (req, res) => {
    const { emailOtp, email } = req.body;

    // Find the OTP record
    const otpRecord = await OTP.findOne({ email, otp: emailOtp }).exec();

    if (otpRecord) {
      // Generate JWT token
      const token = jwt.sign({ userId: email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res
        .status(200)
        .json({ token, email, message: "OTP verified successfully!" });
    } else {
      // Throw error for invalid OTP
      res.status(400);
      throw new Error("Invalid OTP");
    }
  }),

  forgotPassword: asyncHandler(async (req, res) => {
    const { email } = req.body;
    // const data = await User.findOne({ email });

    // if (!data) {
    //   return res.status(404).send({ message: "User not found" });
    // }

    // const name = data.name;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Forgot Password",
      html:
        `<h3>Hello, please click here to </h3> <a href = http://127.0.0.1:5000/api/user/resetPassword?email=` +
        email +
        `> Reset </a> your password`,
    });

    // Respond with success
    res.status(200).send({ message: "Email sent successfully" });
  }),

  resetPassword: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    if (userData) {
      const hashedPassword = await bcrypt.hash(password, 10);
      userData.password = hashedPassword;
      await userData.save();
      console.log("User updated successfully:", userData);
      res.status(200).send({ message: "Password updated successfully" });
    } else {
      console.log("User not found");
      res.status(404).send({ message: "User not found" });
    }
  }),
  logout:asyncHandler(async(req,res) => 
  {
    console.log("logout page");
    
    const cookies = req.cookies;
    try {
      for (const cookieName in cookies) {
        if (cookies.hasOwnProperty(cookieName)) {
          res.clearCookie(cookieName); // Clear the cookie
        }
      }
      res.json({ message: "Signout successful" });
    } catch (error) {
      console.error('Error during signout:', error);
      res.status(500).json({ error: "An error occurred during signout" });
    }
  })
};

module.exports = userController;
