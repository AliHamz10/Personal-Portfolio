document.addEventListener('DOMContentLoaded', () => {
  initializeMobileMenu();
});

function initializeMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.navbar-menu');

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('active');
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });
}
