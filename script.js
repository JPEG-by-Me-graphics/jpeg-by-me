const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
    });
});