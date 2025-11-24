import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Resume Builder App",
    image: "/projects/resume.webp",
    description:
      "A web app that lets users create and download professional resumes dynamically.",
    tech: ["React", "Express", "MongoDB", "TailwindCSS"],
    demo: "https://resume-app.vercel.app",
    github: "https://github.com/anupriya/resume-builder",
    details:
      "Built with the MERN stack, this app allows users to create customized resumes in real-time using a modern UI. It includes authentication, live preview, and export to PDF."
  },
  {
    id: 2,
    title: "Weight Tracker",
    image: "/projects/weather.webp",
    description:
      "A responsive weight tracking app that visualizes progress with charts.",
    tech: ["React", "CSS", "Chart.js", "LocalStorage","mongoDB"],
    demo: "https://weather.vercel.app",
    github: "https://github.com/sulkywalk/weight-tracker-",
    details:
      "This app helps users log their weight over time and visualize their progress with interactive charts. Built with React and Chart.js, it stores data locally for quick access."
  },
  {
    id: 3,
    title: "E-Commerce Store",
    image: "/projects/ecommerce.webp",
    description:
      "Full-stack shopping app with cart, authentication, and Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node"],
    demo: "https://store.vercel.app",
    github: "https://github.com/anupriya/ecommerce-store",
    details:
      "Built a full e-commerce experience using MERN stack and Stripe API for secure payments. Includes login/signup, product filtering, and responsive design."
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A selection of my recent work — click to see more details.
      </p>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card"
            onClick={() => setSelected(proj)}
          >
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✕
            </button>
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>{selected.details}</p>
            <div className="modal-links">
              <a href={selected.demo} target="_blank" rel="noreferrer">
                🌐 Live Demo
              </a>
              <a href={selected.github} target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
