import './App.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Ein vollständiger Online-Shop mit Warenkorb und Zahlungsabwicklung",
      tags: ["React", "Node.js", "MongoDB"].map((tag, i) => ({ id: `e-commerce-${i}`, name: tag }))
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Eine Projektmanagement-Anwendung mit Drag & Drop Funktionalität",
      tags: ["Vue.js", "Firebase", "Tailwind"].map((tag, i) => ({ id: `task-mgmt-${i}`, name: tag }))
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Echtzeit-Wettervorhersage mit detaillierten Statistiken",
      tags: ["React", "Weather API", "ChartJS"].map((tag, i) => ({ id: `weather-${i}`, name: tag }))
    }
  ];

  return (
    <div className="project-grid" style={{ backgroundColor: '#333' }}>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;