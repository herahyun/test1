import React, { useState } from 'react';
import '../styles/ProductList.css';
import { products } from '../data/products';

export default function ProductList({ category }) {
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 300]);

  const filteredProducts = products.filter((product) => {
    const matchCategory = product.productCategory.toLowerCase() === category.toLowerCase();
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="product-list-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{category.toUpperCase()}</h1>
          <p className="page-subtitle">Discover our curated collection</p>
        </div>

        <div className="product-list-wrapper">
          <aside className="sidebar">
            <div className="filter-section">
              <h3 className="filter-title">FILTERS</h3>
            </div>

            <div className="filter-group">
              <h4 className="filter-heading">Price Range</h4>
              <div className="price-filter">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="price-slider"
                />
                <div className="price-display">
                  <span>${priceRange[0]}</span>
                  <span>-</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h4 className="filter-heading">Category</h4>
              <ul className="filter-list">
                <li><a href="#dresses">Dresses</a></li>
                <li><a href="#tops">Tops</a></li>
                <li><a href="#outerwear">Outerwear</a></li>
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-heading">Size</h4>
              <div className="size-filter">
                <button className="size-btn">XS</button>
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
            </div>
          </aside>

          <main className="product-list-main">
            <div className="product-toolbar">
              <div className="product-count">
                <span>{sortedProducts.length} products</span>
              </div>
              <div className="sort-control">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="products-grid-list">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card-list">
                    <div className="product-image-list">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                      />
                      <div className="product-overlay-list">
                        <button className="btn btn-small" aria-label={`Add ${product.name} to cart`}>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="product-info-list">
                      <h3 className="product-title-list">{product.name}</h3>
                      <p className="product-category-list">{product.category}</p>
                      <div className="product-footer-list">
                        <span className="product-price-list">${product.price}</span>
                        <button className="wishlist-btn-list" aria-label="Add to wishlist">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}