// Accessible Modal Script :3
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
const lastFocusableElement = modal.querySelectorAll(focusableElements)[modal.querySelectorAll(focusableElements).length - 1];

function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  firstFocusableElement.focus();
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  openModalBtn.focus();
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
  if (e.key === 'Tab' && modal.style.display === 'block') {
    if (document.activeElement === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  }
});