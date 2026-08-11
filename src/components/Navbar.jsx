import { profile } from '../data/content';

export default function Navbar({ lang, setLang, copy, menuOpen, setMenuOpen }) {
  const links = [
    { href: '#sobre', label: copy.nav.about },
    { href: '#projetos', label: copy.nav.projects },
    { href: '#experiencias', label: copy.nav.experiences },
    { href: '#contato', label: copy.nav.contact },
  ];

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#topo" onClick={close}>
          {profile.shortName}
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{lang === 'pt' ? 'Abrir menu' : 'Open menu'}</span>
          <span aria-hidden="true" className={menuOpen ? 'burger is-open' : 'burger'} />
        </button>

        <nav
          id="menu-principal"
          className={menuOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label={lang === 'pt' ? 'Principal' : 'Primary'}
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'pt' ? 'is-active' : ''}
              onClick={() => setLang('pt')}
              aria-pressed={lang === 'pt'}
            >
              PT
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
