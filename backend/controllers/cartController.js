const asyncHandler = require('express-async-handler')
const Candidate = require('../models/candidateModel')
const Employer = require('../models/employerModel')
const { Error } = require('mongoose')
const Cart = require('../models/cartModel')



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
        if(!userFound.cart){
            const createdCart = await Cart.create({
                userId:id,
                products:[productId]
            })
            if(!createdCart){
                throw new Error("Item Adding to cart Failed!!")
            }
        }
        if(userFound.cart){
            const updatedCart = await Cart.findByIdAndUpdate(userFound.cart,
                {$set:{products:productId}},
                {runValidators:true,new:true}
            )
            if(!updatedCart){
                throw new Error("Item Adding to cart Failed")
            }
        }

        res.send("Item Added to cart Successfully")     
    }),
    deleteProductFromCart:asyncHandler(async(req,res)=>{
        const id = req.user
        const {productId} = req.params
        const userFound = await Candidate.findById(id) || await Employer.findById(id)
        if(!userFound){
            throw new Error("User Not Found")
        }
        if(!productId){
            throw new Error("Didn't get Product ID")
        }
        const deletedProduct = await Cart.findByIdAndUpdate(userFound.cart,
            {$pull:{products:productId}},
            {new:true,runValidators:true}
        )
        if(!deletedProduct){
            throw new Error("Product deletion failed")
        }
        res.send("Product deleted from the Cart")
    }),
    viewCart:asyncHandler(async(req,res)=>{
        const id = req.user
        const userFound = await Candidate.findById(id) || await Employer.findById(id)
        if(!userFound){
            throw new Error("User Not Found")
        }
        res.send(userFound.cart)
    })
}
module.exports = cartController