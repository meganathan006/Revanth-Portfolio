import React from 'react';
import { PERSON } from '../data/portfolio';
import './Hero.css';

interface HeroProps {
  onCall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCall }) => {
  return (
    <section id="hero" className="hero-section">
      {/* Ambient background orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />

      <div className="container hero-content">
        {/* Status badge */}
        <div className="hero-badge-wrap">
          <span className="badge" style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}>
            <span className="badge-dot" />
            {PERSON.experience} · {PERSON.company}
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{PERSON.name}</span>
        </h1>

        <div className="hero-role">{PERSON.role}</div>
        <div className="hero-tagline">{PERSON.tagline}</div>

        <p className="hero-summary">{PERSON.summary}</p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </a>
          <button className="btn btn-outline" onClick={onCall} id="hero-call-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </button>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          {[
            { val: '2.7 Years', label: 'Industry Experience' },
            { val: 'UI + API', label: 'Full Stack Testing' },
            { val: 'POM & BDD', label: 'Clean Test Architecture' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-val">{s.val}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
