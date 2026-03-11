import React from 'react';

const About = () => {
  const skillCategories = [
    {
      category: 'Technical & Engineering Stack',
      skills: [
        { name: 'Systems & Scripting', description: 'Proficient in Python and R for deep-dive data analysis, alongside C# for understanding and directing back-end architecture.' },
        { name: 'Web Technologies', description: 'Hands-on experience with HTML, CSS, and JavaScript to bridge the gap between initial UI/UX designs and front-end implementation.' },
        { name: 'Data & Database Management', description: 'Expert use of SQL and BigQuery to query complex telemetry datasets, validate product performance, and drive data-driven decision-making.' },
        { name: 'Hardware-Software Synthesis', description: 'Translating physical mechanical constraints into software requirements to ensure a unified system from the firmware up.' },
        { name: 'Industrial Design Collaboration', description: 'Working alongside mechanical engineers to define form factors, physical specs, and the "Day Zero" user experience through Quick-Start Guides.' },
      ],
    },
    {
      category: 'Product Lifecycle & Strategy',
      skills: [
        { name: '0-1 Product Development', description: 'Leading the full lifecycle from early-stage conceptual sketches and prototyping to market-ready software solutions.' },
        { name: 'Validation & A/B Testing', description: 'Designing experiments and analyzing user behavior to iterate on UI/UX and improve system efficiency.' },
        { name: 'Go-To-Market (GTM) Strategy', description: 'Coordinating across engineering and commercial teams to ensure products are both technically sound and market-ready.' },
      ],
    },
    {
      category: 'Business & Customer Leadership',
      skills: [
        { name: 'The Customer-Business Intersection', description: 'Acting as a dedicated advocate for both user needs and commercial objectives to build high-trust, reliable products.' },
        { name: 'Technical Translation', description: 'Communicating complex engineering jargon into clear, actionable insights for stakeholders and customers to ensure project alignment.' },
        { name: 'Strategic Roadmapping', description: 'Balancing technical debt, hardware limitations, and customer feedback to prioritize high-impact feature releases.' },
      ],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Product Manager driven by the "0 to 1" process, specializing in the complex space where physical hardware meets digital interfaces. My approach is deeply hands-on, beginning with initial conceptual designs and the user's first touchpoint through quick-start guides. I work directly alongside mechanical engineers to define how a product takes shape, ensuring the industrial design aligns with our technical goals.
            </p>
            <p>
              Once a foundation is built, I lead the validation phase through A/B testing and user research, translating those real-world insights into technical requirements for our software engineers to refine the UI and overall system performance.
            </p>
            <p>
              Beyond the technical lifecycle, I position myself at the intersection of the customer and the business, acting as a dedicated advocate for both. My goal is to bridge the gap between user expectations and commercial objectives, delivering solutions that make our customers feel confident in the technology and ensuring the products we build are as reliable as they are innovative.
            </p>

            <div className="about-info-grid">
              <div className="about-info-card">
                <div className="about-info-icon blue">🎓</div>
                <div>
                  <h4>Education</h4>
                  <p>Trent University — BBA, Technology Management</p>
                  <span className="about-info-date">Sep. 2020 – Apr. 2025</span>
                </div>
              </div>
              <div className="about-info-card">
                <div className="about-info-icon green">📜</div>
                <div>
                  <h4>Certifications</h4>
                  <p>CSPO, AWS Certified Cloud Practitioner (CLF-C02), Google Cloud Digital Leader</p>
                </div>
              </div>
              <div className="about-info-card">
                <div className="about-info-icon violet">🌐</div>
                <div>
                  <h4>Languages</h4>
                  <p>English, Malayalam, Hindi</p>
                </div>
              </div>
            </div>

            <div className="skills">
              {skillCategories.map((cat, catIndex) => (
                <div key={catIndex} className="skill-category">
                  <h3>{cat.category}</h3>
                  <div className="skill-items">
                    {cat.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>25+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Clients Helped</p>
            </div>
            <div className="stat-card">
              <h3>3</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
