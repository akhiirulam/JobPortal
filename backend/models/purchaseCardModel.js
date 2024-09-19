const mongoose = require('mongoose');

const purchaseCardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  jobPosting: {
    type: Number,
    required: true,
  },
  feature: {
    type: Number,
    required: true,
  },
  jobValidity: {
    type: Number,
    required: true,
  },
  support: {
    type: String,
    required: true,
  },
});

const purchaseCard = mongoose.model('purchaseCard', purchaseCardSchema);
module.exports = purchaseCard;