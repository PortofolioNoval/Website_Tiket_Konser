function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        setTimeout(() => sidebar.classList.add("animate"), 100);
      } else {
        sidebar.classList.remove("animate");
      }
    }

    function toggleCartSidebar() {
      document.getElementById("cartSidebar").classList.toggle("active");
    }

    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

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
