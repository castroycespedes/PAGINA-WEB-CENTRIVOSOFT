import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{company.name}</p>
        <p>{company.description}</p>
      </div>
    </footer>
  );
}