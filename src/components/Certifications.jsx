import SectionTitle from './SectionTitle';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <SectionTitle
          eyebrow="06 — Credentials"
          title="Licenses & certifications"
        />
        <ul className="certs__grid">
          {certifications.map((c) => (
            <li key={c.name} className="cert card">
              <div className="cert__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="m9 13-2 8 5-3 5 3-2-8" />
                </svg>
              </div>
              <div className="cert__body">
                <h3 className="cert__name">{c.name}</h3>
                <p className="cert__meta">
                  <span>{c.issuer}</span>
                  <span className="cert__dot" />
                  <span>{c.date}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
