## Propósito
Este repositorio contiene materiales docentes y ejercicios estáticos (HTML/CSS/JS) organizados por unidades (UD1, UD2, UD3, ...). El objetivo de este archivo es dar instrucciones concretas a un agente de IA para que sea productivo rápidamente: entender la arquitectura, las convenciones del proyecto y las acciones seguras y útiles a realizar.

## Panorama general (big picture)
- Estructura principal: carpetas por unidad `UD1/`, `UD2/`, `UD3/` y una carpeta `Web/` con ejemplos. Cada unidad agrupa días (`Dia1/`, `Dia2/`) y recursos ( `css/`, `img/`, `js/`).
- Contenido: páginas estáticas HTML enlazadas a hojas de estilo en `css/` y recursos en `img/`.
- No hay servidor backend ni sistema de build presente: la web se sirve como archivos estáticos.

## Qué inspeccionar primero
1. `README.md` (raíz) — índice y mapeo de unidades.
2. `UD3/readme.md` y `UD2/readme.md` — describe ejercicios y estructura por unidad.
3. Ejemplos de entrada: `Web/index.html`, `UD3/Dia1/index.html`, `UD2/Dia1/index.html`.
4. Estilos globales: `UD3/Dia1/css/estilos.css` y los `css/` dentro de cada unidad.

## Convenciones y patrones del proyecto
- Nombres: archivos en minúsculas, `index.html` usado como punto de entrada en subcarpetas.
- Recursos: imágenes en carpetas `img/` junto a cada unidad; las rutas son relativas (ej.: `../img/mono.jpg`).
- Estructura repetida por unidad: cada `DiaX/` tiene su propio `index.html`, `css/` y `img/` — cuando añadas páginas, mantén ese patrón.
- No hay test framework ni linter configurado; evitar cambios que introduzcan dependencias sin indicarlo.

## Flujo de trabajo del desarrollador (cómo correr y depurar)
- Abrir `index.html` con el navegador o usar una extensión como VS Code Live Server.
- Si se necesita servir por HTTP (para rutas relativas o fetch), usar un servidor estático simple: `python -m http.server 8000` desde la carpeta raíz del repositorio.
- Depuración: abrir las DevTools del navegador (Console/Network) — muchas páginas usan rutas relativas que fallan si no se sirve por HTTP.

## Acciones seguras y recomendadas para un agente
- Al editar HTML/CSS, mantener la estructura de carpetas y las rutas relativas; si renombras/trasladas un recurso, actualiza todos los `src`/`href` referenciantes.
- Para añadir nuevas páginas, crear `index.html` en una nueva carpeta `UDx/DiaY/`, colocar assets en `img/` y `css/`, y enlazar desde el `README.md` de la unidad si corresponde.
- Evitar introducir herramientas de build (webpack, npm) sin permiso del mantenedor. Este repositorio está pensado para archivos estáticos simples.

## Ejemplos concretos del repositorio
- Para cambiar estilos globales en la unidad 3: editar `UD3/Dia1/css/estilos.css`.
- Para ver un ejemplo de página con imágenes: `UD3/Dia1/index.html` (usa `img/cdteruel.jpg` y `css/estilos.css`).
- Para añadir ejercicios extra a UD2, siga la convención de `UD2/Dia2/` y actualice `UD2/readme.md`.

## Qué no hacer
- No eliminar ni mover carpetas `img/` sin actualizar referencias HTML.
- No introducir cambios que requieran instalar dependencias externas sin documentarlo en el `README.md`.

## Preguntas que el agente debe hacer si hay ambigüedad
- ¿Deseas que agregue Live Server o instrucciones más detalladas para servir localmente? 
- ¿Prefieres que cree un índice navegable entre todas las unidades (`index` global) cuando agregue nuevas páginas?

Por favor revisa este borrador y dime si quieres que incorpore ejemplos adicionales, políticas más estrictas sobre commits, o automatizaciones (scripts de verificación, linter).
