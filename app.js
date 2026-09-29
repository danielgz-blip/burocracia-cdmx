fetch('data/tramites.json').then(r => r.json()).then(db => {
  const auditados = db.tramites.filter(t => t.estado === 'auditado');
  document.getElementById('n-tramites').textContent = auditados.length;
  document.getElementById('n-barreras').textContent = db.barreras.total;
  document.getElementById('n-docs').textContent = db.documentos_oficiales || '49';

  const cards = document.getElementById('cards');
  db.tramites.forEach(t => {
    const d = document.createElement('article');
    d.className = 'card';
    if (t.estado === 'en_auditoria') {
      d.innerHTML = `<i data-lucide="file-search"></i>
        <h3>${t.nombre}</h3><p class="dep">${t.dependencia}</p>
        <span class="badge gris">En auditoría</span>
        <p><a href="tramite.html?id=${t.id}">Ver ficha →</a></p>`;
    } else {
      d.innerHTML = `<i data-lucide="alert-triangle"></i>
        <h3>${t.nombre}</h3><p class="dep">${t.dependencia}</p>
        <p><span class="dato">${t.visitas} sedes</span> · <span class="dato">${t.citas} citas</span> ·
        <span class="dato">${t.horas_medidas} h</span> · <span class="dato">$${t.costo_mxn}</span></p>
        <span class="badge ${t.semaforo}">Carga alta</span>
        <p><a href="tramite.html?id=${t.id}">Ver detalle y evidencia →</a></p>`;
    }
    cards.appendChild(d);
  });

  const bl = document.getElementById('barreras-list');
  if (bl) db.barreras.destacadas.forEach(b => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Barrera #${b.n}: ${b.titulo}.</strong> ${b.detalle}`;
    bl.appendChild(li);
  });

  if (window.lucide) lucide.createIcons();
  else window.addEventListener('load', () => window.lucide && lucide.createIcons());
}).catch(() => {
  document.getElementById('cards').innerHTML =
    '<p class="nota">No se pudieron cargar los datos.</p>';
});
