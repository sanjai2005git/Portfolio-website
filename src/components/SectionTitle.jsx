export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header className="section__head">
      {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </header>
  );
}
