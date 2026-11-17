# FlowDesk

Landing page responsive de una plataforma ficticia de gestión de proyectos. Desarrollada como demostración para un portafolio freelance, con React 19, Vite 7 y Tailwind CSS 4.

**Demo de diseño e interacción:** los proyectos, indicadores y precios son ilustrativos. No incluye backend, registros, pagos, formularios comerciales ni bases de datos.

## Funcionalidades

- Navegación por secciones y menú móvil con cierre mediante Escape, selección de enlace o clic fuera.
- Precios mensuales/anuales con descuento ilustrativo del 20%.
- Preguntas frecuentes independientes con estados accesibles.
- Avisos de demostración anunciados mediante una región de estado.
- Enlace para saltar al contenido, foco visible y respeto por movimiento reducido.
- Vista previa del producto construida con HTML y CSS; sin fuentes, imágenes o servicios externos.

## Inicio rápido

Recomendado: Node.js 24 LTS y npm. La versión se indica en `.nvmrc`.

```bash
npm ci
npm run dev
```

Abre la dirección que indique Vite. En PowerShell, si la política de scripts bloquea `npm`, usa `npm.cmd ci` y `npm.cmd run dev`.

## Producción

```bash
npm run build
npm run preview
```

`dist/` contiene la web estática compilada. No abras `index.html` con doble clic: usa el servidor local o un alojamiento web. `npm ci` usa las versiones exactas de `package-lock.json`.

## Estructura

```text
src/
  App.jsx                 Composición y avisos de demostración
  components/             Secciones e interacciones con estado React
  index.css               Diseño original y ajustes responsive
public/favicon.svg        Icono local
.github/workflows/ci.yml  Compilación en pushes y pull requests
netlify.toml              Configuración de Netlify
vercel.json               Configuración de Vercel
```

## GitHub

Publica el contenido de esta carpeta en la raíz del repositorio `flowdesk` de tu cuenta. Conserva `package-lock.json`, `.gitignore` y `.github/`. No subas `node_modules/`, `.env`, `.vercel/` ni `.netlify/`. El código de la aplicación y su compilación no necesitan secretos.

La conexión de GitHub utilizada para publicar debe tener acceso al repositorio. La automatización incluida solo instala dependencias y compila; no despliega ni requiere tokens de Vercel.

## Despliegue en Vercel

Importa el repositorio desde tu cuenta de Vercel:

| Ajuste | Valor |
| --- | --- |
| Framework | Vite |
| Root Directory | Raíz del repositorio |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | 24.x |
| Variables de entorno | Ninguna |

`vercel.json` incluye framework, compilación, salida, cabeceras y caché para assets con hash. Después del despliegue, verifica el estado READY, abre la URL pública y prueba las interacciones. Un despliegue protegido requiere configurar expresamente su audiencia antes de usarlo como portafolio público.

## Alternativa: Netlify

Conecta el repositorio. `netlify.toml` define Node 24, compilación y directorio `dist`. Para una publicación manual, compila y sube solamente el contenido de `dist/` mediante la opción de despliegue manual del proveedor.

La integración Git del proveedor puede publicar automáticamente futuros cambios de la rama de producción. Revísalo al conectar el repositorio.

## Validación y alcance

Consulta `REVIEW.md` para ver las correcciones, comprobaciones ejecutadas y límites de verificación. No se han añadido métricas ficticias de Lighthouse ni certificaciones de accesibilidad.

## Propiedad y uso

El repositorio debe permanecer bajo la cuenta del propietario del proyecto, con acceso a su código y a la configuración de despliegue. No se ha añadido una licencia de código abierto: hacer público el repositorio permite verlo, pero no equivale a conceder una licencia de reutilización. Las dependencias conservan sus propias licencias.

## Estado de publicación

La entrega está preparada para GitHub y hosting estático. Las URLs finales se incorporarán después de que el propietario autorice la publicación y se verifique el resultado.
