import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { PERSON } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// ---- Toast hook ----
function useToast() {
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: '', visible: false });
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ msg, visible: true });
    timerRef.current = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3200);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return { toast, showToast };
}

// ---- Obfuscated phone trigger ----
function triggerCall(parts: string[]) {
  window.location.href = 'tel:' + parts.join('');
}

const App: React.FC = () => {
  const { toast, showToast } = useToast();

  const handleCall = useCallback(() => {
    triggerCall(PERSON.phoneParts);
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(PERSON.email)
      .then(() => showToast(`✓ Copied: ${PERSON.email}`))
      .catch(() => showToast(`Email: ${PERSON.email}`));
  }, [showToast]);

  return (
    <ThemeProvider>
      <Navbar />

      <main>
        <Hero onCall={handleCall} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact onCall={handleCall} onCopyEmail={handleCopyEmail} />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>&copy; {new Date().getFullYear()} Revanth M · Automation Test Engineer</span>
          <a href="#hero" className="footer-top-link">Back to Top ↑</a>
        </div>
      </footer>

      {/* Toast notification */}
      <div className={`toast${toast.visible ? ' show' : ''}`} role="status" aria-live="polite">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        {toast.msg}
      </div>
    </ThemeProvider>
  );
};

export default App;
