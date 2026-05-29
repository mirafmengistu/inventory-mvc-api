# Inventory Management API

A RESTful Inventory Management API built with Node.js and Express, following the MVC (Model-View-Controller) architecture pattern with **persistent JSON file storage**.

## Features

- ✅ Full CRUD operations for **Products**
- ✅ Full CRUD operations for **Categories** 
- ✅ Full CRUD operations for **Suppliers**
- ✅ Persistent data storage using JSON files
- ✅ MVC architecture with clean separation of concerns
- ✅ Proper HTTP status codes and error handling
- ✅ RESTful API design

## Project Structure

```
inventory-mvc-api/
├── models/
│   ├── productModel.js      # Product CRUD with JSON storage
│   ├── categoryModel.js     # Category CRUD with JSON storage
│   └── supplierModel.js     # Supplier CRUD with JSON storage
├── controllers/
│   ├── productController.js     # Product request handlers
│   ├── categoryController.js    # Category request handlers
│   └── supplierController.js    # Supplier request handlers
├── routes/
│   ├── productRoutes.js     # Product API routes
│   ├── categoryRoutes.js    # Category API routes
│   └── supplierRoutes.js    # Supplier API routes
├── data/
│   ├── products.json        # Persistent product data
│   ├── categories.json      # Persistent category data
│   └── suppliers.json       # Persistent supplier data
├── server.js                # Application entry point
├── package.json
└── .gitignore
```

## Setup & Installation

```bash
# Clone the repository
git clone https://github.com/mirafmengistu/inventory-mvc-api.git

# Navigate to project directory
cd inventory-mvc-api

# Install dependencies
npm install

# Start the server
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Products (Full CRUD)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product by ID |
| DELETE | `/api/products/:id` | Delete a product by ID |

**POST / PUT Request Body Example:**
```json
{
  "name": "Gaming Laptop",
  "price": 1299.99,
  "quantity": 10,
  "categoryId": 1,
  "supplierId": 1
}
```

### Categories (Full CRUD)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:id` | Get a category by ID |
| POST | `/api/categories` | Create a new category |
| PUT | `/api/categories/:id` | Update a category by ID |
| DELETE | `/api/categories/:id` | Delete a category by ID |

**POST / PUT Request Body Example:**
```json
{
  "name": "Electronics",
  "description": "Electronic devices and accessories"
}
```

### Suppliers (Full CRUD)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/suppliers` | Get all suppliers |
| GET | `/api/suppliers/:id` | Get a supplier by ID |
| POST | `/api/suppliers` | Create a new supplier |
| PUT | `/api/suppliers/:id` | Update a supplier by ID |
| DELETE | `/api/suppliers/:id` | Delete a supplier by ID |

**POST / PUT Request Body Example:**
```json
{
  "name": "Tech Distributors Inc.",
  "contact": "john@techdist.com",
  "phone": "555-0101"
}
```

## Sample API Requests (cURL)

### Create a product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","price":999.99,"quantity":10,"categoryId":1,"supplierId":1}'
```

### Get all products
```bash
curl http://localhost:3000/api/products
```

### Update a product
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":899.99,"quantity":8}'
```

### Delete a product
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Error Responses

The API returns appropriate HTTP status codes:

- `200` - Success (GET, PUT)
- `201` - Created (POST)
- `400` - Bad Request (missing required fields)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

**Example Error Response:**
```json
{
  "success": false,
  "message": "Product with id 99 not found"
}
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **File System (fs)** - Persistent JSON storage

## Commit History

This project was built following best practices with atomic commits:
1. Initialize project with Express
2. Create JSON data files
3. Implement product model
4. Add category and supplier models
5. Implement controllers
6. Create RESTful routes
7. Final testing and completion