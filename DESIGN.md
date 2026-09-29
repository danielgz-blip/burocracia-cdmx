# DESIGN.md — Lenguaje visual de "Burocracia CDMX"
Extraído el 2026-09-29 del análisis de 5 páginas de decidim.org
(home, /first-steps, /features, /book, /about) y su CSS real
(`vendor/tailwind.css`, `vendor/vendor.bundle.css`). Cada regla cita de
dónde sale. Toda modificación visual del sitio debe respetar este archivo.

## 1. Tipografía
- Familia única: **Barlow** (Google Fonts), fallback `system-ui, sans-serif`.
  Pesos usados: 400 (cuerpo), 500-600 (títulos), 700-800 (énfasis/cifras).
  Fuente: `html{font-family:Barlow,system-ui,sans-serif}` en tailwind.css.
- Escala (móvil → escritorio), de las clases `.h1/.h2/.h3` de Decidim:

  | Elemento | Móvil | Escritorio (md+) | Peso |
  |---|---|---|---|
  | h1 | 36px / 40px | 64px / 72px | 600 |
  | h2 | 32px / 38px | 48px / 50px | 600 |
  | h3 | 24px / 28px | 36px / 40px | 600 |
  | sub-lead | 24px / 32px (`text-2xl`) | 48px / 50px **font-light (300)** | 300 |
  | párrafo lead | 20px / 28px (`text-xl`) | igual | 400 |
  | párrafo | 18px / 28px (`text-lg` = 1.125rem/1.75rem) | igual | 400 |
  | etiqueta/caption | 14-16px / 22px (`leading-[22px]`) | igual | 400-600 |

- Los sub-encabezados grandes usan peso ligero: `text-black font-normal
  text-2xl md:text-5xl md:font-light` (features.html). Contraste título
  semibold + subtítulo light: característico de Decidim.

## 2. Interlineado y viudas (REGLA OBLIGATORIA)
- Cuerpo: `line-height: 1.6-1.75` (nunca 1.5 rígido en párrafos largos).
  Decidim usa 28px en párrafos de 18px (1.55) y 1.75rem en text-lg/xl.
- Títulos: `line-height` ajustado (50-72px), nunca `leading-none` salvo
  cifras display.
- **Sin viudas ni huérfanos**:
  - `text-wrap: balance` en h1-h3 (Decidim lo usa: `text-balance` en h2).
  - `text-wrap: pretty` en párrafos (estándar CSS moderno, la UA evita
    la última línea huérfana).
  - Como respaldo para navegadores viejos: cerrar la penúltima palabra
    con `&nbsp;` en frases de 2+ líneas de titulares y leads.
  - Prohibido `white-space: nowrap` en cualquier texto corrido.

## 3. Color
- Texto principal: `#111827` (gray-900). Secundario: `#4b5563`/`#6b7280`.
  Tenue/caption: `#9ca3af`. Bordes: `#e5e7eb`/`#d1d5db`.
- Fondos: blanco `#fff`, gris suave `#f3f4f6`, hero con imagen + tarjeta de
  color sólido encima (home: `bg-red-500` + texto blanco).
- Acento único. Decidim usa rojo `#f33`/red-500 para CTA y highlights de
  texto (`text-red-500` en h2 de features). En este proyecto el acento es
  `#384CB8` (azul CDMX) — conservarlo como equivalente del rojo Decidim:
  botones primarios, cifras, subtítulos destacados.
- Máximo 3 niveles de gris en una misma vista.

## 4. Espaciado y contenedores
- Contenedor: ancho máximo centrado, padding lateral `px-6` (24px).
- Secciones: separación vertical amplia (`py-12` a `py-20` entre bloques).
- Tarjetas: `p-6` (24px) o `p-8` (32px) interiores; grid `gap-6` a `gap-8`.
- Radios: tarjetas `rounded-xl` (12px); botones/píldoras `rounded-full`;
  nada de bordes cuadrados ni sombras fuertes (sombra suave o solo borde).

## 5. Componentes
- **Hero**: imagen de fondo a sangre + tarjeta de color sólido con título h2
  y párrafo corto con `<br/>` de línea fija (decidim.org home). El botón CTA
  va FUERA de la tarjeta, abajo a la izquierda, pill del color de acento.
- **Bento / feature cards**: icono lineal arriba, título h3, subtítulo en
  una frase, **sin párrafo de cuerpo**. Tres por fila en escritorio.
  Iconos: Lucide, stroke delgado (1.5-2px), color de acento o negro.
- **CTA**: pill `rounded-full`, padding generoso, peso 700, hover oscurece.
- **Tablas**: header con fondo de acento o gris `#f3f4f6`, filas con borde
  fino `#e5e7eb`, padding de celda ~12-16px.

## 6. Voz visual
- Mucho blanco. Densidad baja. El dato grande habla; el texto explica poco.
- Listas cortas. Sin emojis. Sin gradientes. Sin decoración sin función.

## Referencias de extracción (verificadas 2026-09-29)
- `.h1{font-size:36px;font-weight:600;line-height:40px}` / md: 64px/72px
- `.h2{font-size:32px;line-height:38px}` / md: 48px/50px
- `.h3{font-size:24px;line-height:28px}` / md: 36px/40px
- `html{line-height:1.5;font-family:Barlow,system-ui,sans-serif}`
- `text-2xl{font-size:1.5rem;line-height:2rem}`, `text-xl{1.25rem/1.75rem}`,
  `text-lg{1.125rem/1.75rem}`
- `text-wrap:balance` presente en tailwind.css de decidim.org
- Paleta CSS: #111827 #374151 #4b5563 #6b7280 #9ca3af #d1d5db #e5e7eb #f3f4f6 #f33
- Hero home: `<section><div class="bg-cover ... hero"><div class="container
  pt-32 md:pt-56 pb-12 md:pb-16"><div class="md:bg-red-500 md:p-8 text-white
  rounded-xl md:w-1/2">`
