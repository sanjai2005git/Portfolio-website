import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionTitle
          eyebrow="02 — Education"
          title="Where I've studied"
        />
        <ol className="timeline">
          {education.map((ed) => (
            <li key={ed.school} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__title">{ed.school}</h3>
                    <p className="timeline__location">{ed.location}</p>
                  </div>
                  <span className="timeline__period">{ed.period}</span>
                </div>
                <p className="timeline__degree">{ed.degree}</p>
                <p className="timeline__detail">{ed.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
