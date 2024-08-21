import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import About from '../About/About';

function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      {showTopButton && (
        <button className="top-button" onClick={scrollToTop}>
          Back to Top <i class="bi bi-arrow-up-circle"></i>
        </button>
      )}
    </>
  );
}

export default Navbar;
