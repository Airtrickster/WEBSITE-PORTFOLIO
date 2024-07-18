function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// typing text animation script
var typed = new Typed(".typing", {
  strings: ["IT Student", "Front-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2", {
  strings: ["Photographer", "Editor" ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});