# CENTRIVOSOFT

Base arquitectónica de la web corporativa de CENTRIVOSOFT, Centro de Servicios de Software. Esta fase establece una estructura modular y responsive para continuar el trabajo visual y de contenido en fases posteriores.

## Stack existente

- Next.js 16 con App Router
- React 19
- JavaScript
- Tailwind CSS 4 y estilos globales
- ESLint 9
- npm

## Requisitos y comandos

Se requiere Node.js compatible con Next.js 16 y npm.

- `npm install`: instala las dependencias.
- `npm run dev`: inicia el servidor local.
- `npm run lint`: ejecuta ESLint.
- `npm run build`: genera la compilación de producción.

El proyecto no define actualmente comandos de pruebas automatizadas ni de typecheck.

## Estructura

- `src/app/`: rutas, layout raíz, metadatos y estilos globales.
- `src/components/layout/`: encabezado y pie compartidos.
- `src/components/sections/`: componentes reutilizables para secciones de contenido.
- `src/data/`: datos corporativos y configuración de navegación.
- `public/`: recursos estáticos del proyecto.

La página principal prepara las secciones Inicio, Nosotros, Productos, Servicios y Contacto. EMAUS POS, FactuCore y los datos de contacto se mantienen como información de referencia para fases futuras; esta base no agrega URLs ni funcionalidades comerciales nuevas.

## Convenciones

- Mantener el idioma español y el branding CENTRIVOSOFT existente.
- Mantener el contenido y los datos corporativos centralizados en `src/data/`.
- Usar componentes compartidos para navegación y secciones.
- Conservar `main` protegida y trabajar en una rama de trabajo. No publicar cambios sin autorización explícita.