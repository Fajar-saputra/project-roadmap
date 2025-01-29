const tabs = document.querySelectorAll(".head-tabs li");
const paragraf = document.querySelectorAll(".body-tabs p");

// Loop melalui setiap elemen tab
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Reset warna semua tab
        tabs.forEach(t => t.style.color = "#828282");
        
        // Sembunyikan semua paragraf terlebih dahulu
        paragraf.forEach(p => p.style.display = "none");
        
        // Tampilkan paragraf yang sesuai dengan indeks tab yang diklik
        paragraf[index].style.display = "block";
        
        // Ubah warna tab yang diklik
        tab.style.color = "#121211";
    });
});

// Loop melalui setiap elemen paragraf (hanya untuk debugging)
paragraf.forEach(isi => {
    console.log("ini isi paragraf:", isi);
});

// Loop melalui setiap elemen tab (hanya untuk debugging)
tabs.forEach(isi => {
    console.log("ini isi tab:", isi);
});
