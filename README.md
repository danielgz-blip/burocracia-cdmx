# Website — Dashboard Burocracia CDMX

Sitio estático (HTML+CSS+JS, sin build). Capa 1: números y ranking.
Capa 2: ficha por trámite (`tramite.html?id=...`). Capa 3: evidencia y
metodología (`metodologia.html`). Datos en `data/tramites.json`, generados
del corpus (`marco_legal/` + `ocr_txt/`). Regla: ningún dato sin fuente.

## Publicar en GitHub + Vercel
1. `cd website && git init && git add . && git commit -m "dashboard v0"`
2. Crear repo en github.com (p. ej. `burocracia-cdmx`) y `git push`.
3. En vercel.com → Add New → Project → importar el repo. Framework
   preset: **Other**. Build command: vacío. Output directory: `.`
   (o mover el contenido a la raíz del repo). Deploy.
4. Cada `git push` redespliega solo.

## Agregar un trámite
Editar `data/tramites.json` con la ficha del extractor (pasos, requisitos,
costo con Gaceta, fuentes con fecha). `estado: "en_auditoria"` lo muestra
como tarjeta gris sin cifras inventadas.
