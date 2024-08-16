const express = require("express");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/userModel");
const OTP = require("../models/otpModel");

const userController = {

login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No user record found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
    res.cookie('email', email, { httpOnly: true, maxAge: 3600000 });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
  }),

  signup: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      name: username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User registered successfully" });

    console.log(username, email, password);
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
      const token = jwt.sign({ userId: email }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, email, message: "OTP verified successfully!" });
    } else {
      // Throw error for invalid OTP
      res.status(400);
      throw new Error("Invalid OTP");
    }
  }),

  forgotPassword: asyncHandler(async(req,res) =>
    {
      const {email} = req.body;
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
        html: `<h3>Hello, please click here to </h3> <a href = http://127.0.0.1:5000/api/user/resetPassword?email=` + email +`> Reset </a> your password`
      });
  
      // Respond with success
      res.status(200).send({ message: "Email sent successfully" });

    }),

  resetPassword: asyncHandler(async(req,res) =>
  {
    const {email,password} = req.body;
    const userData = await User.findOne({ email });
    if(userData)
    {
      const hashedPassword = await bcrypt.hash(password,10);
      userData.password = hashedPassword;
      await userData.save();
      console.log('User updated successfully:', userData);
      res.status(200).send({ message: "Password updated successfully" });
    } else {
      console.log('User not found');
      res.status(404).send({ message: "User not found" });
    }
  }),

};

module.exports = userController;
