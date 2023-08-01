import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><button onClick={() => handleAddToCart()}>Add to Cart</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
