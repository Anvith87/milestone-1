import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiz22go3RQkwfDRJsymR7TAhGYfzavJiwWYlKZbe9KeT6S59cThx4bV32B8umL6uZXn9Lug9EM_R-9KvOYHZTDjWSrl-U9I6lAtTuNT0C3QOdFGTjFi1DTq5PIjwXWfAYpOA1S8iPk3h9VZnYF2TKQgdUDkn5fk3LXQMxRbNJZQFHx1wQgU4xJyhyNCVDL/w945-h600-p-k-no-nu/ac6d8000-1532-4125-bf07-8d05594bd1ca.jpeg" alt="Food Wonder Logo" />
      </Link>
    </div>
    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/customize-order">Customize Order</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/sign-up-login">Sign Up / Login</Link></li>
      <li><Link to="/feedback">Feedback</Link></li>
    </ul>
    <div className="navbar-search">
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  </nav>
);

export default Navbar;
