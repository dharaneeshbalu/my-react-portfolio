import React from 'react';

export default function ContactForm() {
  const myEmail = "dharaneeshdharaneesh606@gmail.com"; // REPLACE THIS with your real email

  return (
    <section id="contact" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '1px solid var(--border)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Let's Work Together</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
            I'm currently open to new opportunities. Feel free to reach out via email!
          </p>
          
          {/* Direct Email Button */}
          <a 
            href={`mailto:${myEmail}`} 
            className="btn-primary" 
            style={{ fontSize: '1.1rem', padding: '15px 40px' }}
          >
            Email Me
          </a>

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://github.com/dharaneeshbalu" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/dharaneesh-b-089224321" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}