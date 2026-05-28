const productModel = require('../models/productModel');

// Get all products (READ - all)
const getAllProducts = (req, res) => {
    const products = productModel.getAllProducts();
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
};

// Get single product by ID (READ - one)
const getProductById = (req, res) => {
    const { id } = req.params;
    const product = productModel.getProductById(id);
    
    if (!product) {
        return res.status(404).json({
            success: false,
            message: `Product with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        data: product
    });
};

// Create new product (CREATE)
const createProduct = (req, res) => {
    const { name, price, quantity, categoryId, supplierId } = req.body;
    
    // Basic validation
    if (!name || !price || !quantity) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, price, and quantity'
        });
    }
    
    const newProduct = productModel.createProduct(req.body);
    res.status(201).json({
        success: true,
        message: 'Product created successfully',
        data: newProduct
    });
};

// Update product (UPDATE)
const updateProduct = (req, res) => {
    const { id } = req.params;
    const updatedProduct = productModel.updateProduct(id, req.body);
    
    if (!updatedProduct) {
        return res.status(404).json({
            success: false,
            message: `Product with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: updatedProduct
    });
};

// Delete product (DELETE)
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const deleted = productModel.deleteProduct(id);
    
    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: `Product with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};