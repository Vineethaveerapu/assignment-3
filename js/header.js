document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-container");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
    toggleScroll();
  });
});

const toggleScroll = () => {
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = ""; // Enable scroll
  }
};
