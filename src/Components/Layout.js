import React from 'react';
import "./Layout.css"
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <div>
      <nav>
        <ul className='nav-bar'>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  )
}

