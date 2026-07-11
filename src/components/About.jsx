import SectionTitle from './SectionTitle';
import { profile } from '../data/portfolioData';

const highlights = [
  { value: '8.67', label: 'CGPA at VIT Vellore' },
  { value: '4+', label: 'Hands-on projects shipped' },
  { value: '4', label: 'Professional certifications' },
  { value: 'ML · Cloud · Web', label: 'Core focus areas' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle eyebrow="01 — About" title="A bit about me" />
        <div className="about__grid">
          <div className="about__copy">
            <p className="about__lead">{profile.summary}</p>
            <p className="about__text">
              I enjoy the parts of software engineering that don't make it into
              screenshots — the testing, the debugging, the model validation, the
              trade-offs. Whether I'm working on an ML pipeline, a smart
              contract, or a clean UI, my goal is the same: build something
              that's reliable, well-tested, and a little better than the
              minimum.
            </p>
            <div className="about__socials">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="chip"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <ul className="about__stats">
            {highlights.map((h) => (
              <li key={h.label} className="stat">
                <span className="stat__value">{h.value}</span>
                <span className="stat__label">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
