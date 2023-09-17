document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".toogleup");
    function toggleBackToTopButton() {
      if (window.scrollY > 0) {
        backToTopButton.style.display = "flex";
      } else {
        backToTopButton.style.display = "none";
      }
    }
    window.addEventListener("scroll", toggleBackToTopButton);
    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  