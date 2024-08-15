const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { Error } = require('mongoose')
const bcrypt = require('bcryptjs')


const userController ={
    viewUserProfile: asyncHandler(async(req,res)=>{
    const {email} = req.user

    const userFound = await User.findOne({email})
    if(!userFound){
        throw new Error("User Not Found")
    }
    res.send({
        name:userFound.name,
        designation:userFound.designation,
        location:userFound.address,
        phone:userFound.mobile,
        email:userFound.email,
        about:userFound.bio,
        website:userFound.personalWebsite,
        profileImg:userFound.profileImg,
        images:userFound.portfolioImgs,
        video:userFound.profileVideo,
        jobList:userFound.listedJobs
    })

    }),
    viewPersonProfile:asyncHandler(async(req,res)=>{
        const {id} = req.params
        const userFound = User.findById(id)
        if(!userFound){
            throw new Error("User Not Found")
        }
        res.send({
            name:userFound.name,
            designation:userFound.designation,
            location:userFound.address,
            phone:userFound.mobile,
            email:userFound.email,
            bio:userFound.bio,
            dob:userFound.DOB,
            resume:userFound.resume,
            experience:userFound.experience,
            gender:userFound.gender,
            qualification:userFound.educationalQualification,
            languages:userFound.languages,
            profileImg:userFound.profileImg,
            images:userFound.portfolioImgs,
            video:userFound.profileVideo,
            awards:userFound.awards,
            educationalHistory:userFound.educationalHistory,
            workHistory:userFound.previousWorkHistory



        })
    }),
    viewCompanyProfile:asyncHandler(async(req,res)=>{
        const {id} = req.params
        const companyFound = User.findById(id)
        if(!companyFound){
            throw new Error("Company Not Found")
        }
        res.send({
            name:companyFound.name,
            designation:companyFound.designation,
            location:companyFound.address,
            phone:companyFound.mobile,
            email:companyFound.email,
            about:companyFound.bio,
            website:companyFound.personalWebsite,
            profileImg:companyFound.profileImg,
            images:companyFound.portfolioImgs,
            video:companyFound.profileVideo,
            jobList:companyFound.listedJobs
        })
    }),
    forgotPassword:asyncHandler(async(req,res)=>{
        const {email,password} = req.body
        const userFound = User.findOne({email})
        if(!userFound){
            throw new Error("User doesn't exist!!!")
        }

    })

}

module.exports = userController