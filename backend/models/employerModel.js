const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    show: {
      type: Boolean,
    },
    logoImg: {
      type: String,
    },
    coverImg: {
      type: String,
    },
    name: {
      type: String,
      minlength: 3,
      trim: true,
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
    },
    mobile: {
      type: Number,
      trim: true,
    },
    website: {
      type: String,
      default: null,
      trim: true,
    },
    companySize: {
      type: String,
    },
    location: {
      type: {
        type: String, // This will always be 'Point'
        enum: ["Point"],
      },
      coordinates: {
        type: [Number], // Array of numbers: [longitude, latitude]
      },
    },
    role: {
      type: String,
      required: false,
      enum: ["Employer"],
    },
    description: {
      type: String,
    },
    facebook: {
      type: String,
      default: null,
      trim: true,
    },
    twitter: {
      type: String,
      default: null,
      trim: true,
    },
    linkedIn: {
      type: String,
      default: null,
      trim: true,
    },

    profileImg: {
      type: String,
    },
    portfolioImgs: [
      {
        type: String,
      },
    ],
    profileVideo: {
      type: String,
    },
    bookmarkedProfiles: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Candidate",
        
      },
    ],

    foundYear: {
      type: Number,
    },
    showMyProfile: {
      type: Boolean,
    },
    cart: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
    },
    listedJobs:{
      type:[mongoose.Schema.ObjectId],
      ref:"Job"
    }
  },
  {
    timestamps: true,
  }
);

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
