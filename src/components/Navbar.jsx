import { profile } from '../data/content';

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21 14.3A8.5 8.5 0 0 1 9.7 3a8.5 8.5 0 1 0 11.3 11.3Z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar({
  lang,
  setLang,
  theme,
  onToggleTheme,
  copy,
  menuOpen,
  setMenuOpen,
}) {
  const links = [
    { href: '#sobre', label: copy.nav.about },
    { href: '#projetos', label: copy.nav.projects },
    { href: '#experiencias', label: copy.nav.experiences },
    { href: '#contato', label: copy.nav.contact },
  ];

  const close = () => setMenuOpen(false);
  const isDark = theme === 'dark';

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand" href="#topo" onClick={close}>
          {profile.shortName}
        </a>

        <nav
          id="menu-principal"
          className={menuOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label={copy.primaryNav}
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

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? copy.themeToLight : copy.themeToDark}
            aria-pressed={isDark}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{copy.openMenu}</span>
            <span aria-hidden="true" className={menuOpen ? 'burger is-open' : 'burger'} />
          </button>
        </div>
      </div>
    </header>
  );
}
