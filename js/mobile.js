const menuIconInactive = document.getElementById("menu-icon-inactive");
const menuIconActive = document.getElementById("menu-icon-active");
const nav = document.getElementById("menu");

menuIconInactive.addEventListener("click", () => {
  nav.style.display = "block";
  menuIconInactive.style.display = "none";
  menuIconActive.style.display = "block";
});

menuIconActive.addEventListener("click", () => {
  nav.style.display = "none";
  menuIconInactive.style.display = "block";
  menuIconActive.style.display = "none";
});
