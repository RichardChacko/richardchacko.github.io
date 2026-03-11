import React from 'react';
import { FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Connect</h3>
            <p>Ready to start your next project? Let's work together!</p>
            <div className="contact-info">
              <p>chackorichard02@gmail.com</p>
              <p>289-980-2544</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/richard-chacko" target="_blank" rel="noopener noreferrer" className="social-link"><FiLinkedin size={18} /> LinkedIn</a>
            <a href="https://github.com/RichardChacko" target="_blank" rel="noopener noreferrer" className="social-link"><FiGithub size={18} /> GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Richard Chacko. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
