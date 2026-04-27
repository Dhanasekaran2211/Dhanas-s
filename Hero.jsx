import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="video-container">
                <video className="hero-video" autoPlay loop muted>
                    <source src="your-video-source.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <h1>Your Title Here</h1>
                <p>Your description here.</p>
            </div>
        </div>
    );
};

export default Hero;