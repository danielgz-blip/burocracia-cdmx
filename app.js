fetch('data/tramites.json').then(r => r.json()).then(db => {
  const auditados = db.tramites.filter(t => t.estado === 'auditado');
  document.getElementById('n-tramites').textContent = auditados.length;
  const moto = db.tramites.find(t => t.id === 'alta-placas-moto');
  document.getElementById('n-horas').textContent = moto ? moto.horas_medidas : '–';
  document.getElementById('n-visitas').textContent = moto ? moto.visitas : '–';
  document.getElementById('n-barreras').textContent = db.barreras.total;

  const cards = document.getElementById('cards');
  db.tramites.forEach(t => {
    const d = document.createElement('article');
    d.className = 'card';
    if (t.estado === 'en_auditoria') {
      d.innerHTML = `<h3>${t.nombre}</h3><p class="dep">${t.dependencia}</p>
        <p>${t.resumen}</p><span class="badge gris">En auditoría</span>
        <p><a href="tramite.html?id=${t.id}">Ver ficha →</a></p>`;
    } else {
      d.innerHTML = `<h3>${t.nombre}</h3><p class="dep">${t.dependencia}</p>
        <p>${t.resumen}</p>
        <p><span class="dato">${t.visitas} sedes</span> · <span class="dato">${t.citas} citas</span> ·
        <span class="dato">${t.horas_medidas} h</span> · <span class="dato">$${t.costo_mxn}</span></p>
        <span class="badge ${t.semaforo}">Carga alta</span>
        <p><a href="tramite.html?id=${t.id}">Ver detalle y evidencia →</a></p>`;
    }
    cards.appendChild(d);
  });

  const bl = document.getElementById('barreras-list');
  db.barreras.destacadas.forEach(b => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Barrera #${b.n}: ${b.titulo}.</strong> ${b.detalle}`;
    bl.appendChild(li);
  });
}).catch(() => {
  document.getElementById('cards').innerHTML =
    '<p class="nota">No se pudieron cargar los datos.</p>';
});
