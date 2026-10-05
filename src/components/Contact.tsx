import React from 'react';
import { PERSON } from '../data/portfolio';
import './Contact.css';

interface ContactProps {
  onCall: () => void;
  onCopyEmail: () => void;
}

const Contact: React.FC<ContactProps> = ({ onCall, onCopyEmail }) => (
  <section id="contact" className="section-wrap">
    <div className="container">
      <div className="contact-card card">
        {/* Ambient orb */}
        <div className="contact-orb" />

        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Interested in discussing automation testing roles, frameworks, or QA collaborations? Feel free to reach out directly.
        </p>

        {/* Email + Phone boxes */}
        <div className="contact-grid">
          {/* Email */}
          <div className="contact-box">
            <div className="contact-box-info">
              <div className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-box-label">Email Address</div>
                <div className="contact-box-value">{PERSON.email}</div>
              </div>
            </div>
            <div className="contact-box-actions">
              <a href={`mailto:${PERSON.email}`} className="btn btn-primary btn-sm" id="email-btn">Email</a>
              <button className="btn btn-ghost btn-sm" onClick={onCopyEmail} id="copy-email-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-box">
            <div className="contact-box-info">
              <div className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-box-label">Phone · Scraping Protected</div>
                <div className="contact-box-value">Click to Call</div>
              </div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={onCall} id="contact-call-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="contact-location">
          <span className="badge" style={{ fontSize: '0.85rem', padding: '0.38rem 0.9rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Location:{' '}
            {PERSON.location.startsWith('[') ? <span className="ph">{PERSON.location}</span> : PERSON.location}
          </span>
        </div>

        {/* Social links */}
        <div className="social-row">
          <a
            href={PERSON.linkedin.startsWith('[') ? '#' : PERSON.linkedin}
            className="social-btn"
            id="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn{PERSON.linkedin.startsWith('[') && <span className="ph" style={{ marginLeft: 4 }}>{PERSON.linkedin}</span>}
          </a>

          <a
            href={PERSON.github.startsWith('[') ? '#' : PERSON.github}
            className="social-btn"
            id="github-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub{PERSON.github.startsWith('[') && <span className="ph" style={{ marginLeft: 4 }}>{PERSON.github}</span>}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
