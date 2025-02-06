import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="data:image/jpeg;base64,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" alt="" className="logo-img" />
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item">Register</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button 
          className="hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close navigation"
          >
            &times;
          </button>
          <Link to="/login" className="mobile-nav-item" onClick={toggleMobileMenu}>Login</Link>
          <Link to="/register" className="mobile-nav-item" onClick={toggleMobileMenu}>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;