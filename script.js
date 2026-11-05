'use strict';
const root = document.documentElement;
const toggle = document.getElementById('theme');
let savedTheme;
try { savedTheme = localStorage.getItem('homepage-theme'); } catch (_) {}
function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
}
applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
toggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('homepage-theme', theme); } catch (_) {}
});
document.getElementById('year').textContent = new Date().getFullYear();
