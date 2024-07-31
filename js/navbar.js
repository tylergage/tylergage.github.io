function createNavbar() {
    // Add html for nav bar, this is source of truth for nav bar content
    const navbar = `
    <nav class="navbar">
        <a href="index.html"><div class="brand"><img src="assets/logo.png" class="logo"> </div></a>
        <button class="hamburger" aria-label="Toggle menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <ul class="nav-menu">
            <li class="nav-link" id="chat-nav"><a href="#">Chat Now</a></li>
            <li class="nav-link"><a href="about.html">About Us</a></li>
            <li class="nav-link"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    `;
  
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
      navbarPlaceholder.innerHTML = navbar;
    }

    // Add functionality to the nav bar
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    document.getElementById('chat-nav').addEventListener('click', function() {
        Intercom('show');
    });
}
  
// Create Nav Bar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createNavbar);
