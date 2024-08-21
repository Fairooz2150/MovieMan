import React from 'react';
import './About.css';

function About({ onClose }) {
  return (
    <div className='about-overlay'>
      <div className='about-content'>
        <h2>About MovieMan</h2>
        <p>Welcome to MovieMan! Here you can find all the latest movies and more...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default About;
