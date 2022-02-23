(() => {
  const mobileMenu = document.querySelector('[data-hero-modal]');
  const openMenuBtn = document.querySelector('[data-hero-modal-open]');
  const openMenuBtn2 = document.querySelector('[data-hero-mob-modal-open]');
  const closeMenuBtn = document.querySelector('[data-hero-modal-close]');


  const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    openMenuBtn2.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  openMenuBtn2.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-hidden');
    openMenuBtn.setAttribute('aria-expanded', false);
    openMenuBtn2.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


