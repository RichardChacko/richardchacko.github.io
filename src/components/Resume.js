import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Resume = () => {
  const [ref, isVisible] = useScrollReveal();
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Richard_Chacko_Resume.pdf';
    link.download = 'Richard_Chacko_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" ref={ref} className={`resume scroll-reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Download my latest resume</p>
        </div>

        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-mockup">
              <div className="resume-header">
                <div className="resume-line long"></div>
                <div className="resume-line medium"></div>
                <div className="resume-line short"></div>
              </div>
              <div className="resume-body">
                <div className="resume-section">
                  <div className="resume-line medium"></div>
                  <div className="resume-line long"></div>
                  <div className="resume-line short"></div>
                </div>
                <div className="resume-section">
                  <div className="resume-line short"></div>
                  <div className="resume-line long"></div>
                  <div className="resume-line medium"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-info">
            <h3>Ready to work together?</h3>
            <p>
              Download my resume to learn more about my background,
              skills, and experience. Let's discuss how I can contribute
              to your next project.
            </p>

            <button className="btn-primary" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
