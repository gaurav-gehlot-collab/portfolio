// Toggle theme logic (keep your existing code as-is)
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateIcon(theme) {
  toggleBtn.innerHTML = theme === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
}

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

// === ✅ Mobile menu toggle logic ===
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on button click
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// 1. Auto-close menu when clicking any nav link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// 2. Auto-close menu when clicking outside the menu
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnButton = menuBtn.contains(event.target);
  if (!isClickInsideMenu && !isClickOnButton) {
    navMenu.classList.remove('show');
  }
});
