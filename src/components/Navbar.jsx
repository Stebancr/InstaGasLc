import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navbar.css';



function Navbar({ }) {
  ;
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <Link to="/" className='navbar-logo'>
          <img src="../../img/logo.svg" alt="logo" />
        </Link>
      </h1>
      <ul className="navbar-links">

        <li><Link to="/Nosotros">nosotros</Link></li>
        <li><Link to="/Contactos">contactenos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;