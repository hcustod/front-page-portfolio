import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        My Portfolio
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <p>  </p>
        <li className="nav-item">
          <a className="nav-link" href="/projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
