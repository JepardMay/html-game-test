(function() {
  const modalBtns = document.querySelectorAll('[data-modal-btn]');
  const modals = document.querySelectorAll('[data-modal]');
  
  modalBtns.forEach((modalBtn) => {
    const modalName = modalBtn.getAttribute('data-modal-btn');
    const currentModal = document.querySelector(`[data-modal="${modalName}"]`);

    if (!currentModal) return;
    const closeBtn = currentModal.querySelector('[data-modal-close]');
    let isModalOpen = false;

    const toggleMenu = () => {
      isModalOpen = !isModalOpen;
      currentModal.classList.toggle('is-opened', isModalOpen);
    };

    modalBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    currentModal.addEventListener('click', (evt) => {
      if (!evt.target.closest('[data-modal-body]')) {
        toggleMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modals.forEach((modal) => {
        modal.classList.remove('is-opened');
      });
    }
  });
}());