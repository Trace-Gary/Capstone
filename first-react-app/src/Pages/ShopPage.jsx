import React from 'react';

const ShopPage = () => {
  const products = [
    {
      category: 'Shirts',
      image: './images/arsenal red kit.webp',
      alt: 'Arsenal red jersey',
      title: 'Arsenal',
      description: 'Home Jersey',
      price: '$65',
    },
    {
      category: 'Shirts',
      image: './images/arsenal blue kit.webp',
      alt: 'Arsenal blue jersey',
      title: 'Arsenal',
      description: 'Special competitions Jersey.',
      price: '$70',
    },
    {
      category: 'Shirts',
      image: './images/arsenal black kit.webp',
      alt: 'Arsenal black jersey',
      title: 'Arsenal',
      description: 'Away Jersey',
      price: '$60',
    },
    {
      category: 'Shorts',
      image: './images/Arsenal Shorts White.png',
      alt: 'Arsenal white shorts',
      title: 'Arsenal',
      description: 'Home Shorts',
      price: '$20',
    },
    {
      category: 'Shorts',
      image: './images/Arsenal Shorts Light Blue.png',
      alt: 'Arsenal light blue shorts',
      title: 'Arsenal',
      description: 'Special Competitions Shorts',
      price: '$30',
    },
    {
      category: 'Shorts',
      image: './images/Arsenal Shorts Blue.png',
      alt: 'Arsenal blue shorts',
      title: 'Arsenal',
      description: 'Away Shorts',
      price: '$25',
    },
    {
      category: 'Gloves',
      image: './images/Arsenal Gloves Red.png',
      alt: 'Arsenal red gloves',
      title: 'Arsenal',
      description: 'Red Gloves',
      price: '$13',
    },
    {
      category: 'Gloves',
      image: './images/Arsenal Gloves Blue.png',
      alt: 'Arsenal blue gloves',
      title: 'Arsenal',
      description: 'Blue Gloves',
      price: '$10',
    },
    {
      category: 'Gloves',
      image: './images/Arsenal Gloves Black.png',
      alt: 'Arsenal black gloves',
      title: 'Arsenal',
      description: 'Black Gloves',
      price: '$12',
    }
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card" data-category={product.category} style={{ width: '18rem' }}>
              <img className="card-img-top" src={product.image} alt={product.alt} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <span className="price">{product.price}</span>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;