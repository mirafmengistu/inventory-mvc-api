const fs = require('fs');
const path = require('path');

const categoriesFilePath = path.join(__dirname, '../data/categories.json');

const readCategories = () => {
    const data = fs.readFileSync(categoriesFilePath, 'utf8');
    return JSON.parse(data);
};

const writeCategories = (categories) => {
    fs.writeFileSync(categoriesFilePath, JSON.stringify(categories, null, 2));
};

const getNextId = (categories) => {
    if (categories.length === 0) return 1;
    return Math.max(...categories.map(c => c.id)) + 1;
};

const getAllCategories = () => {
    return readCategories();
};

const getCategoryById = (id) => {
    const categories = readCategories();
    return categories.find(cat => cat.id === parseInt(id));
};

const createCategory = (categoryData) => {
    const categories = readCategories();
    const newCategory = {
        id: getNextId(categories),
        ...categoryData
    };
    categories.push(newCategory);
    writeCategories(categories);
    return newCategory;
};

const updateCategory = (id, updatedData) => {
    const categories = readCategories();
    const index = categories.findIndex(cat => cat.id === parseInt(id));
    if (index === -1) return null;
    
    categories[index] = { ...categories[index], ...updatedData, id: parseInt(id) };
    writeCategories(categories);
    return categories[index];
};

const deleteCategory = (id) => {
    const categories = readCategories();
    const filteredCategories = categories.filter(cat => cat.id !== parseInt(id));
    
    if (filteredCategories.length === categories.length) return false;
    
    writeCategories(filteredCategories);
    return true;
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};