import React, { useState } from 'react';
import './Categories.css';
import FeaturedProducts from './FeaturedProducts';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('dresses');
  const categories = ['DRESSES', 'TOPS', 'OUTERWEAR'];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>

        <FeaturedProducts category={activeCategory} />
      </div>
    </section>
  );
}