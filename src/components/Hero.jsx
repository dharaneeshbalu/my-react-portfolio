import React from 'react';
// 1. Import the PDF file like you would an image
import resumeFile from '../assets/resume.pdf'; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img 
          src="/profile.jpg"  
          style={{ 
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: '0 auto 20px', 
            border: '4px solid #3b82f6',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)'
          }} 
        />
        
        <h1>Hi, I'm <span>DHARANEESH</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>Full Stack Developer | Java & React Expert</p>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
          {/* 2. Use the imported variable in the href */}
          <a href={resumeFile} download="Dharaneesh_Resume.pdf" className="btn-primary">
            Download Resume
          </a>
          <a href="#projects" className="btn-primary" style={{ background: 'transparent', border: '2px solid #3b82f6' }}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}