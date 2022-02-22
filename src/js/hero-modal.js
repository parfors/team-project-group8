(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hero-modal-open]'),
    openModal2Btn: document.querySelector('[data-hero-mob-modal-open]'),
    closeModalBtn: document.querySelector('[data-hero-modal-close]'),
    modal: document.querySelector('[data-hero-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModal2Btn.addEventListener('click', toggleModal2);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModal2() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
