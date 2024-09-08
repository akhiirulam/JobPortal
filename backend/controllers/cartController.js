const asyncHandler = require('express-async-handler')
const Candidate = require('../models/candidateModel')
const Employer = require('../models/employerModel')
const { Error } = require('mongoose')



const cartController = {
    addProduct:asyncHandler(async(req,res)=>{
        const id = req.user
        const {productId} = req.params
        const userFound = await Candidate.findById(id) || await Employer.findById(id)
        if(!userFound){
            throw new Error("User Not Found")
        }
        if(!productId){
            throw new Error("Didn't get Product ID")
        }
        const updatedCart = await Candidate.findByIdAndUpdate(id,{})
    })
}