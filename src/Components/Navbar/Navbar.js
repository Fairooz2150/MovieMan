import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src="/images/netflix-logo.png" alt="Netflix" />
      <img className='avatar' src="/images/avatar.png" alt="Avatar" />
    </div>
  )
}

export default Navbar
