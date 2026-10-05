import React from 'react';
import { EXPERIENCE } from '../data/portfolio';
import './Experience.css';

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Experience: React.FC = () => (
  <section id="experience" className="section-wrap">
    <div className="container">
      <div className="section-header">
        <div className="section-eyebrow">Work History</div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-desc">Honest, defensible track record of testing excellence and automation execution.</p>
      </div>

      <div className="exp-card card">
        <div className="exp-header">
          <div>
            <h3 className="exp-role">{EXPERIENCE.role}</h3>
            <div className="exp-company">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              {EXPERIENCE.company}
            </div>
          </div>
          <div className="exp-duration">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {EXPERIENCE.duration}
          </div>
        </div>

        <div className="exp-bullets">
          {EXPERIENCE.bullets.map((b, i) => (
            <div key={i} className="bullet-row">
              <span className="bullet-icon"><CheckIcon /></span>
              <p className="bullet-text">
                <strong>{b.strong}</strong> {b.text}
              </p>
            </div>
          ))}
        </div>

        <div className="exp-tags">
          <div className="tag-cloud">
            {EXPERIENCE.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
