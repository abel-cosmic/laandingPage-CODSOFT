// Define your image paths
const defaultImages = [
  "assets/icons/ball.svg",
  "assets/icons/paper.svg",
  "assets/icons/meter.svg",
  "assets/icons/earth.svg",
  "assets/icons/tv.svg",
  "assets/icons/bridge.svg",
];

const hoveredImages = [
  "assets/icons/ball-1.svg",
  "assets/icons/paper-1.svg",
  "assets/icons/meter-1.svg",
  "assets/icons/earth-1.svg",
  "assets/icons/tv-1.svg",
  "assets/icons/bridge-1.svg",
];
const serviceItems = document.querySelectorAll(".service-items");
serviceItems.forEach((item, index) => {
  const iconElement = item.querySelector(".icon");

  item.addEventListener("mouseenter", () => {
    iconElement.src = hoveredImages[index];
  });

  item.addEventListener("mouseleave", () => {
    iconElement.src = defaultImages[index];
  });
});
