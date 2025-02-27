document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-consent");
    const acceptButton = document.getElementById("accept-cookie");

    // Cek apakah user sudah menerima cookie sebelumnya
    if (localStorage.getItem("cookieConsent") === "accepted") {
        cookieBanner.style.display = "none";
    }

    // Jika tombol diterima ditekan, simpan di localStorage
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });
});
