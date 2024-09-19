const asyncHandler = require("express-async-handler");
const Candidate = require("../models/candidateModel");
const Employer = require("../models/employerModel");


const adminController = {

    viewCandidate:asyncHandler(async (req,res)=>{

        try {
            const response =  await Candidate.find();
        } catch (error) {
            
        }
    }),

    removeCandidate:asyncHandler((req,res)=>{

    }),

    viewEmployer:asyncHandler((req,res)=>{

    }),

    removeEmployer:asyncHandler((req,res)=>{

    }),

    addPurchasecard:asyncHandler((req,res)=>{

    }),

    editPurchasecard:asyncHandler((req,res)=>{

    }),

    removePurchaseCard:asyncHandler((req,res)=>{

    }),

    generateSalesReport:asyncHandler((req,res)=>{

    }),



    
}

module.exports = adminController