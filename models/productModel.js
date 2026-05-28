const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

// Helper function to read products from JSON file
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to write products to JSON file
const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// Get next available ID
const getNextId = (products) => {
    if (products.length === 0) return 1;
    return Math.max(...products.map(p => p.id)) + 1;
};

const getAllProducts = () => {
    return readProducts();
};

const getProductById = (id) => {
    const products = readProducts();
    return products.find(product => product.id === parseInt(id));
};

const createProduct = (productData) => {
    const products = readProducts();
    const newProduct = {
        id: getNextId(products),
        ...productData,
        createdAt: new Date().toISOString()
    };
    products.push(newProduct);
    writeProducts(products);
    return newProduct;
};

const updateProduct = (id, updatedData) => {
    const products = readProducts();
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) return null;
    
    products[index] = { ...products[index], ...updatedData, id: parseInt(id) };
    writeProducts(products);
    return products[index];
};

const deleteProduct = (id) => {
    const products = readProducts();
    const filteredProducts = products.filter(product => product.id !== parseInt(id));
    
    if (filteredProducts.length === products.length) return false;
    
    writeProducts(filteredProducts);
    return true;
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};