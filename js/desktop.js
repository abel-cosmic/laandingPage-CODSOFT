const listItems = document.querySelectorAll(".desktop-lists li");
const sections = document.querySelectorAll(".section");

function setActive(listItem) {
  listItems.forEach((item) => item.classList.remove("plus"));
  listItem.classList.add("plus");
}

listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = item.getAttribute("data-section");
    const targetSection = document.getElementById(sectionId);
    setActive(item);
    targetSection.scrollIntoView({ behavior: "smooth" });
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
