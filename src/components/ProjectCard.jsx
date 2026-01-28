import React from 'react';

export default function ProjectCard({ title, desc, tech, link, github }) {
  return (
    <div className="project-card">
      <h3 style={{ marginBottom: '10px', color: 'var(--primary-blue)' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '15px' }}>{desc}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {tech && tech.map((t) => (
          <span key={t} style={{ 
            fontSize: '11px', 
            background: '#0f172a', 
            padding: '4px 8px', 
            borderRadius: '4px', 
            border: '1px solid var(--border)' 
          }}>
            {t}
          </span>
        ))}
      </div>
      
      {/* <div style={{ display: 'flex', gap: '15px' }}>
        <a href={github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--primary-blue)', fontSize: '14px', fontWeight: 'bold' }}>
          Code ↗
        </a>
        <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white', fontSize: '14px', fontWeight: 'bold' }}>
          Live Demo ↗
        </a>
      </div> */}
    </div>
  );
}