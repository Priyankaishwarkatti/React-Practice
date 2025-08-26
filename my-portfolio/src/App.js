import { useState } from "react";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Priyanka Ishwarkatti</h1>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Landing / Hero */}
      <section className="hero">
        <h2 className="intro">Hi, I'm <span className="highlight">Priyanka</span> 👋</h2>
        <p className="tagline">Aspiring Frontend Developer | MCA Graduate</p>
      </section>

      {/* About */}
      <section className="section about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer learning frontend development.
          Skilled in JavaScript, React, and UI design. 
          I love building projects and exploring new technologies.
        </p>
      </section>

      {/* Skills */}
      <section className="section skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <SkillCard skill="HTML" />
          <SkillCard skill="CSS" />
          <SkillCard skill="JavaScript" />
          <SkillCard skill="React" />
          <SkillCard skill="Git/GitHub" />
        </div>
      </section>

      {/* Projects */}
      <section className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard title="To-Do List App" desc="A task manager app" link="#" />
          <ProjectCard title="Quiz App" desc="A fun quiz game" link="#" />
          <ProjectCard title="Weather App" desc="Check weather by city" link="#" />
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:yourmail@example.com">priyankaishwarkatti22@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/Priyankaishwarkatti</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername">linkedin.com/in/priyanka-ishwarkatti</a></p>
      </section>
    </div>
  )
}

function SkillCard({ skill }) {
  return <div className="skill-card">{skill}</div>;
}

function ProjectCard({ title, desc, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} target="_blank" rel="noreferrer">🔗 View Project</a>
    </div>
  );
}
