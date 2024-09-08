const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const { Error } = require("mongoose");
const Product = require("../models/productModel");


const productController = {
    createProduct:asyncHandler(async(req,res)=>{
        const {productName,price,tags,category,SKU,features,description} = req.body
        if(!productName || !price || !tags || !category || !SKU || !features){
            throw new Error("Enter Essential Data")
        }
        const id = req.user
        const userFound = await Admin.findById(id)
        if(!userFound){
            throw new Error("You aren't a admin to add products")
        }
        const createdProduct = await Product.create({
           title:productName,
           price,
           description,
           category,
           tags,
           features,
        })
        if(!createdProduct){
            throw new Error("Creating Product Failed")
        }
        console.log(createdProduct);
        res.send("Product Created Successfully")
    }),
    viewProduct:asyncHandler(async(req,res)=>{
        const {id} = req.params
        const productFound = await Product.findById(id)
        if(!productFound){
            throw new Error("Product Not Found")
        }
        res.send(productFound)
    }),
    editProduct:asyncHandler(async(req,res)=>{
        const id = req.body
        const userFound = await Admin.findById(id)
        if(!userFound){
            throw new Error("You aren't a admin to add products")
        }
        const {productName,price,tags,category,SKU,features,description} = req.body
        const {productId} = req.params
        if(!productId){
            throw new Error("Provide Essential Data")
        }
        const productFound = await Product.findById(id)
        if(!productFound){
            throw new Error("Product Not Found!!")
        }
        const updates ={}

        if(productName){
            updates.title = productName
        }
        if(price){
            updates.price = price
        }
        if(tags){
            updates.tags = tags
        }
        if(category){
            updates.category = category
        }
        if(SKU){
            updates.SKU = SKU
        }
        if(features){
            updates.features = features
        }
        if(description){
            updates.description = description
        }

        const updatedProduct = await Product.findByIdAndUpdate(id,{$set:updates},{new:true,runValidators:true})
        if(!updatedProduct){
            throw new Error("Product Update Failed!!")
        }
        res.send("Product Updated")

    }),
    deleteProduct:asyncHandler(async(req,res)=>{
        const id = req.body
        const userFound = await Admin.findById(id)
        if(!userFound){
            throw new Error("You aren't a admin to add products")
        }
        const {productId} = req.params
        if(!productId){
            throw new Error("Provide Essential Data")
        }
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct){
            throw new Error("Product Not Deleted!!")
        }
        res.send("Product Deleted")
    })
}