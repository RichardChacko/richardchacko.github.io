import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Connect</h3>
            <p>Ready to start your next project? Let's work together!</p>
            <div className="contact-info">
              <p>📧 chackorichard02@gmail.com</p>
              <p>📱 289-980-2544</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/richard-chacko" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Richard Chacko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
