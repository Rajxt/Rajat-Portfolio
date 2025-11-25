// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import PipelineConnector from './components/PipelineConnector';
import './styles/Theme.css'; // Import the global styles

// Dummy data for the Build Stage
const projectsData = [
  {
    title: "E-Commerce System V2",
    description: "Full-stack application using Node.js and MongoDB. Scalable microservices architecture.",
    tags: ["React", "Express", "Microservices", "Docker"],
    link: "#",
    status: "success"
  },
  {
    title: "Portfolio Website (This one!)",
    description: "A highly-themed CI/CD focused portfolio to showcase creative engineering skills.",
    tags: ["React", "CSS Modules", "Theming"],
    link: "#",
    status: "success"
  },
  // Add more projects...
];

const App = () => {
  return (
    <>
      {/* 1. SOURCE STAGE */}
      <Header />

      <PipelineConnector status="running" /> 
      
      {/* 2. BUILD STAGE (Projects) */}
      <section id="build" className="section-container">
        <h2><span className="commit-tag">[BUILD]</span> Projects Artifacts</h2>
        <p className="log-line">Running Build Jobs: Packages installed, components compiled...</p>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              link={project.link}
              buildStatus={project.status}
            />
          ))}
        </div>
      </section>

      <PipelineConnector status="success" />

      {/* 3. TEST STAGE (Skills) - Placeholder */}
      <section id="test" className="section-container">
        <h2><span className="commit-tag">[TEST]</span> Skills & Tech Stack</h2>
        <div className="console-box">
             <p className="log-line success">
               Running **Integration Tests** on skill sets...
             </p>
             {/* You would insert SkillBar components here */}
             <p className="log-line">
               **React Suite**: 10/10 Tests Passed (100% Coverage)
             </p>
        </div>
      </section>

      <PipelineConnector status="success" />

      {/* 4. DEPLOY STAGE (Contact) - Placeholder */}
      <footer id="deploy" className="section-container">
        <h2><span className="commit-tag">[DEPLOY]</span> Contact & Production</h2>
        <div className="console-box">
             <p className="log-line">
               Artifact Deployed to **Production**...
             </p>
             <p className="log-line success" style={{fontSize: '1.2em'}}>
               &gt; **Connect with me:** <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="mailto:">Email</a>
             </p>
        </div>
        <p className="log-line success" style={{textAlign: 'center', marginTop: '40px'}}>
             **PIPELINE SUCCESSFUL. PRODUCTION STABLE.**
        </p>
      </footer>
    </>
  );
};

export default App;