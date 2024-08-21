import React, { useState } from 'react';
import "./Navbar.css";
import About from '../About/About';

function Navbar() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
      <div className='navbar'>
        <img
          className='logo'
          src="/images/MovieMan-logo.png"
          alt="MovieMan"
          onClick={toggleAbout} 
        />
      </div>
      {showAbout && <About onClose={toggleAbout} />}
    </>
  );
}

export default Navbar;
