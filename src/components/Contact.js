import React, { useState } from 'react';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:chackorichard02@gmail.com?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className={`contact scroll-reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect With Me</h2>
          <p className="section-subtitle">Have a question or want to work together? Drop me a message.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-details">
            <h3>Let's talk</h3>
            <p>I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon blue">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:chackorichard02@gmail.com">chackorichard02@gmail.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon green">
                  <FiUser size={20} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/richard-chacko" target="_blank" rel="noopener noreferrer">richard-chacko</a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <FiUser size={16} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FiMail size={16} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FiMessageSquare size={16} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                rows="5"
                required
              />
            </div>

            <button type="submit" className={`btn-submit ${submitted ? 'submitted' : ''}`}>
              {submitted ? 'Opening mail client...' : <>Send Message <FiSend size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
