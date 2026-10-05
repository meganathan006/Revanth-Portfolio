import React from 'react';
import './About.css';

const PILLARS = [
  {
    title: 'Resilient Automation Frameworks',
    desc: 'Designing reusable components with Selenium WebDriver and Playwright using Data-Driven and Page Object Model architectures.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: 'Comprehensive API Verification',
    desc: 'Validating endpoint responses, status codes, payload integrity, and schema compliance using Postman and REST Assured.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" />
      </svg>
    ),
  },
  {
    title: 'Structured Defect Management',
    desc: 'Documenting clear, reproducible bug reports with detailed logs, screenshots, and requirement traceability in Jira.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const About: React.FC = () => (
  <section id="about" className="section-wrap">
    <div className="container">
      <div className="section-header">
        <div className="section-eyebrow">Approach & Philosophy</div>
        <h2 className="section-title">Quality, Coverage &amp; Reliable Automation</h2>
        <p className="section-desc">
          Building resilient test solutions that catch regressions early, accelerate sprint velocity, and keep user experiences bug-free.
        </p>
      </div>

      <div className="about-grid">
        {/* Paragraph card */}
        <div className="card about-card">
          <div className="about-card-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Testing Approach
          </div>
          <p>
            I believe effective software quality engineering balances rigorous manual exploratory testing with stable, maintainable automation. Rather than simply writing fragile scripts, I prioritise maintainability through the <strong>Page Object Model (POM)</strong>, resilient locator strategies, and isolated test execution.
          </p>
          <p>
            My experience at <strong>Axess Technology Pvt Ltd</strong> spans end-to-end quality assurance: analysing functional requirements, writing structured test plans, executing regression test suites, validating API contracts, and ensuring timely issue tracking in Agile sprints.
          </p>
          <div className="about-badge-row">
            <span className="badge">Axess Technology</span>
            <span className="badge">STLC / SDLC</span>
            <span className="badge">Agile / Scrum</span>
          </div>
        </div>

        {/* Pillars */}
        <div className="pillar-list">
          {PILLARS.map(p => (
            <div key={p.title} className="pillar-item">
              <div className="pillar-icon">{p.icon}</div>
              <div>
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
