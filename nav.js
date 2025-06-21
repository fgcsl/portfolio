// nav.js
function setupNavigation() {
  // Inject the navigation
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;
      
      // Now bind the toggle
      const toggle = document.getElementById("menu-toggle");
      const navbar = document.getElementById("navbar");
      
      if (toggle && navbar) {
        toggle.addEventListener("click", () => {
          navbar.classList.toggle("active");
        });
      }
      
      // Close menu when clicking on a link (for mobile)
      const navLinks = document.querySelectorAll(".navbar a");
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navbar.classList.remove("active");
        });
      });
    });
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", setupNavigation);
