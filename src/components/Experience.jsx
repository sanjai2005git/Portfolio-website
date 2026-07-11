import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="05 — Experience"
          title="Work experience"
        />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company}`} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__title">
                      {job.role}{' '}
                      <span className="timeline__sep">·</span>{' '}
                      <span className="timeline__company">{job.company}</span>
                    </h3>
                    <p className="timeline__location">{job.location}</p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <ul className="timeline__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
