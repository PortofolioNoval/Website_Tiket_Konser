// Efek fade-in sederhana saat elemen masuk viewport
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));

// Inisialisasi EmailJS
emailjs.init("bfuH4f9Tq0l8IPuk0");

// Form contact
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const messageInput = document.getElementById('contactMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert("Semua kolom harus diisi!");
    return;
  }

  const popup = document.getElementById("successPopup");
  const popupTitle = popup.querySelector("h3");
  const popupMessage = popup.querySelector("p");

  // Tampilkan popup langsung saat diklik
  popupTitle.textContent = "Mengirim...";
  popupMessage.textContent = "Mohon tunggu sebentar.";
  popup.classList.remove("hidden");
  popup.classList.add("show");

  const templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs.send("service_16", "template_81eflu9", templateParams)
    .then(() => {
      // Ubah isi popup jadi sukses
      popupTitle.textContent = "Success";
      popupMessage.textContent = "Pesan berhasil dikirim!";

      contactForm.reset();

      setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hidden");
      }, 3000);
    })
    .catch((error) => {
      console.error("Gagal mengirim pesan:", error);

      // Ubah isi popup jadi gagal
      popupTitle.textContent = "Gagal!";
      popupMessage.textContent = "Pesan tidak terkirim. Silakan coba lagi.";

      setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hidden");
      }, 3000);
    });
});
