import React, { useState } from 'react';

const ProductList = () => {
    const [category, setCategory] = useState('all');
  
    const products = [
      { id: 1, name: 'Arsenal', description: 'Home Jersey', price: 65, category: 'Shirts', image: './images/arsenal red kit.webp' },
      { id: 2, name: 'Arsenal', description: 'Special competitions Jersey', price: 70, category: 'Shirts', image: './images/arsenal blue kit.webp' },
      { id: 3, name: 'Arsenal', description: 'Away Jersey', price: 60, category: 'Shirts', image: './images/arsenal black kit.webp' },
      { id: 4, name: 'Arsenal', description: 'Home Shorts', price: 20, category: 'Shorts', image: './images/Arsenal Shorts White.png' },
      { id: 5, name: 'Arsenal', description: 'Special Competitions Shorts', price: 30, category: 'Shorts', image: './images/Arsenal Shorts Light Blue.png' },
      { id: 6, name: 'Arsenal', description: 'Away Shorts', price: 25, category: 'Shorts', image: './images/Arsenal Shorts Blue.png' },
      { id: 7, name: 'Arsenal', description: 'Red Gloves', price: 13, category: 'Gloves', image: './images/Arsenal Gloves Red.png' },
      { id: 8, name: 'Arsenal', description: 'Blue Gloves', price: 10, category: 'Gloves', image: './images/Arsenal Gloves Blue.png' },
      { id: 9, name: 'Arsenal', description: 'Black Gloves', price: 12, category: 'Gloves', image: './images/Arsenal Gloves Black.png' },
    ];
  
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    return (
      <div className="container">
        <Filter setCategory={setCategory} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
export default ProductList;