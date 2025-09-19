import React from 'react';
import { useCategories, useBrands } from '../hooks/useProducts';

const ProductFilters = ({ filters, onFiltersChange, onClearFilters }) => {
  const { categories, loading: categoriesLoading } = useCategories();
  const { brands, loading: brandsLoading } = useBrands();

  const handleFilterChange = (filterType, value) => {
    onFiltersChange({ [filterType]: value });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3>Filtros</h3>
        <button 
          className="clear-filters-btn"
          onClick={onClearFilters}
          disabled={filters.category === 'all' && filters.brand === 'all'}
        >
          Limpiar filtros
        </button>
      </div>

      <div className="filters-grid">
        {/* Filtro por categoría */}
        <div className="filter-group">
          <label htmlFor="category-filter">Categoría:</label>
          <select
            id="category-filter"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            disabled={categoriesLoading}
          >
            <option value="all">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por marca */}
        <div className="filter-group">
          <label htmlFor="brand-filter">Marca:</label>
          <select
            id="brand-filter"
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            disabled={brandsLoading}
          >
            <option value="all">Todas las marcas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Indicador de filtros activos */}
      {(filters.category !== 'all' || filters.brand !== 'all') && (
        <div className="active-filters">
          <span className="active-filters-label">Filtros activos:</span>
          {filters.category !== 'all' && (
            <span className="filter-tag">
              Categoría: {filters.category}
              <button 
                onClick={() => handleFilterChange('category', 'all')}
                className="remove-filter"
              >
                ×
              </button>
            </span>
          )}
          {filters.brand !== 'all' && (
            <span className="filter-tag">
              Marca: {filters.brand}
              <button 
                onClick={() => handleFilterChange('brand', 'all')}
                className="remove-filter"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;