import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Add Product
      </Link>

      <Link to="/products" className="navbar-link">
        All Products
      </Link>
    </div>
  );
};
