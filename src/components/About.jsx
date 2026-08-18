import { about, skills } from '../data/content';

export default function About({ lang }) {
  const t = about[lang];
  const skillGroups = skills[lang];

  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="section-inner" data-reveal>
        <header className="section-head">
          <h2 id="sobre-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </header>

        <p className="about-body">{t.body}</p>

        <div className="about-grid">
          <article>
            <h3>{t.formationLabel}</h3>
            <ul>
              {t.formation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>{t.areaLabel}</h3>
            <p>{t.area}</p>
          </article>
          <article>
            <h3>{t.interestsLabel}</h3>
            <p>{t.interests}</p>
          </article>
          <article>
            <h3>{t.goalsLabel}</h3>
            <p>{t.goals}</p>
          </article>
        </div>

        <div className="skills-block">
          <h3>{t.skillsLabel}</h3>
          <div className="skills-groups">
            {skillGroups.map((skill) => (
              <div key={skill.group} className="skill-group">
                <h4>{skill.group}</h4>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
