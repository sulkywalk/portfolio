// src/App.jsx
// import React from 'react';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div>
//       <Hero />
//       <Skills />
//       <Blog />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Skills from './components/Skills';
// import Blog from './components/Blog';
//  import Contact from './components/Contact';


// function App() {
//  return (
//  <>
      
//    <Header />
//    <section id="home">
//      <Hero />
//    </section>
//    <section id="skills">
//      <Skills />
//    </section>
//    <section id="blog">
//      <Blog />
//   </section>
//     <section id="contact">
//      <Contact />
//    </section>
//  </>
//  );
//  }

//  export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Contact from './components/Contact';
import Footer from './components/Footer';


// optional, if you have project detail pages

// 🏠 HomePage component (main landing sections)
function HomePage() {
  return (
    <>
      <Header />
      <main className="page">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      
        <section id="contact">
          <Contact />
        </section>
        <Footer />

        

      </main>
    
    </>
  );
}

// ⚛️ Main App Component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}
