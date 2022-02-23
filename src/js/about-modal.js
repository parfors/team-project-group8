(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    openModalBtn2: document.querySelector('[data-about-modal-open-hero]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
