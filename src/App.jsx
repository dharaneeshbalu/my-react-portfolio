import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; // New Skill Page
import ProjectCard from './components/ProjectCard';
import Chatbot from './components/Chatbot';
import ContactForm from './components/ContactForm';
import { userData } from './data/content';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* 1. HERO SECTION (Introduction) */}
      <Hero />
      
      {/* 2. SKILLS SECTION (Technical Expertise) */}
      <Skills />
      
      {/* 3. PROJECTS SECTION (Proof of Work) */}
      <section id="projects" className="container" style={{ padding: '80px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          Featured <span>Projects</span>
        </h2>
        <div className="grid">
          {userData.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION (Email Me) */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* FLOATING TOOLS */}
      <Chatbot />

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--border)', color: 'var(--text-dim)' }}>
        <p>© {new Date().getFullYear()} {userData.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;