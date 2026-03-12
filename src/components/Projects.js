import React from 'react';
import { FiAward, FiTrendingUp, FiMap, FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'RouteIQ',
    subtitle: 'Fleet Route Optimization Dashboard',
    period: 'Mar. 2026',
    icon: <FiMap size={24} />,
    color: 'blue',
    link: 'https://richardchacko.github.io/route-optimizer',
    description:
      'Built an interactive dashboard to analyze actual vs optimal routes for a 100-vehicle fleet across the Greater Toronto Area, identifying inefficiencies, bottleneck zones, and fuel waste savings.',
    highlights: [
      'Simulated 600 trips for 100 real make/model vehicles (Ford, Toyota, RAM, etc.)',
      'Interactive Leaflet map with route comparison and congestion heatmap',
      'Recharts visualizations for fuel waste, efficiency trends, and distance analysis',
      'Sortable, searchable trip table with efficiency scoring',
    ],
    tech: ['React', 'Leaflet', 'Recharts', 'JavaScript', 'Vite'],
  },
  {
    title: 'Datality',
    subtitle: 'GEOTAB Intern Case Competition — 3rd Place Winner',
    period: 'Jul. 2025 – Aug. 2025',
    icon: <FiAward size={24} />,
    color: 'blue',
    description:
      'Designed a data governance product to improve discoverability across 2.4M+ BigQuery tables. Built a data quality scoring system using regression models and automated governance workflows via Jira ticket triggers.',
    highlights: [
      'Tackled low data discoverability across 2.4M+ BigQuery tables',
      'Built quality scoring with Python, SQL, and regression models',
      'Automated Jira workflows for low-quality dataset remediation',
      'Presented to senior panel of data scientists and engineers',
    ],
    tech: ['Python', 'SQL', 'BigQuery', 'Regression Models', 'Jira'],
  },
  {
    title: 'Sales Forecasting Model',
    subtitle: 'Academic Project',
    period: 'Jan. 2025 – Apr. 2025',
    icon: <FiTrendingUp size={24} />,
    color: 'green',
    description:
      'Built a predictive analytics model using two years of retail sales data to forecast monthly sales with over 85% accuracy using time-series methods.',
    highlights: [
      'Pre-processed retail sales data with Pandas and NumPy',
      'Applied ARIMA and Prophet for time-series forecasting',
      'Achieved over 85% prediction accuracy on monthly sales',
      'Demonstrated practical application of predictive analytics',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'ARIMA', 'Prophet'],
  },
];

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="projects" ref={ref} className={`projects scroll-reveal ${isVisible ? 'revealed' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Side projects, competitions, and academic work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${project.color}`} key={index}>
              <div className="project-card-header">
                <div className={`project-icon ${project.color}`}>{project.icon}</div>
                <span className="project-period">{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="project-tech-tag" key={i}>{t}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View Live <FiExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
