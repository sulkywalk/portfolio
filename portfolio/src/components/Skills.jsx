// src/components/Skills.jsx
// import React from 'react';
// import './Skills.css';

// export default function Skills() {
//   return (
//     <section className="skills-section">
//       <h3>Skills</h3>
//       <ul className="skills-list">
//         <li>React.js</li>
//         <li>JavaScript (ES6+)</li>
//         <li>HTML & CSS</li>
//         <li>Git & GitHub</li>
//         <li>REST APIs</li>
//       </ul>
//     </section>
//   );
// }

    // <section>
    //   <h2>Skills</h2>
    //   <ul>
    //     <li>React.js</li>
    //     <li>JavaScript (ES6+)</li>
    //     <li>HTML & CSS</li>
    //     <li>Git & GitHub</li>
    //     <li>REST APIs</li>
    //   </ul>
    // </section>
//   );
// }
import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: "/images/react.png" },
    { name: "JavaScript (ES6+)", icon: "/images/js.png" },
    { name: "HTML", icon: "/public/html-5.png" },
    { name: "CSS", icon: "/public/css-3.png" },
    { name: "REST APIs", icon: "/images/api.png" },
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
