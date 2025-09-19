import { useState, useEffect, useCallback } from 'react';
import ProductService from '../services/productService';

// Hook principal para manejar productos con filtros
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'all',
    brand: 'all'
  });

  // Función para buscar productos con filtros
  const searchProducts = async (newFilters = filters) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await ProductService.searchWithFilters(newFilters);
      setProducts(response.data || []);
    } catch (err) {
      setError(err.message || 'Error al buscar productos');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar filtros
  const updateFilters = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    searchProducts(updatedFilters);
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    const clearedFilters = {
      searchTerm: '',
      category: 'all',
      brand: 'all'
    };
    setFilters(clearedFilters);
    searchProducts(clearedFilters);
  };

  // Cargar productos iniciales
  useEffect(() => {
    searchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    filters,
    searchProducts,
    updateFilters,
    clearFilters
  };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ProductService.getCategories();
      setCategories(response.data || []);
    } catch (err) {
      setError('Error al cargar las categorías');
      console.error('Error loading categories:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return {
    categories,
    loading,
    error,
    loadCategories
  };
};

export const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadBrands = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ProductService.getBrands();
      setBrands(response.data || []);
    } catch (err) {
      setError('Error al cargar las marcas');
      console.error('Error loading brands:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBrands();
  }, [loadBrands]);

  return {
    brands,
    loading,
    error,
    loadBrands
  };
};