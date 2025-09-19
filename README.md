# Búsqueda API - Sistema de Catálogo de Productos

Un sistema completo de búsqueda y filtrado de productos con una API REST en Node.js y una interfaz de usuario moderna en React.

## 📋 Descripción

Este proyecto consiste en una aplicación web full-stack que permite buscar, filtrar y visualizar productos de un catálogo. Incluye funcionalidades de búsqueda por texto, filtrado por categorías y marcas, con una interfaz de usuario intuitiva y responsiva.

## 🏗️ Arquitectura del Proyecto

```
Busqueda-api/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # Servicios para API calls
│   │   ├── App.jsx        # Componente principal
│   │   └── main.jsx       # Punto de entrada
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend (Node.js + Express)
│   ├── controllers/       # Controladores de rutas
│   ├── routes/           # Definición de rutas
│   ├── services/         # Lógica de negocio
│   ├── index.js          # Servidor principal
│   └── package.json
└── README.md
```

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **CORS** - Middleware para habilitar CORS
- **Nodemon** - Herramienta de desarrollo para reinicio automático

### Frontend
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Build tool y dev server
- **React Icons** - Biblioteca de iconos
- **ESLint** - Linter para JavaScript

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación del Backend

1. Navega al directorio del servidor:
```bash
cd server
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3001`

### Instalación del Frontend

1. Navega al directorio del cliente:
```bash
cd client
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔌 API Endpoints

### Base URL: `http://localhost:3001/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Información general de la API |
| GET | `/health` | Estado del servidor |
| GET | `/products` | Obtener todos los productos |
| GET | `/products/search` | Buscar productos con filtros |
| GET | `/products/categories` | Obtener todas las categorías |
| GET | `/products/brands` | Obtener todas las marcas |
| GET | `/products/:id` | Obtener producto por ID |

### Parámetros de Búsqueda

La búsqueda de productos (`/products/search`) acepta los siguientes query parameters:

- `q` - Término de búsqueda (busca en nombre, descripción, categoría, marca y tags)
- `category` - Filtrar por categoría específica
- `brand` - Filtrar por marca específica

**Ejemplos:**
```
GET /api/products/search?q=laptop
GET /api/products/search?category=Electronics
GET /api/products/search?brand=Apple
GET /api/products/search?q=gaming&category=Electronics
```

## 📊 Estructura de Datos

### Producto
```json
{
  "id": 1,
  "name": "Laptop Gaming ASUS ROG",
  "category": "Electronics",
  "price": 1299.99,
  "brand": "ASUS",
  "description": "High-performance gaming laptop with RTX 4060",
  "inStock": true,
  "tags": ["gaming", "laptop", "electronics", "asus"]
}
```

### Respuesta de la API
```json
{
  "success": true,
  "message": "Búsqueda completada. Se encontraron 5 productos",
  "data": [...],
  "count": 5,
  "searchParams": {
    "q": "laptop",
    "category": null,
    "brand": null
  }
}
```

## 🎨 Características del Frontend

### Componentes Principales

- **App.jsx** - Componente principal que maneja el estado global
- **ProductFilters.jsx** - Componente para filtros de categoría y marca
- **useProducts.js** - Hook personalizado para manejo de productos
- **ProductService.js** - Servicio para comunicación con la API

### Funcionalidades

- ✅ Búsqueda en tiempo real
- ✅ Filtrado por categorías
- ✅ Filtrado por marcas
- ✅ Visualización de productos en grid
- ✅ Estados de carga y error
- ✅ Contador de resultados
- ✅ Limpieza de filtros
- ✅ Diseño responsivo

## 🛠️ Scripts Disponibles

### Backend (server/)
```bash
npm start          # Iniciar servidor en producción
npm run dev        # Iniciar servidor en desarrollo con nodemon
npm test           # Ejecutar tests (no implementado)
```

### Frontend (client/)
```bash
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Construir para producción
npm run preview    # Previsualizar build de producción
npm run lint       # Ejecutar linter
```

## 🔧 Configuración

### Variables de Entorno

El proyecto actualmente usa configuración hardcodeada, pero se puede extender para usar variables de entorno:

**Backend:**
- `PORT` - Puerto del servidor (default: 3001)

**Frontend:**
- La URL de la API está configurada en `src/services/productService.js`

### CORS

El servidor está configurado para aceptar requests desde:
- `http://localhost:5173` (Vite dev server)

## 📝 Datos de Ejemplo

El proyecto incluye un conjunto de productos de ejemplo que incluyen:
- Laptops (ASUS, Apple)
- Smartphones (iPhone)
- Televisores (Samsung)
- Calzado deportivo (Nike, Adidas)
- Auriculares (Sony)
- Ropa (Levi's)

## 🚀 Despliegue

### Backend
1. Construir la aplicación
2. Configurar variables de entorno
3. Ejecutar `npm start`

### Frontend
1. Ejecutar `npm run build`
2. Servir los archivos estáticos generados en `dist/`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Autor

Desarrollado como proyecto de demostración de una API de búsqueda con interfaz React.

---

**Nota:** Este es un proyecto de demostración que utiliza datos simulados en memoria. Para un entorno de producción, se recomienda integrar con una base de datos real.