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
    foundedDate: {
      type: Date,
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
      required: true,
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
    instagram: {
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
  },
  {
    timestamps: true,
  }
);

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
