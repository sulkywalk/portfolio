 import React from 'react';
import './Hero.css';
 export default function Hero() {
   return (
    <section className="hero-section">


   <div className="container hero">
  <div className="hero-text">
    <h1 className="hero-title">Hi, I'm Anupriya</h1>
    <p className="hero-subtitle">
      Frontend Developer building clean & responsive web apps with React.
    </p>
    <a href="Resume(anupriya).pdf" download>
  <button className="hero-button">Download Resume</button>
</a>

  </div>

  <div className="hero-image">
    <img 
      src="picture1.jpeg" // or import if using src folder
      alt="Profile"
      width="300"
      height="300"
    />
  </div>
</div>
    </section>
    );
     }  