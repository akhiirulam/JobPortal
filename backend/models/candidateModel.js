const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
   
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
    name: {
      type: String,
      trim: true,
    },
    profileImg: {
      type: String,
    },
    mobile: {
      type: Number,
      trim: true,
    },
    DOB: {
      type: Date,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    qualification: {
      type: String,
    },
    experience: {
      type: String,
    },
    languages: [
      {
        type: String,
      },
    ],
    salary: {
      type: Number,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    showMyProfile: {
      type: Boolean,
    },
    jobTitle: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["Candidate"],
    },
    designation: {
      type: String,
      trim: true,
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
    location: {
      type: String,
      trim: true,
    },
    friendlyAddress: {
      type: String,
      trim: true,
    },
    personalWebsite: {
      type: String,
      default: null,
      trim: true,
    },
    profileVideo: {
      type: String,
    },
    bookmarkedProfiles: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Employer",
      },
    ],
    listedJobs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Job",
      },
    ],
    educationalHistory: [
      {
        collegeName: {
          type: String,
          trim: true,
        },
        degreeName: {
          type: String,
          trim: true,
        },
        educationDescription: {
          type: String,
          trim: true,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    previousWorkHistory: [
      {
        previousDesignation: {
          type: String,
          trim: true,
        },
        previousCompanyName: {
          type: String,
          trim: true,
        },
        reasonForQuit: {
          type: String,
          trim: true,
        },
        previousStartingDate: {
          type: Date,
        },
        previousEndDate: {
          type: Date,
        },
      },
    ],
    
    portfolioImgs: [
      {
        type: String,
      },
    ],
   
    resume: [
      {
        type: String,
      },
    ],
    awards: [
      {
        occasionName: {
          type: String,
          trim: true,
        },
        awardName: {
          type: String,
          trim: true,
        },
        shortSummery: {
          type: String,
          trim: true,
        },
        dateOfCertification: {
          type: Date,
        },
      },
    ],
    professionalSkills: [
      {
        type: String,
        trim: true,
      },
    ],
    cart: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
    },
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
