import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { uiCopy } from './data/content';
import './App.css';

function readDocumentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function App() {
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState(readDocumentTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = uiCopy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event) => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {
        return;
      }
      setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* ignore quota / private mode */
      }
      return next;
    });
  };

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">
        {copy.skipToContent}
      </a>
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        copy={copy}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main id="conteudo">
        <Hero lang={lang} copy={copy} />
        <About lang={lang} />
        <Projects copy={copy} lang={lang} />
        <Experiences copy={copy} lang={lang} />
        <Contact copy={copy} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
