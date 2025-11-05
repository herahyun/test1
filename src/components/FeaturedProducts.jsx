import React from 'react';
import './FeaturedProducts.css';
import { products } from '../data/products';

export default function FeaturedProducts({ category = 'dresses' }) {
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="featured-products">
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image-placeholder"
              />
              <div className="product-overlay">
                <button className="btn btn-small" aria-label={`Add ${product.name} to cart`}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="wishlist-btn" aria-label="Add to wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}