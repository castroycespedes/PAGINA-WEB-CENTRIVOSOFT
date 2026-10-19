import { company } from "@/data/company";
import { navigationItems } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#inicio" aria-label={`${company.name}, inicio`}>
          {company.name}
        </a>
        <nav aria-label="Navegación principal">
          <ul className="site-navigation">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}