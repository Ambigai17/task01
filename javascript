// script.js

// Get the navbar
const navbar = document.getElementById("navbar");

// Listen for the scroll event
window.addEventListener("scroll", function() {
    // Add or remove the 'scrolled' class based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Add hover effect for scrolling links (optional)
const navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        if (window.scrollY > 50) {
            link.classList.add('scrolled-link');
        }
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('scrolled-link');
    });
});
