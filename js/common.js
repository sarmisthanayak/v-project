let timVine = document.getElementById("tim-vine");
let navbar = document.getElementById("main-nav");

let navPos = navbar.getBoundingClientRect().top;
window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});