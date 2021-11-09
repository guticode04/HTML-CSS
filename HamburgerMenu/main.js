// Grab needed elements 
const hamburger = document.querySelector(".hamburger-container");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Add event listeners
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(link => link.addEventListener("click", closeMenu));

// Add functions
function mobileMenu() {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
}

function closeMenu() {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}