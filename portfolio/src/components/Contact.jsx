import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
      <h2>Let's Connect 🤝</h2>
      <p className="contact-text">
        I’d love to collaborate or just have a chat.  
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="social-links">
        <a
          href="anupriya20041@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/anupriya-96a686386/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sulkywalk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      </div>
    </section>
  );
}
