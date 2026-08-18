import { profile } from '../data/content';

export default function Hero({ lang, copy }) {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-name">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">{profile.role[lang]}</p>
          <h1 id="hero-name">{profile.name}</h1>
          <p className="hero-support">{copy.heroSupport}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projetos">
              {copy.heroCta}
            </a>
            <a className="btn btn-ghost" href="#contato">
              {copy.heroSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
