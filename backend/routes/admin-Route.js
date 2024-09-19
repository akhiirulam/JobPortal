const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/adminDashboard',adminController.generateSalesReport);
router.get('/candidateList',adminController.viewCandidate);
router.delete('/removeCandidate/:id', adminController.removeCandidate);
router.get('/employerList',adminController.viewEmployer);
router.delete('/removeEmployer/:id',adminController.removeEmployer);
router.get('/viewPurchaseCard',adminController.viewPurchaseCard);
router.post('/purchaseCard',adminController.addPurchasecard);
router.delete('/removePurchaseCard/:id',adminController.removePurchaseCard);
router.get('/editPurchasecard/:id',adminController.editPurchasecard);
router.put('/updatePurchasecard/:id',adminController.updatePurchasecard)

module.exports = router;