const mongoose = require('mongoose')


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength:6
    },
    mobile: {
        type: Number,
        trim: true,
    },
    role: {
        type: String,
        default: "admin",
    },
    
})

const Admin = mongoose.model("Admin",adminSchema)

module.exports = Admin