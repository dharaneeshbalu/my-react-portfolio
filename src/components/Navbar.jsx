import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        DHARANEESH<span> PORTFOLIO</span>
      </div>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}