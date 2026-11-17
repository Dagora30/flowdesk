# Revisión técnica — 17 de noviembre de 2026

## Hallazgos y cambios

| Hallazgo | Corrección |
| --- | --- |
| Eventos globales y cambios directos de HTML para precios y FAQ | Estado local de React y renderizado declarativo; eliminado innerHTML |
| Menú con etiqueta estática y sin relación con la navegación | aria-controls, etiqueta según estado, cierre con Escape y retorno del foco |
| CTA duplicada en escritorio | CTA del menú visible solo en móvil |
| Posibles compresiones del panel en pantallas estrechas | Columnas con min-width: 0, panel sin barra lateral por debajo de 400 px, tareas flexibles |
| Cabecera fija sobre destinos de enlaces | scroll-padding-top |
| Sin salto al contenido | Enlace de salto y destino enfocable |
| FAQ sin asociación de controles y respuestas | Botones con aria-expanded y aria-controls, regiones etiquetadas y hidden |
| Textos verdes con contraste mejorable | Tonos más oscuros; focos y objetivos táctiles ampliados |
| Descuento anual sin aclaración de facturación | Texto que explica el equivalente mensual con pago anual |
| Instalación sin bloqueo de versiones | package-lock.json y comprobación con npm ci |
| Preparación de publicación incompleta | README, gitignore, Node 24, CI, favicon, metadatos y configuración de ambos proveedores |

## Comprobaciones realizadas

- Instalación inicial completada; instalación limpia con npm ci y compilación Vite de producción correctas.
- Build final: CSS 14.33 kB (4.18 kB gzip); JavaScript 237.15 kB (73.31 kB gzip), según Vite.
- Navegador: selector anual muestra Pro $9.60 y Business $19.20 y cambia su estado accesible.
- Navegador: pregunta frecuente se expande y expone su respuesta etiquetada.
- Navegador: Elegir Pro muestra el aviso de demostración en la región de estado.
- Navegador: navegación por enlace al inicio actualiza el fragmento de URL.
- Revisión de consola: los errores observados pertenecen a la extensión del navegador; no se observaron errores de la aplicación en el registro inspeccionado.

## Límites

- Ajustes responsive revisados en el código; pendiente prueba visual específica en varios tamaños móviles y en dispositivos físicos.
- Pendiente auditoría completa con lector de pantalla, Lighthouse y revisión WCAG. Las mejoras no implican certificación.
- Pendiente comprobar GitHub Actions dentro de GitHub tras publicar.
- Pendiente despliegue autorizado y verificación de la URL pública.
- No se ha medido un antes/después de rendimiento. Se conservan assets locales, salida minificada y compresión informada por Vite.
