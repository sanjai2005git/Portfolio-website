import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionTitle
          eyebrow="04 — Featured"
          title="Featured projects"
        />
        <p className="section__lede">
          A few things I've built that I'm proud of — from a decentralized NFT
          marketplace to a high-performance async FTP library.
        </p>
        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="project card">
              <header className="project__head">
                <h3 className="project__title">{p.title}</h3>
                {p.featured && (
                  <span className="project__badge">Featured</span>
                )}
              </header>
              <p className="project__desc">{p.description}</p>
              <ul className="project__bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="project__stack">
                {p.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
