import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import '../styles/project.css';

function Project() {
  return (
    <div className="project page">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        <p className="project-intro">
          Berikut adalah beberapa project yang telah saya buat selama belajar 
          web development. Setiap project dibuat dengan penuh dedikasi dan 
          semangat untuk terus belajar.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
