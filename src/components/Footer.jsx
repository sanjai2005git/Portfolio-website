import { profile } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. Built with React + plain CSS.
        </p>
        <p className="footer__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </footer>
  );
}
