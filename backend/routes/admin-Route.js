const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router;

router.get('/adminDashboard',adminController.generateSalesReport);
router.get('/candidateList',adminController.viewCandidate);
router.post('/removeCandidate',adminController.removeCandidate);
router.get('/employerList',adminController.viewEmployer);
router.post('/removeEmployer',adminController.removeEmployer);
router.post('/purchaseCard',adminController.addPurchasecard);
router.get('/removePurchaseCard',adminController.removePurchaseCard);

module.exports = router