function ProjectCard({ project }) {
  return (
    <div className="project-card glass-card">
      <div className="project-number">0{project.id}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-primary"
      >
        View Demo
      </a>
    </div>
  );
}

export default ProjectCard;
