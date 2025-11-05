import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-inner">
          <h2 className="hero-title">SUMMER<br />COLLECTION</h2>
          <p className="hero-subtitle">Effortlessly Chic Styles for the Season</p>
          <button className="btn btn-hero">SHOP NOW</button>
        </div>
      </div>

      <div className="hero-carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}