const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Initialize icon based on theme
function updateIcon(theme) {
  toggleBtn.innerHTML = theme === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// Load from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
}

// Toggle and persist
toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});
