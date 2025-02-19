// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date("July 03, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `Pernikahan dalam: ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Hari Pernikahan Telah Tiba!";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Efek Animasi Scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();

// Form RSVP - Simulasi Pengiriman Data
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Terima kasih telah mengonfirmasi kehadiran Anda!");
});
function redirectWithMusic() {
    localStorage.setItem("playMusic", "true"); // Simpan status
    window.location.href = "undangan.html"; // Redirect ke halaman baru
}
document.addEventListener("DOMContentLoaded", function () {
    let shouldPlayMusic = localStorage.getItem("playMusic"); 
    if (shouldPlayMusic === "true") {
        let audio = document.getElementById("bgMusic");
        audio.play().catch(error => console.log("Gagal memutar lagu:", error));
        localStorage.removeItem("playMusic"); // Hapus status setelah diputar
    }
});


