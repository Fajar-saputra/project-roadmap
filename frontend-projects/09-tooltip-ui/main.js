// Ambil elemen tombol dan ikon dari DOM
const themeToggleBtn = document.getElementById("dark-mode");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Set tema awal berdasarkan localStorage atau default ke 'light'
const currentTheme = localStorage.getItem("theme") || "light";
applyTheme(currentTheme);

// Tambahkan event listener pada tombol untuk toggle tema
themeToggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    // Tentukan tema baru
    const newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(newTheme); // Terapkan tema baru
    localStorage.setItem("theme", newTheme); // Simpan tema ke localStorage
}

function applyTheme(theme) {
    // Terapkan tema ke body
    document.body.setAttribute("data-theme", theme);

    // Tampilkan ikon sesuai dengan tema
    if (theme === "dark") {
        sunIcon.style.display = "none"; // Sembunyikan ikon matahari
        moonIcon.style.display = "block"; // Tampilkan ikon bulan
    } else {
        sunIcon.style.display = "block"; // Tampilkan ikon matahari
        moonIcon.style.display = "none"; // Sembunyikan ikon bulan
    }
}
