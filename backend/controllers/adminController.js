const asyncHandler = require("express-async-handler");
const Candidate = require("../models/candidateModel");
const Employer = require("../models/employerModel");
const purchaseCard = require("../models/purchaseCardModel");

const adminController = {
  viewCandidate: asyncHandler(async (req, res) => {
    try {
      const candidates = await Candidate.find();
      res.json(candidates);
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err });
    }
  }),

  removeCandidate: asyncHandler(async (req, res) => {
    const userId = req.params.id;
    console.log(userId); // Log the ID for debugging

    try {
      const deletedCandidate = await Candidate.findByIdAndDelete(userId); // Assuming you're using Mongoose
      if (!deletedCandidate) {
        return res.status(404).json({ message: "Candidate not found" }); // Handle case where candidate is not found
      }
      res.status(200).json({ message: "Candidate deleted successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Server error while deleting candidate" }); // Send an error response
    }
  }),

  viewEmployer: asyncHandler(async (req, res) => {
    try {
      const candidates = await Employer.find();
      res.json(candidates);
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err });
    }
  }),

  removeEmployer: asyncHandler(async (req, res) => {
    const userId = req.params.id;
    console.log(userId);

    try {
      const deletedCandidate = await Employer.findByIdAndDelete(userId);
      if (!deletedCandidate) {
        return res.status(404).json({ message: "Candidate not found" });
      }
      res.status(200).json({ message: "Candidate deleted successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Server error while deleting candidate" });
    }
  }),

  viewPurchaseCard: asyncHandler(async (req, res) => {
    try {
      const cardData = await purchaseCard.find();
      res.json(cardData);
    } catch (err) {
      res.status(500).json({ message: "Server Error", error: err });
    }
  }),

  addPurchasecard: asyncHandler(async (req, res) => {
    try {
      const { name, amount, jobPosting, feature, jobValidity, support } =
        req.body;

      // Create a new plan
      const newPlan = new purchaseCard({
        name,
        amount,
        jobPosting,
        feature,
        jobValidity,
        support,
      });

      await newPlan.save();

      res.status(201).json({
        success: true,
        message: "Plan created successfully",
        plan: newPlan,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }),

  editPurchasecard: asyncHandler(async (req, res) => {
    const purchaseCardId = req.params.id;
    console.log("backend", purchaseCardId);
    
    try {
      // Use findById directly on the model
      const cardData = await purchaseCard.findById(purchaseCardId); 
      console.log(cardData);
      
      // Check if cardData is found
      if (!cardData) {
        return res.status(404).json({ message: "Purchase Card not found" });
      }
      
      res.json(cardData);
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ message: "Server Error", error: err });
    }
  }),

  updatePurchasecard: asyncHandler(async (req, res) => {
    const purchaseCardId = req.params.id;
  
    try {
      const { name, amount, jobPosting, feature, jobValidity, support } = req.body;
  
     
      const updatedData = {
        name,
        amount,
        jobPosting,
        feature,
        jobValidity,
        support,
      };

      const updatedPlan = await purchaseCard.findByIdAndUpdate(
        purchaseCardId,
        { $set: updatedData },
        { new: true, runValidators: true }
      );
  
      if (!updatedPlan) {
        return res.status(404).json({
          success: false,
          message: "Purchase card not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Purchase card updated successfully",
        plan: updatedPlan, // Return the updated plan data
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }),
  



  removePurchaseCard: asyncHandler(async (req, res) => {
    const purchaseCardId = req.params.id;
    console.log(purchaseCardId);

    try {
      const deletedPurchaseCard = await purchaseCard.findByIdAndDelete(
        purchaseCardId
      );
      if (!deletedPurchaseCard) {
        return res.status(404).json({ message: "Candidate not found" });
      }
      res.status(200).json({ message: "Purchase Card deleted successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Server error while deleting candidate" });
    }
  }),

  generateSalesReport: asyncHandler((req, res) => {}),
};

module.exports = adminController;
