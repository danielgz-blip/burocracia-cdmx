/* Nav única del sitio: estática, transparente, sin logo.
   Si los elementos no caben en horizontal → menú hamburguesa
   (detección real de espacio, no breakpoint fijo). */
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
        <a class="btn nav-cta" href="cuenta.html">Contar mi caso</a>
        <button class="hamburguesa" aria-label="Menú" aria-expanded="false"><i data-lucide="menu"></i></button>
      </div>
      <div class="nav-menu" hidden>
        ${lista}
        <a class="btn" href="cuenta.html">Contar mi caso</a>
      </div>
    </nav>`);

  const nav = document.querySelector('.nav');
  const cont = nav.querySelector('.nav-in');
  const burger = nav.querySelector('.hamburguesa');
  const menu = nav.querySelector('.nav-menu');

  function ajustar() {
    nav.classList.remove('compacto');
    burger.hidden = true;
    // si el contenido desborda el ancho disponible, entra modo hamburguesa
    if (cont.scrollWidth > cont.clientWidth) {
      nav.classList.add('compacto');
      burger.hidden = false;
    }
  }

  burger.addEventListener('click', () => {
    const abrir = menu.hidden;
    menu.hidden = !abrir;
    burger.setAttribute('aria-expanded', String(abrir));
    burger.innerHTML = `<i data-lucide="${abrir ? 'x' : 'menu'}"></i>`;
    if (window.lucide) lucide.createIcons();
  });

  window.addEventListener('resize', ajustar);
  window.addEventListener('load', ajustar);
  ajustar();
  if (window.lucide) lucide.createIcons();
  else window.addEventListener('load', () => window.lucide && lucide.createIcons());
})();
