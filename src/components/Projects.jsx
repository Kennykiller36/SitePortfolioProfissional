import { projects } from '../data/content';

export default function Projects({ copy, lang }) {
  return (
    <section className="section projects" id="projetos" aria-labelledby="projetos-title">
      <div className="section-inner">
        <header className="section-head" data-reveal>
          <h2 id="projetos-title">{copy.projectsTitle}</h2>
          <p className="section-lead">{copy.projectsLead}</p>
        </header>

        <ol className="timeline">
          {projects.map((project, index) => (
            <li key={project.id} className="timeline-item" data-reveal>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <article className="project-entry">
                <div className="project-meta">
                  <time dateTime={project.year}>{project.year}</time>
                  <h3>{project.name}</h3>
                  <p className="project-role">
                    <span className="project-role-label">{copy.roleLabel}:</span>{' '}
                    {project.role[lang]}
                  </p>
                  <p>{project.description[lang]}</p>
                  <ul className="tech-list" aria-label={copy.techListLabel}>
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.github}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
