import { company } from "@/data/company";
import { futureSections } from "@/data/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContentSection } from "@/components/sections/content-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="site-main" id="contenido-principal" tabIndex={-1}>
        <section className="intro-section" id="inicio" aria-labelledby="intro-heading">
          <div className="intro-section__inner">
            <p className="intro-section__eyebrow">{company.description}</p>
            <h1 id="intro-heading">{company.name}</h1>
            <p className="intro-section__summary">
              Desarrollo de software, páginas web y soluciones tecnológicas.
            </p>
          </div>
        </section>
        {futureSections.map((section) => (
          <ContentSection key={section.id} {...section} />
        ))}
      </main>
      <SiteFooter />
    </>
  );
}