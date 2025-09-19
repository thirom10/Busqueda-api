const dataService = require('../services/dataService');

getAllProducts = (req, res) => {
  try {
    const products = dataService.getAllProducts();
    
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: products,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving products',
      error: error.message
    });
  }
};

const searchProducts = (req, res) => {
  try {
    const { q, category, brand } = req.query;
    let results = [];

    // Buscar productos por diferentes parametros
    if (q) {
      // Buscar por query string
      results = dataService.searchProducts(q);
    } else if (category) {
      // Buscar por categoria
      results = dataService.getProductsByCategory(category);
    } else if (brand) {
      // Buscar por marca
      results = dataService.getProductsByBrand(brand);
    } else {
      // Si no hay parametros de busqueda, devolver todos los productos
      results = dataService.getAllProducts();
    }

    res.status(200).json({
      success: true,
      message: `Busqueda completada. Se encontraron ${results.length} productos`,
      data: results,
      count: results.length,
      searchParams: { q, category, brand }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error buscando los productos',
      error: error.message
    });
  }
};

const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const products = dataService.getAllProducts();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado',
        data: null
      });
    }

    res.status(200).json({
      success: true,
      message: 'Producto encontrado exitosamente',
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error buscando el producto',
      error: error.message
    });
  }
};

const getCategories = (req, res) => {
  try {
    const products = dataService.getAllProducts();
    const categories = [...new Set(products.map(product => product.category))];

    res.status(200).json({
      success: true,
      message: 'Categorias encontradas exitosamente',
      data: categories,
      count: categories.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error buscando las categorias',
      error: error.message
    });
  }
};

const getBrands = (req, res) => {
  try {
    const products = dataService.getAllProducts();
    const brands = [...new Set(products.map(product => product.brand))];

    res.status(200).json({
      success: true,
      message: 'Marcas encontradas exitosamente',
      data: brands,
      count: brands.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error buscando las marcas',
      error: error.message
    });
  }
};

module.exports = {
  getAllProducts,
  searchProducts,
  getProductById,
  getCategories,
  getBrands
};