const fs = require('fs');
const path = require('path');

const suppliersFilePath = path.join(__dirname, '../data/suppliers.json');

const readSuppliers = () => {
    const data = fs.readFileSync(suppliersFilePath, 'utf8');
    return JSON.parse(data);
};

const writeSuppliers = (suppliers) => {
    fs.writeFileSync(suppliersFilePath, JSON.stringify(suppliers, null, 2));
};

const getNextId = (suppliers) => {
    if (suppliers.length === 0) return 1;
    return Math.max(...suppliers.map(s => s.id)) + 1;
};

const getAllSuppliers = () => {
    return readSuppliers();
};

const getSupplierById = (id) => {
    const suppliers = readSuppliers();
    return suppliers.find(sup => sup.id === parseInt(id));
};

const createSupplier = (supplierData) => {
    const suppliers = readSuppliers();
    const newSupplier = {
        id: getNextId(suppliers),
        ...supplierData
    };
    suppliers.push(newSupplier);
    writeSuppliers(suppliers);
    return newSupplier;
};

const updateSupplier = (id, updatedData) => {
    const suppliers = readSuppliers();
    const index = suppliers.findIndex(sup => sup.id === parseInt(id));
    if (index === -1) return null;
    
    suppliers[index] = { ...suppliers[index], ...updatedData, id: parseInt(id) };
    writeSuppliers(suppliers);
    return suppliers[index];
};

const deleteSupplier = (id) => {
    const suppliers = readSuppliers();
    const filteredSuppliers = suppliers.filter(sup => sup.id !== parseInt(id));
    
    if (filteredSuppliers.length === suppliers.length) return false;
    
    writeSuppliers(filteredSuppliers);
    return true;
};

module.exports = {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};