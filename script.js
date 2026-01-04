// Animación de aparición al hacer scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});