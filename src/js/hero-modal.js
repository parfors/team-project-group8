(() => {
    const refs = {
      openHeroModalBtn: document.querySelector('[data-hero-modal-open]'),
      openHeroModalBtn2: document.querySelector('[data-hero-mob-modal-open]'),
      closeHeroModalBtn: document.querySelector('[data-hero-modal-close]'),
      modal: document.querySelector('[data-hero-modal]'),
    };
  
  refs.openHeroModalBtn.addEventListener('click', toggleHeroModal);
  refs.openHeroModalBtn2.addEventListener('click', toggleHeroModal);
    refs.closeHeroModalBtn.addEventListener('click', toggleHeroModal);
   
      function toggleHeroModal() {
      refs.modal.classList.toggle('is-hidden');
      }
  
  })();

