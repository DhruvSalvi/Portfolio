// Theme toggle with localStorage + prefers-color-scheme
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(stored){
    if(stored === 'dark') root.classList.add('dark');
  } else if(prefersDark){
    root.classList.add('dark');
  }
  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
  // Active year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  // Basic form validation
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    const email = form.querySelector('#email')?.value || '';
    const name = form.querySelector('#name')?.value || '';
    if(!name.trim() || !email.includes('@')){
      e.preventDefault();
      alert('Please provide a valid name and email.');
    }
  });
  // Smooth active nav
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
})();
