document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const quantity = document.getElementById('quantity').value;

  // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
    }
    if (!name) {
    alert('Please enter your name.');
    return;
    }

// Form submission handler
const form = document.getElementById('ticketForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const quantity = document.getElementById('quantity').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
    alert('Silakan masukkan nama Anda.');
    return;
    }

    if (!emailRegex.test(email)) {
    alert('Alamat email tidak valid.');
    return;
    }
});

// Header visibility on scroll
const header = document.getElementById('mainHeader');
let headerVisible = false;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    if (scrolled && !headerVisible) {
    headerVisible = true;
    header.classList.add('visible');
    } else if (!scrolled && headerVisible) {
    headerVisible = false;
    header.classList.remove('visible');
    }
});

});

// ✅ Perbaikan class: visible, bukan show
let header = document.getElementById('mainHeader');
let visible = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && !visible) {
    visible = true;
    setTimeout(() => header.classList.add('visible'), 300);
    } else if (window.scrollY <= 50 && visible) {
    header.classList.remove('visible');
    visible = false;
    }
});

let lastScrollY = window.scrollY;

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const goingDown = window.scrollY > lastScrollY;

    if (entry.isIntersecting) {
      entry.target.classList.remove('visible-from-top', 'visible-from-bottom');
      entry.target.classList.add(goingDown ? 'visible-from-top' : 'visible-from-bottom');
    } else {
      entry.target.classList.remove('visible-from-top', 'visible-from-bottom');
    }
  });

  // Update scroll posisi terakhir
  lastScrollY = window.scrollY;
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));

emailjs.init("bfuH4f9Tq0l8IPuk0");

const ticketPrice = 150000;
const quantitySelect = document.getElementById('quantity');
const totalPriceElement = document.getElementById('totalPrice');
const form = document.getElementById('ticketForm');

function updateTotalPrice() {
  const qty = parseInt(quantitySelect.value);
  const total = qty * ticketPrice;
  totalPriceElement.textContent = `Rp${total.toLocaleString('id-ID')}`;
}
quantitySelect.addEventListener('change', updateTotalPrice);
updateTotalPrice();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const quantity = parseInt(quantitySelect.value);
  const paymentMethod = document.getElementById('paymentMethod').value;
  const total = quantity * ticketPrice;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert('Silakan masukkan nama Anda.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Alamat email tidak valid.');
    return;
  }

  if (!paymentMethod) {
    alert('Silakan pilih metode pembayaran.');
    return;
  }

  const templateParams = {
    name: name,
    email: email,
    quantity: quantity,
    total: total.toLocaleString('id-ID'),
    paymentMethod: paymentMethod
  };

  emailjs.send('service_16', 'template_ltv1ajo', templateParams)
});

// Smooth scroll ke #pesan-tiket saat tombol diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('load', () => {
  const hash = window.location.hash;

  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Delay untuk menghindari browser jump default
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100); // Bisa disesuaikan antara 50–200ms
    }
  }
});

document.querySelector('#ticketForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const popup = document.getElementById('ticketPopup');
    popup.classList.add('show');

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      popup.classList.remove('show');
    }, 5000);
  });
