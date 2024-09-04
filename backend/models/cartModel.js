const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:['Candidate','Employer']
    },
    products:[{
        type:mongoose.Mongoose.Schema.ObjectId,
        ref:'Product'
    }]
    
})

const Cart = mongoose.Model('Cart',cartSchema)


module.exports = Cart