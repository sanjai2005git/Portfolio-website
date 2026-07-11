import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="03 — Skills"
          title="Skills & technologies"
        />
        <p className="section__lede">
          A practical toolkit shaped by coursework, internships, and personal
          projects — focused on Python, machine learning, and modern web.
        </p>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills__card card">
              <h3 className="skills__title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skill">
                    <span className="skill__dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
