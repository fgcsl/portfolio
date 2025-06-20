  <!-- Inject nav.html + Activate toggle -->
  <script>
    fetch('components/nav.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;

        // ✅ Run the toggle logic after injection
        const toggle = document.getElementById("menu-toggle");
        const navbar = document.getElementById("navbar");

        if (toggle && navbar) {
          toggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
          });
        }
      });
  </script>
