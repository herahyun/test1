import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="#language">Español</a>
              <span className="divider">|</span>
              <a href="#account">Abre Miembro</a>
            </div>
            <div className="top-bar-right">
              <span className="package-icon">📦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-left">
              <Link to="/" className="logo-link">
                <h1 className="logo">VERA MODA</h1>
              </Link>
            </div>

            <div className="navbar-center">
              <div className="search-bar">
                <input type="text" placeholder="Search..." aria-label="Search" />
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
            </div>

            <div className="navbar-right">
              <ul className="nav-links">
                <li><Link to="/women">WOMEN</Link></li>
                <li><Link to="/men">MEN</Link></li>
                <li><Link to="/accessories">ACCESSORIES</Link></li>
                <li><Link to="/sale">SALE</Link></li>
              </ul>

              <div className="navbar-icons">
                <button className="icon-btn" title="Wishlist" aria-label="Wishlist">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="icon-btn cart-btn" title="Cart" aria-label="Cart">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span className="cart-badge">0</span>
                </button>
                <button className="icon-btn" title="Account" aria-label="Account">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>
              </div>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/women">WOMEN</Link>
              <Link to="/men">MEN</Link>
              <Link to="/accessories">ACCESSORIES</Link>
              <Link to="/sale">SALE</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}