import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MOVIEMAN. Developed by Muhammad Fairooz.</p>
      <div className="social-icons">
        <a href="https://fairooz2150.github.io/Fairooz/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-globe2"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-fairooz-0b1136268/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Fairooz2150" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/marsh__mell_o/?igsh=MWhwZmI5NDRsMWoxMQ%3D%3D" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-instagram"></i>
        </a>
        
      </div>
    </footer>
  )
}

export default Footer
