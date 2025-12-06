import React from "react";
const projects = [
  {
    title:"Login Page",
     description:
      "A clean and responsive React-based login page with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS", "JavaScript", "React"],
    demoLink: "https://login-pages-iryp.vercel.app",
    githubLink: "https://github.com/sakthisakthi08/login-pages",
    image: "loginpage.png",
    
  },
   {
    title:"Weather-App",
     description:
      "A clean and responsive React-based login page with smooth UI and fast authentication flow.",
    tech: ["Html", "CSS","Javascript"],
    demoLink: "https://weather-app-sage-three-87.vercel.app/",
    githubLink: "https://github.com/sakthisakthi08/weather-app",
    image: "Weather.png",
    
  },
  {
    title: "Instagram Clone",
    description:
      "A responsive Instagram clone with feed UI, story section, like system UI, and modern layout. Built fully using React.",
    tech: ["Html", "CSS", "JavaScript", "React"],
    demoLink: "https://instagram-clone-phi-rose.vercel.app",
    githubLink: "https://github.com/sakthisakthi08/InstagramClone",
    image: "instagram.jpg",
  },
  {
    title: "EB Bill Calculator",
    description:
      "A simple and responsive EB Bill Calculator that auto-generates Tamil Nadu EB style bill layout using user input such as EB number, name, units, amount, and address.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "http://eb-calculater.vercel.app",
    githubLink: "https://github.com/sakthisakthi08/Eb-calculater",
    image: "Eb.jpg"
  } 
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank">
                    🔗 Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a href={project.githubLink} target="_blank">
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
