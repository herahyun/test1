import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">VERA MODA</h3>
            <p className="footer-description">
              Discover timeless elegance and modern style with our curated collection of premium fashion.
            </p>
            <div className="footer-social">
              <a href="#facebook" className="social-link" title="Facebook">f</a>
              <a href="#twitter" className="social-link" title="Twitter">𝕏</a>
              <a href="#youtube" className="social-link" title="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">ABOUT</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">SUPPORT</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">LEGAL</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Vera Moda. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}