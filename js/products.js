document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".product-nav li a");
  const projectItems = document.querySelectorAll(".product-1");
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedCategory = link.getAttribute("data-category");
      categoryLinks.forEach((categoryLink) => {
        categoryLink.classList.remove("active");
      });
      link.classList.add("active");
      const shuffledItems = Array.from(projectItems);
      shuffleArray(shuffledItems);

      shuffledItems.forEach((item, index) => {
        const categories = item.classList;
        if (
          selectedCategory === "all" ||
          categories.contains(selectedCategory)
        ) {
          item.style.order = index;
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
