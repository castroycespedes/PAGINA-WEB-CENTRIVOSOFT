export function ContentSection({ id, title, description }) {
  const headingId = `${id}-heading`;

  return (
    <section className="content-section" id={id} aria-labelledby={headingId}>
      <div className="content-section__inner">
        <h2 id={headingId}>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}