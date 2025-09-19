const API_BASE_URL = 'http://localhost:3001/api';

class ProductService {
  // Obtener todos los productos
  static async getAllProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo todos los productos:', error);
      throw error;
    }
  }

  // Buscar productos por término de búsqueda
  static async searchProducts(searchTerm) {
    try {
      const url = searchTerm 
        ? `${API_BASE_URL}/products/search?q=${encodeURIComponent(searchTerm)}`
        : `${API_BASE_URL}/products/search`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error buscando productos:', error);
      throw error;
    }
  }

  // Buscar productos con filtros combinados
  static async searchWithFilters(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.searchTerm && filters.searchTerm.trim()) {
        params.append('q', filters.searchTerm);
      }
      if (filters.category && filters.category !== 'all') {
        params.append('category', filters.category);
      }
      if (filters.brand && filters.brand !== 'all') {
        params.append('brand', filters.brand);
      }

      const url = `${API_BASE_URL}/products/search${params.toString() ? '?' + params.toString() : ''}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error buscando productos con filtros:', error);
      throw error;
    }
  }

  // Obtener producto por ID
  static async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo producto por ID:', error);
      throw error;
    }
  }

  // Obtener todas las categorías
  static async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/categories`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo categorías:', error);
      throw error;
    }
  }

  // Obtener todas las marcas
  static async getBrands() {
    try {
      const response = await fetch(`${API_BASE_URL}/products/brands`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo marcas:', error);
      throw error;
    }
  }

  // Buscar productos por categoría
  static async getProductsByCategory(category) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/search?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo productos por categoría:', error);
      throw error;
    }
  }

  // Buscar productos por marca
  static async getProductsByBrand(brand) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/search?brand=${encodeURIComponent(brand)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error obteniendo productos por marca:', error);
      throw error;
    }
  }
}

export default ProductService;