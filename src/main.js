const toggleBtn = document.getElementById('dark-toggle');

toggleBtn?.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Mode clair';
  } else {
    toggleBtn.textContent = '🌙 Mode sombre';
  }
});




