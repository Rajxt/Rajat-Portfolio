// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, tags, link, buildStatus = 'success' }) => {
  return (
    <div className={`project-card console-box status-${buildStatus}`}>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="view-link">
        View Artifact &gt;
      </a>
      <div className="build-status">
        <span className={`status-label build-status-${buildStatus}`}>
          [BUILD: {buildStatus.toUpperCase()}]
        </span>
        <span className="build-time">Compiled in 4.2s</span>
      </div>
    </div>
  );
};

export default ProjectCard;

