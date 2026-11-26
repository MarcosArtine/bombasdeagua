document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
      navLinks.classList.toggle('active', !isExpanded);
    });

    navLinks.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
        menuToggle.focus();
      }
    });
  }

  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  const heroSection = document.getElementById('inicio');
  const floatingWa = document.querySelector('.floating-wa');
  if (heroSection && floatingWa && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      floatingWa.hidden = entry.isIntersecting;
    });
    heroObserver.observe(heroSection);
  }
});
