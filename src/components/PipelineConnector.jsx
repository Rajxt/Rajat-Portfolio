// src/components/PipelineConnector.jsx
import React from 'react';
// Assume you import the corresponding CSS in Components.css

const PipelineConnector = ({ status = 'success' }) => {
  const statusClass = `connector-${status}`;

  return (
    <div className={`pipeline-connector ${statusClass}`}>
      <div className="pipeline-dot"></div>
      <div className="pipeline-line"></div>
    </div>
  );
};

export default PipelineConnector;
