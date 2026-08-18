import { experiences } from '../data/content';

export default function Experiences({ copy, lang }) {
  return (
    <section
      className="section experiences"
      id="experiencias"
      aria-labelledby="experiencias-title"
    >
      <div className="section-inner" data-reveal>
        <header className="section-head">
          <h2 id="experiencias-title">{copy.experiencesTitle}</h2>
          <p className="section-lead">{copy.experiencesLead}</p>
        </header>

        <ul className="experience-list">
          {experiences.map((item) => (
            <li key={`${item.company}-${item.role.pt}`}>
              <article className="experience-item">
                <div className="experience-top">
                  <h3>{item.company}</h3>
                  <p className="experience-period">{item.period[lang]}</p>
                </div>
                <p className="experience-role">{item.role[lang]}</p>
                <p className="experience-desc">{item.description[lang]}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
