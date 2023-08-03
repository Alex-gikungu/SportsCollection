// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
