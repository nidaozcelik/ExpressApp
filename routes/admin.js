const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
const  getProductsByCategoryId = require('../models/product');

router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products/:productid', adminController.getEditProduct);

router.post('/products', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;