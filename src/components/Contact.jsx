import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    // Open the user's mail client with the message pre-filled.
    const subject = `Portfolio contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle eyebrow="07 — Contact" title="Get in touch" />
        <div className="contact__grid">
          <div className="contact__copy">
            <p className="section__lede">
              I'm currently open to internships, entry-level software roles, and
              interesting collaborations. The fastest way to reach me is email —
              I usually reply within a day or two.
            </p>
            <ul className="contact__list">
              <li>
                <span className="contact__label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="contact__label">Phone</span>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="contact__label">Location</span>
                <span>{profile.location}</span>
              </li>
            </ul>
            <div className="contact__socials">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="btn btn--ghost btn--sm"
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form card" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="What would you like to talk about?"
              />
            </div>
            <button type="submit" className="btn btn--primary btn--block">
              Send message
            </button>
            {status === 'error' && (
              <p className="form__msg form__msg--error">
                Please fill in all fields before sending.
              </p>
            )}
            {status === 'sent' && (
              <p className="form__msg form__msg--ok">
                Opening your email client… thanks for reaching out!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
