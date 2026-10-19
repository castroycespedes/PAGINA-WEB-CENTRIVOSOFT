import { company } from "@/data/company";
import "./globals.css";

export const metadata = {
  title: `${company.name} | ${company.description}`,
  description: `${company.name}: desarrollo de software, páginas web y soluciones tecnológicas.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}