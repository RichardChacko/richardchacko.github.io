import React, { useState, useEffect } from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const roles = [
  'Data Product Manager',
  'Project Manager',
  'Full Stack Developer',
  'Product Operations Manager',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Richard Chacko</span>
          </h1>
          <p className="hero-subtitle">
            I am a{' '}
            <span className={`role-text ${fade ? 'fade-in' : 'fade-out'}`}>
              {roles[roleIndex]}
            </span>
          </p>
          <p className="hero-description">
            Driving data-driven product strategy and delivering impactful solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }>
              Learn More
            </button>
            <button className="btn-secondary" onClick={() =>
              document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })
            }>
              View Resume
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/richard-chacko" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin size={22} />
            </a>
            <a href="https://github.com/RichardChacko" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub size={22} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-photo-wrapper">
            <img src="/profilephoto.png" alt="Richard Chacko" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
