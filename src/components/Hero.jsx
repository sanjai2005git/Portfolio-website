import { profile } from '../data/portfolioData';
import TypedText from './TypedText';

const ROLES = [
  'Software Engineer',
  'AI Engineer',
  'ML Engineer',
  'Data Analyst',
  'Data Scientist',
];

const icon = (name) => {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Hi, I'm <span className="hero__title-accent">{profile.name}</span>
        </h1>
        <p className="hero__role">
          <TypedText words={ROLES} />
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Featured Projects
          </a>
          <a
            href={profile.resumeUrl}
            className="btn btn--ghost"
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>

        <ul className="hero__socials" aria-label="Social links">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="icon-btn"
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {icon(s.icon)}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hero__meta">
          <li>
            <span className="hero__meta-label">Location</span>
            <span className="hero__meta-value">{profile.location}</span>
          </li>
          <li>
            <span className="hero__meta-label">Email</span>
            <a className="hero__meta-value" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <span className="hero__meta-label">Phone</span>
            <a
              className="hero__meta-value"
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
            >
              {profile.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
