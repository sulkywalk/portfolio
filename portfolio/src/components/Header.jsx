import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  // Get saved theme from localStorage (if exists)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to <html> (root)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
   
     <>
      {/* 🌠 METEOR SHOWER (TOP LAYER) */}
      <div className="meteor-layer">
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
      </div>

      {/* 🔝 HEADER */}
      <header className="header">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* 🌗 Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      {/* 📄 PAGE CONTENT */}
      <main className="page-content">
        {/* rest of your app */}
      </main>
    </>
  );
}

