import React from 'react';
import './About.css';

function About({ onClose }) {
    return (
        <div className='about-overlay'>
            <div className='about-content'>
                <button className='close-btn' onClick={onClose}>X</button>
                <h2>About Movie Man</h2>
                <p>
                    Welcome to <strong>Movie Man</strong>, your go-to platform for discovering and enjoying the latest and greatest in cinema. Whether you're looking for trending titles, the latest releases, or upcoming movie sensations, Movie Man has got you covered.
                </p>
                <h3>What We Offer:</h3>
                <ul>
                    <li><strong>Trending Movies:</strong> Stay up-to-date with what's hot in the movie world.</li>
                    <li><strong>Genre-Based Recommendations:</strong> From <strong>comedy</strong> and <strong>romance</strong> to <strong>action</strong>, <strong>horror</strong>, and <strong>documentaries</strong>, explore movies that match your taste.</li>
                    <li><strong>Easy Access to Movie Content:</strong> By simply clicking on any movie poster, get instant access to teasers, trailers, behind-the-scenes (BTS) clips, and comprehensive details such as release dates, ratings, and overviews.</li>
                </ul>
                <h3>Developer & Repository:</h3>
                <p>
                    This project is crafted with love and dedication by <strong>John Abraham</strong>. You can explore the project and contribute on <a href="https://github.com/Fairooz2150/eASY-SHOP" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
                <h3>Connect with Me:</h3>
                <p>Stay connected through my social profiles:</p>
                <ul className="social-links">
                    <li> <a href="https://fairooz2150.github.io/Fairooz/" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-globe2"></i>
                    </a> </li>
                    <li><a href="https://www.linkedin.com/in/muhammad-fairooz-0b1136268/?trk=public-profile-join-page" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-linkedin"></i>
                    </a> </li>
                    <li><a href="https://github.com/Fairooz2150" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-github"></i>
                    </a> </li>
                    <li><a href="https://www.instagram.com/marsh__mell_o/?igsh=MWhwZmI5NDRsMWoxMQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-instagram"></i>
                    </a></li>
                </ul>
            </div>
        </div>
    );
}

export default About;
