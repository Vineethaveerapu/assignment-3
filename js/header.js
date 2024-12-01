const toggleScroll = () => {
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = ""; // Enable scroll
  }
};

// More pages links will be added here
const navLinks = [
  { name: "Home", href: "index.html", class: "nav-link" },
  { name: "Birds", href: "birds.html", class: "nav-link" },
  { name: "Mammals", href: "mammals.html", class: "nav-link" },
  { name: "Reptiles", href: "reptiles.html", class: "nav-link" },
  { name: "About Us", href: "about.html", class: "nav-link" }
];

const hamburgerSvg = `
<svg
      width="100%"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Menu"
    >
      <rect width="50" height="5" fill="white" />
      <rect y="22" width="50" height="5" fill="white" />
      <rect y="44" width="50" height="5" fill="white" />
    </svg>
`;

const closeButtonSvg = `
<svg
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
    >
      <line x1="0" y1="50" x2="50" y2="0" stroke="white" stroke-width="5" />
      <line x1="0" y1="0" x2="50" y2="50" stroke="white" stroke-width="5" />
    </svg>
`;

const hamburgerButtonsList = [
  {
    label: "Menu",
    className: "hamburger",
    ariaLabel: "Menu Toggle",
    svgIcon: hamburgerSvg
  },
  {
    label: "Close",
    className: "close-button",
    ariaLabel: "Close Menu",
    svgIcon: closeButtonSvg
  }
];

const createNavLinks = () => {
  const navbar = document.querySelector("#navbar");
  // add ul
  const ul = document.createElement("ul");
  navbar.appendChild(ul);

  navLinks.forEach((link) => {
    const li = document.createElement("li");
    // reference:   <a href="index.html" class="active">Home</a>
    li.innerHTML = `<a href="${link.href}" class="${link.class}">${link.name}</a>`;
    ul.appendChild(li);
  });
};

const createActiveLink = () => {
  const navLinksElement = document.querySelectorAll("#navbar ul li a");

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinksElement.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
};

const hamburgerButtonsLogic = () => {
  const hamburgerContainer = document.querySelector(".hamburger-container");
  // hamburgerButtonsList
  hamburgerButtonsList.forEach(({ className, ariaLabel, svgIcon }) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add(className);
    buttonElement.innerHTML = svgIcon;
    buttonElement.setAttribute("aria-label", ariaLabel);
    hamburgerContainer.appendChild(buttonElement);
  });

  const navbar = document.getElementById("navbar");

  hamburgerContainer.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburgerContainer.classList.toggle("active");
    toggleScroll();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // create the nav links
  createNavLinks();
  // create the active link
  createActiveLink();
  // hamburger buttons logic
  hamburgerButtonsLogic();
});
