(() => {
    const refs = {
      openContactModalBtn: document.querySelector('[data-contacts-modal-open]'),
      closeContactModalBtn: document.querySelector('[data-contacts-modal-close]'),
      modal: document.querySelector('[data-contacts-modal]'),
    };
  
    refs.openContactModalBtn.addEventListener('click', toggleContactModal);
    refs.closeContactModalBtn.addEventListener('click', toggleContactModal);
  
    function toggleContactModal() {

      refs.modal.classList.toggle('is-hidden');
    }
  })();