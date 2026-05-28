const supplierModel = require('../models/supplierModel');

const getAllSuppliers = (req, res) => {
    const suppliers = supplierModel.getAllSuppliers();
    res.status(200).json({
        success: true,
        count: suppliers.length,
        data: suppliers
    });
};

const getSupplierById = (req, res) => {
    const { id } = req.params;
    const supplier = supplierModel.getSupplierById(id);
    
    if (!supplier) {
        return res.status(404).json({
            success: false,
            message: `Supplier with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        data: supplier
    });
};

const createSupplier = (req, res) => {
    const { name, contact, phone } = req.body;
    
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Please provide supplier name'
        });
    }
    
    const newSupplier = supplierModel.createSupplier(req.body);
    res.status(201).json({
        success: true,
        message: 'Supplier created successfully',
        data: newSupplier
    });
};

const updateSupplier = (req, res) => {
    const { id } = req.params;
    const updatedSupplier = supplierModel.updateSupplier(id, req.body);
    
    if (!updatedSupplier) {
        return res.status(404).json({
            success: false,
            message: `Supplier with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Supplier updated successfully',
        data: updatedSupplier
    });
};

const deleteSupplier = (req, res) => {
    const { id } = req.params;
    const deleted = supplierModel.deleteSupplier(id);
    
    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: `Supplier with id ${id} not found`
        });
    }
    
    res.status(200).json({
        success: true,
        message: 'Supplier deleted successfully'
    });
};

module.exports = {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};