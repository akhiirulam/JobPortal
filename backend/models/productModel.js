const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Review'
        }
    ],
    category:{
        type:String,
        required:true,
    },
    tags:[{
        type:String,
    }],
    features:[{
        type:String
    }],
    picture:{
        type:String
    }
})

const Product = mongoose.model("Product",productSchema)

module.exports = Product