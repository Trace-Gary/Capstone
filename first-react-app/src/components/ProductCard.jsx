import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card" data-category={product.category} style={{ width: '18rem' }}>
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <span className="price">${product.price}</span>
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;