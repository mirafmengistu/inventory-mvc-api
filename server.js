const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes middleware
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/suppliers', supplierRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Inventory Management System API',
        endpoints: {
            products: '/api/products',
            categories: '/api/categories',
            suppliers: '/api/suppliers'
        }
    });
});

// Handle 404 - Route not found
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET    /api/products');
    console.log('  POST   /api/products');
    console.log('  GET    /api/products/:id');
    console.log('  PUT    /api/products/:id');
    console.log('  DELETE /api/products/:id');
    console.log('  Similar routes for /api/categories and /api/suppliers');
});