const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

// Crear variables para express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware configuracion (permisos para ver datos de la api)
app.use(cors({
  origin: ['http://localhost:5173'], // Permisos para ver desde el localhost de react vite
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para logging de solicitudes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Rutas
app.use('/api/products', productRoutes);

// Ver el estado del servidor
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Servidor esta funcionando correctamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Endpoint raiz
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Busqueda API',
    description: 'API para funcionalidad de busqueda de productos',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      search: '/api/products/search',
      categories: '/api/products/categories',
      brands: '/api/products/brands'
    }
  });
});

// Manejador para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint no encontrado',
    path: req.originalUrl
  });
});

// Error global
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Algo salió mal'
  });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto: ${PORT}`);
  console.log(`URL base de la API: http://localhost:${PORT}`);
  console.log(`Endpoint de busqueda: http://localhost:${PORT}/api/products/search`);
  console.log(`Estado de la api: http://localhost:${PORT}/api/health`);
});

module.exports = app;