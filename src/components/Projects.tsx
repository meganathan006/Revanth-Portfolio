import React, { useState } from 'react';
import { PROJECTS, type ProjectCategory } from '../data/portfolio';
import './Projects.css';

type Filter = 'all' | ProjectCategory;
const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'UI Automation', value: 'ui' },
  { label: 'API Testing', value: 'api' },
  { label: 'Manual QA', value: 'manual' },
];

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-wrap section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Demonstrated Work</div>
          <h2 className="section-title">Projects &amp; Test Suites</h2>
          <p className="section-desc">
            Concrete automation frameworks and QA testing engagements. Placeholders{' '}
            <span className="ph">[add ...]</span> are ready for your project-specific details.
          </p>
        </div>

        {/* Filter bar */}
        <div className="project-filters" role="group" aria-label="Filter projects by type">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-btn${filter === f.value ? ' filter-btn--active' : ''}`}
              onClick={() => setFilter(f.value)}
              id={`filter-${f.value}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="projects-grid">
          {visible.map(project => (
            <div key={project.id} className="card proj-card">
              {/* Meta bar */}
              <div className="proj-meta">
                <span className="proj-domain-badge">
                  {project.domain.startsWith('[') ? <span className="ph">{project.domain}</span> : project.domain}
                </span>
                <span className="proj-type-label">{project.type}</span>
              </div>

              {/* Title */}
              <h3 className="proj-title">
                Project {project.id}:{' '}
                {project.name.startsWith('[') ? <span className="ph">{project.name}</span> : project.name}
              </h3>

              {/* Tested modules */}
              <div className="proj-tested-label">What I Tested</div>
              <div className="proj-tested-value">
                {project.testedModules.startsWith('[')
                  ? <span className="ph">{project.testedModules}</span>
                  : project.testedModules}
              </div>

              {/* Bullets */}
              <div className="proj-bullets">
                {project.bullets.map((b, i) => (
                  <div key={i} className="bullet-row">
                    <span className="bullet-icon"><CheckIcon /></span>
                    <p className="bullet-text proj-bullet-text">
                      <strong>{b.strong}</strong>{' '}
                      {/* Render inline placeholders */}
                      {b.text.split(/(\[add [^\]]+\])/).map((part, j) =>
                        part.startsWith('[add')
                          ? <span key={j} className="ph">{part}</span>
                          : part
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="proj-stack">
                <div className="proj-stack-label">Tech Stack</div>
                <div className="tag-cloud">
                  {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
