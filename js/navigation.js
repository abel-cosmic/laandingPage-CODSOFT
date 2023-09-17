const listItems = document.querySelectorAll(".lists a");
const sections = document.querySelectorAll(".section");
function setActive(listItem) {
  listItems.forEach((item) => item.classList.remove("active"));
  listItem.classList.add("active");
}
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = item.getAttribute("data-section");
    const targetSection = document.getElementById(sectionId);
    setActive(item);
    targetSection.scrollIntoView({ behavior: "smooth" });
    nav.style.display = "none";
    menuIconInactive.style.display = "block";
    menuIconActive.style.display = "none";
  });
});

function highlightActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      const sectionId = section.getAttribute("id");
      setActive(document.querySelector(`[data-section="${sectionId}"]`));
    }
  });
}

window.addEventListener("scroll", highlightActiveSection);
