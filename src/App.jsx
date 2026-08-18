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

export default function App() {
  const [lang, setLang] = useState('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = uiCopy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

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
