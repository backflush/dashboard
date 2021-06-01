const menuButton = document.querySelector(".menu-btn");
const backButton = document.querySelector(".back-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.style.transform = "translate(0)";
});

backButton.addEventListener("click", () => {
    nav.style.transform = "translate(-100%)";
});