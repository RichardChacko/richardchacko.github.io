import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  const [ref, isVisible] = useScrollReveal();
  const experiences = [
    {
      title: "Data Product Manager Intern",
      company: "Geotab",
      period: "Aug 2025 - Present",
      bullets: [
        "Architected data governance frameworks in BigQuery by scoping high-scale telemetry pipelines with data scientists to optimize dataset accessibility and reliability.",
        "Engineered self-serve BI solutions that provided real-time KPI visibility, streamlining cross-functional workflows and reducing manual reporting overhead by 40%.",
        "Synthesized technical requirements for internal admin software (MyAdmin) by auditing backend pipelines to ensure data integrity and address engineering pain points.",
      ],
      technologies: ["BigQuery", "SQL", "Python", "BI Tools", "Data Governance"]
    },
    {
      title: "Product Management Operations Intern",
      company: "Geotab",
      period: "Sept 2024 - Aug 2025",
      bullets: [
        "Orchestrated alpha-stage hardware/software testing for 25+ internal users, synthesizing usability data into technical insights that drove a 55% increase in feature adoption.",
        "Developed Python-based reporting pipelines in collaboration with integration engineers to monitor feature flags and system anomalies, accelerating release iteration cycles.",
        "Performed telemetry analysis on Keybox hardware using Apache Superset to identify latent system trends and implement proactive fixes for long-term product reliability.",
      ],
      technologies: ["Python", "Apache Superset", "A/B Testing", "Hardware Testing", "Feature Flags"]
    },
    {
      title: "Software Analyst Intern",
      company: "Doane Grant Thornton LLP",
      period: "May 2023 - Aug 2023",
      bullets: [
        "Developed PowerShell automation scripts that reduced file-system search latency by 40%, significantly enhancing data retrieval speeds for high-impact analytical tasks.",
        "Optimized full-stack performance of the Grapevine platform by resolving front-end rendering bottlenecks and backend latency to improve system engagement.",
        "Led technical validation within Agile sprints, partnering with developers and QA to ensure new features met rigorous business logic and performance standards.",
      ],
      technologies: ["PowerShell", "Full-Stack", "Agile", "QA"]
    },
    {
      title: "Application Support Analyst Intern",
      company: "Doane Grant Thornton LLP",
      period: "May 2022 - Aug 2022",
      bullets: [
        "Managed end-to-end SDLC testing for enterprise tax software, documenting defects early in the cycle to reduce client-reported production issues by 30%.",
        "Integrated Workday APIs and optimized complex SQL queries to streamline enterprise application migrations and enhance internal platform functionality.",
        "Facilitated Scrum methodologies in Jira to manage backlog grooming and sprint execution, increasing transparency and technical velocity across the team.",
      ],
      technologies: ["SQL", "Workday API", "Jira", "SDLC", "Scrum"]
    }
  ];

  return (
    <section id="experience" ref={ref} className={`experience scroll-reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
