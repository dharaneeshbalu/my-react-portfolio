import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Node.js", "REST APIs"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git & GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          Technical <span>Skills</span>
        </h2>
        
        <div className="grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="project-card" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {cat.skills.map((skill) => (
                  <span key={skill} style={{ 
                    padding: '8px 15px', 
                    background: '#0f172a', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}