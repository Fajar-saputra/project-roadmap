// Ambil elemen tombol dan ikon dari DOM
const themeToggleBtn = document.getElementById('dark-mode');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Set tema awal berdasarkan localStorage atau default ke 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
applyTheme(currentTheme);

// Tambahkan event listener pada tombol untuk toggle tema
themeToggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
  const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}
