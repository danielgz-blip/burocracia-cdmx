/* Nav única del sitio: estática, transparente, sin logo, alineada a la derecha.
   El botón "Contar mi caso" vive siempre dentro de la barra.
   Tablet (≤1024px) y menor → menú hamburguesa (breakpoint, no medición de espacio). */
(function () {
  const enlaces = [
    { href: 'index.html#ranking', label: 'Trámites' },
    { href: 'barreras.html', label: 'Barreras' },
    { href: 'cuenta.html', label: 'Cuenta tu caso' },
    { href: 'acerca-de.html', label: 'Acerca de' }
  ];
  const lista = enlaces.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="nav">
      <div class="container nav-in">
        <div class="nav-links">${lista}</div>
        <button class="hamburguesa" aria-label="Menú" aria-expanded="false"><i data-lucide="menu"></i></button>
      </div>
      <div class="nav-menu" hidden>
        ${lista}
        <a class="btn nav-cta" href="cuenta.html">Contar mi caso</a>
      </div>
    </nav>`);

  const nav = document.querySelector('.nav');
  const burger = nav.querySelector('.hamburguesa');
  const menu = nav.querySelector('.nav-menu');
  const mq = window.matchMedia('(max-width: 1024px)');

  function sincronizar() {
    nav.classList.toggle('compacto', mq.matches);
    if (!mq.matches) { menu.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
  }

  burger.addEventListener('click', () => {
    const abrir = menu.hidden;
    menu.hidden = !abrir;
    burger.setAttribute('aria-expanded', String(abrir));
    burger.innerHTML = `<i data-lucide="${abrir ? 'x' : 'menu'}"></i>`;
    if (window.lucide) lucide.createIcons();
  });

  if (mq.addEventListener) mq.addEventListener('change', sincronizar);
  else mq.addListener(sincronizar);
  sincronizar();
  if (window.lucide) lucide.createIcons();
  else window.addEventListener('load', () => window.lucide && lucide.createIcons());
})();
