import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Her Story/Eulogy</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
