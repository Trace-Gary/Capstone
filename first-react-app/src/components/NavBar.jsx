import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="title-img-container">
        <h1 className="faster-one-regular">The Kit Stop</h1><br />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;