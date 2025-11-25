// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="section-container header-stage">
      <div className="console-box">
        <p className="log-line">
          <span className="commit-tag">[SOURCE]</span> Triggered by **Initial Commit**...
        </p>
        <h1 className="name-title">
          &gt; **JANE DOE** <span className="cursor">_</span>
        </h1>
        <h2 className="job-title">Full-Stack Developer | CI/CD Enthusiast</h2>
        <p className="log-line success">
          <span className="commit-tag">[SOURCE COMPLETE]</span> Configuration Verified. **STARTING BUILD...**
        </p>
      </div>
    </header>
  );
};

export default Header;

