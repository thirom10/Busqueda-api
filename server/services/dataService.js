// Array simulando bd
const products = [
  {
    id: 1,
    name: "Laptop Gaming ASUS ROG",
    category: "Electronics",
    price: 1299.99,
    brand: "ASUS",
    description: "High-performance gaming laptop with RTX 4060",
    inStock: true,
    tags: ["gaming", "laptop", "electronics", "asus"]
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 999.99,
    brand: "Apple",
    description: "Latest iPhone with A17 Pro chip and titanium design",
    inStock: true,
    tags: ["smartphone", "apple", "electronics", "mobile"]
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    category: "Footwear",
    price: 150.00,
    brand: "Nike",
    description: "Comfortable running shoes with Air Max technology",
    inStock: false,
    tags: ["shoes", "nike", "running", "sports"]
  },
  {
    id: 4,
    name: "Samsung 4K Smart TV",
    category: "Electronics",
    price: 799.99,
    brand: "Samsung",
    description: "55-inch 4K UHD Smart TV with HDR support",
    inStock: true,
    tags: ["tv", "samsung", "electronics", "4k", "smart"]
  },
  {
    id: 5,
    name: "Adidas Ultraboost 22",
    category: "Footwear",
    price: 180.00,
    brand: "Adidas",
    description: "Premium running shoes with Boost technology",
    inStock: true,
    tags: ["shoes", "adidas", "running", "sports", "boost"]
  },
  {
    id: 6,
    name: "MacBook Pro M3",
    category: "Electronics",
    price: 1999.99,
    brand: "Apple",
    description: "Professional laptop with M3 chip for creative work",
    inStock: true,
    tags: ["laptop", "apple", "electronics", "professional", "m3"]
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: 399.99,
    brand: "Sony",
    description: "Premium noise-canceling wireless headphones",
    inStock: true,
    tags: ["headphones", "sony", "wireless", "noise-canceling"]
  },
  {
    id: 8,
    name: "Levi's 501 Jeans",
    category: "Clothing",
    price: 89.99,
    brand: "Levi's",
    description: "Classic straight-fit denim jeans",
    inStock: true,
    tags: ["jeans", "levis", "clothing", "denim", "classic"]
  }
];

const getAllProducts = () => {
  return products;
};

const searchProducts = (query) => {
  if (!query || query.trim() === '') {
    return products;
  }

  const searchTerm = query.toLowerCase().trim();
  
  return products.filter(product => {
    // Buscar en multiples campos para obtener resultados mas completos
    const searchableText = [
      product.name,
      product.category,
      product.brand,
      product.description,
      ...product.tags
    ].join(' ').toLowerCase();
    
    return searchableText.includes(searchTerm);
  });
};

const getProductsByCategory = (category) => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

const getProductsByBrand = (brand) => {
  return products.filter(product => 
    product.brand.toLowerCase() === brand.toLowerCase()
  );
};

module.exports = {
  getAllProducts,
  searchProducts,
  getProductsByCategory,
  getProductsByBrand
};