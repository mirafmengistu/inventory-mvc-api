const categoryModel = require('../models/categoryModel');

const getAllCategories = (req, res) => {
    const categories = categoryModel.getAllCategories();
    res.status(200).json({
        success: true,
        count: categories.length,
        data: categories
    });
};

const getCategoryById = (req, res) => {
    const { id } = req.params;
    const category = categoryModel.getCategoryById(id);
    
    if (!category) {
        return res.status(404).json({
            success: false,
            message: `Category with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        data: category
    });
};

const createCategory = (req, res) => {
    const { name, description } = req.body;
    
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Please provide category name'
        });
    }
    
    const newCategory = categoryModel.createCategory(req.body);
    res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: newCategory
    });
};

const updateCategory = (req, res) => {
    const { id } = req.params;
    const updatedCategory = categoryModel.updateCategory(id, req.body);
    
    if (!updatedCategory) {
        return res.status(404).json({
            success: false,
            message: `Category with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Category updated successfully',
        data: updatedCategory
    });
};

const deleteCategory = (req, res) => {
    const { id } = req.params;
    const deleted = categoryModel.deleteCategory(id);
    
    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: `Category with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Category deleted successfully'
    });
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};