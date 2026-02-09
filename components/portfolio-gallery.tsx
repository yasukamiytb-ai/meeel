import React from 'react';
import { projects } from '../lib/projects';
import { Link } from 'react-router-dom';

const PortfolioGallery: React.FC = () => {
  return (
    <div className="portfolio-gallery">
      <div className="grid">
        {projects.map((project) => (
          <Link to={`/projects/${project.slug}`} key={project.slug} className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
