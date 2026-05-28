const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes (Full CRUD)
router.get('/', productController.getAllProducts);      // GET all products
router.get('/:id', productController.getProductById);   // GET single product
router.post('/', productController.createProduct);      // POST create product
router.put('/:id', productController.updateProduct);    // PUT update product
router.delete('/:id', productController.deleteProduct); // DELETE product

module.exports = router;