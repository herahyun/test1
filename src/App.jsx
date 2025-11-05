import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<ProductList category="women" />} />
          <Route path="/men" element={<ProductList category="men" />} />
          <Route path="/accessories" element={<ProductList category="accessories" />} />
          <Route path="/sale" element={<ProductList category="sale" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;