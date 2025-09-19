import React from 'react';
import { useProducts } from './hooks/useProducts';
import ProductFilters from './components/ProductFilters';
import './App.css';

function App() {
  const { 
    products, 
    loading, 
    error, 
    filters, 
    updateFilters, 
    clearFilters 
  } = useProducts();

  const handleSearchChange = (e) => {
    updateFilters({ searchTerm: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // La búsqueda se ejecuta automáticamente en handleSearchChange
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Catálogo de Productos</h1>
      </header>

      <main className="app-main">
        {/* Barra de búsqueda */}
        <section className="search-section">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={filters.searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Buscar
              </button>
            </div>
          </form>
        </section>

        {/* Filtros */}
        <ProductFilters 
          filters={filters}
          onFiltersChange={updateFilters}
          onClearFilters={clearFilters}
        />

        {/* Estados de carga y error */}
        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>Error: {error}</p>
          </div>
        )}

        {/* Resultados */}
        {!loading && !error && (
          <>
            <div className="results-header">
              <h2>Productos encontrados</h2>
              <span className="results-count">{products.length} productos</span>
            </div>

            {products.length === 0 ? (
              <div className="no-results">
                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
              </div>
            ) : (
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img 
                        src={product.image || '/placeholder-image.jpg'} 
                        alt={product.name}
                        onError={(e) => {
                          e.target.src = '/placeholder-image.jpg';
                        }}
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-details">
                        <span className="product-price">{formatPrice(product.price)}</span>
                        <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                          {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
                        </span>
                      </div>
                      <div className="product-tags">
                        <span className="tag category-tag">{product.category}</span>
                        <span className="tag brand-tag">{product.brand}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Catálogo de Productos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;