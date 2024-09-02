const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(item => item.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}