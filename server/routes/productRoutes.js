const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products - Trae todos los productos
router.get('/', productController.getAllProducts);

// GET /api/products/search - Busqueda de productos con query parameters
router.get('/search', productController.searchProducts);

// GET /api/products/categories - Trae todas las categorias disponibles
router.get('/categories', productController.getCategories);

// GET /api/products/brands - Trae todas las marcas disponibles
router.get('/brands', productController.getBrands);

// GET /api/products/:id - Trae un producto por ID
router.get('/:id', productController.getProductById);

module.exports = router;