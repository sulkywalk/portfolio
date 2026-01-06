
import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: "reactjs.png" },
    { name: "JavaScript (ES6+)", icon: "js.png" },
    { name: "HTML", icon: "html-5.png" },
    { name: "CSS", icon: "css-3.png" },
    { name: "REST APIs", icon: "restapi.png" },
    { name: "MongoDB", icon: "mongodb.png" },
    { name: "Github", icon: "github (2).png" },
   

  ];

  return (
    <section className="container">
      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
