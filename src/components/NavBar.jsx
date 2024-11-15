import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-brand">Data Science Personal Library</Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Book</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </div>
  </nav>
);

export default NavBar;