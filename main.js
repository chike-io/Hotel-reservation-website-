const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
scrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
});

scrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// room container
scrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// feature container
scrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
});

// news container
scrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 500,
});