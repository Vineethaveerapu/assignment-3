function loadAboutContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "<h1>Meet Our Zoo Avengers Team</h1>";

  const content = {
    intro:
      "We are a passionate team of five zoo enthusiasts dedicated to providing exceptional care for our animal friends and creating memorable experiences for our visitors.",
    members: [
      "Our wildlife expert who specializes in animal behavior and habitat design",
      "Our conservation specialist focused on breeding programs and species preservation",
      "Our animal nutrition expert ensuring optimal diet plans for all residents",
      "Our veterinary care coordinator managing animal health and wellness",
      "Our education and outreach coordinator connecting visitors with wildlife"
    ],
    mission: "Together, we work tirelessly to:",
    goals: [
      "Provide world-class care for our diverse animal family",
      "Educate visitors about wildlife conservation",
      "Participate in global breeding programs",
      "Create enriching environments for our animals",
      "Foster a deep connection between humans and nature"
    ]
  };

  const introPara = document.createElement("p");
  introPara.textContent = content.intro;
  mainContent.appendChild(introPara);

  const teamList = document.createElement("ul");
  content.members.forEach((member) => {
    const li = document.createElement("li");
    li.textContent = member;
    teamList.appendChild(li);
  });
  mainContent.appendChild(teamList);

  const missionPara = document.createElement("p");
  missionPara.textContent = content.mission;
  mainContent.appendChild(missionPara);

  const goalsList = document.createElement("ul");
  content.goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });

  mainContent.appendChild(goalsList);
}

function makeSidebarResponsive() {
  const sidebarContainer = document.querySelector(".sidebar-container");
  const sidebar = document.querySelector(".sidebar");

  // Only create buttons if we're on mobile
  let showSidebarBtn, closeSidebarBtn;

  function createMobileButtons() {
    if (window.innerWidth <= 768 && !showSidebarBtn) {
      showSidebarBtn = document.createElement("button");
      showSidebarBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
      showSidebarBtn.classList.add("show-sidebar-btn");
      document.body.appendChild(showSidebarBtn);

      closeSidebarBtn = document.createElement("button");
      closeSidebarBtn.innerHTML = '<i class="fas fa-times"></i>';
      closeSidebarBtn.classList.add("close-sidebar-btn");
      sidebar.prepend(closeSidebarBtn);

      // Add mobile event listeners
      showSidebarBtn.addEventListener("click", showSidebar);
      closeSidebarBtn.addEventListener("click", hideSidebar);
    }
  }

  function removeMobileButtons() {
    if (showSidebarBtn) {
      showSidebarBtn.remove();
      showSidebarBtn = null;
    }
    if (closeSidebarBtn) {
      closeSidebarBtn.remove();
      closeSidebarBtn = null;
    }
  }

  function showSidebar() {
    sidebarContainer.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function hideSidebar() {
    sidebarContainer.classList.remove("show");
    document.body.style.overflow = "";
  }

  function updateSidebarForScreenSize() {
    if (window.innerWidth <= 768) {
      createMobileButtons();
      hideSidebar();
    } else {
      removeMobileButtons();
      document.body.style.overflow = "";
      sidebarContainer.classList.remove("show");
    }
  }

  // Handle clicking outside sidebar on mobile
  sidebarContainer.addEventListener("click", (event) => {
    if (event.target === sidebarContainer && window.innerWidth <= 768) {
      hideSidebar();
    }
  });

  // Handle clicking sidebar items on mobile
  document.querySelector("#sidebar-list").addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      hideSidebar();
    }
  });

  window.addEventListener("resize", updateSidebarForScreenSize);
  updateSidebarForScreenSize();
}

// Update the DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", function () {
  loadAboutContent();
  makeSidebarResponsive();
});
