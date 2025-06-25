// Contoh: Scroll ke atas
document.addEventListener('DOMContentLoaded', function () {
  const toTop = document.createElement('button');
  toTop.textContent = '⬆';
  toTop.id = 'toTop';
  toTop.style.position = 'fixed';
  toTop.style.bottom = '20px';
  toTop.style.right = '20px';
  toTop.style.display = 'none';

  document.body.appendChild(toTop);

  window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
