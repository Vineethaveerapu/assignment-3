// Team Members Data
const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Zookeeper",
      description:
        "Alice has been taking care of mammals for over 10 years and specializes in elephant care.",
      photo: "https://via.placeholder.com/150", // Replace with actual photo path
    },
    {
      name: "Bob Smith",
      role: "Veterinarian",
      description:
        "Bob ensures the health of reptiles and amphibians, with a passion for wildlife conservation.",
      photo: "https://via.placeholder.com/150", // Replace with actual photo path
    },
    {
      name: "Clara Davis",
      role: "Researcher",
      description:
        "Clara studies bird migration and has published research in leading journals.",
      photo: "https://via.placeholder.com/150", // Replace with actual photo path
    },
    {
      name: "David Wilson",
      role: "Aquatic Specialist",
      description:
        "David manages aquatic life and is an expert on coral reefs.",
      photo: "https://via.placeholder.com/150", // Replace with actual photo path
    },
    {
      name: "Emma Brown",
      role: "Tour Guide",
      description:
        "Emma leads educational tours, sharing knowledge about the zoo's diverse species.",
      photo: "https://via.placeholder.com/150", // Replace with actual photo path
    },
  ];
  
  // Populate Sidebar
  const sidebarList = document.getElementById("sidebar-list");
  
  teamMembers.forEach((member, index) => {
    const li = document.createElement("li");
    li.textContent = member.name;
    li.dataset.index = index;
    sidebarList.appendChild(li);
  });
  
  // Handle Sidebar Clicks
  const detailsCard = document.getElementById("details-card");
  const memberName = document.getElementById("member-name");
  const memberRole = document.getElementById("member-role");
  const memberDescription = document.getElementById("member-description");
  const memberPhoto = document.getElementById("member-photo");
  
  sidebarList.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    if (index !== undefined) {
      const member = teamMembers[index];
  
      // Populate Details Card
      memberName.textContent = member.name;
      memberRole.textContent = member.role;
      memberDescription.textContent = member.description;
      memberPhoto.src = member.photo;
  
      // Show Details Card
      detailsCard.classList.remove("hidden");
  
      // Highlight Active Sidebar Item
      const activeItem = document.querySelector("#sidebar-list .active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      event.target.classList.add("active");
    }
  });
  
  // Close Button Functionality
  const closeButton = document.querySelector(".close-btn");
  
  closeButton.addEventListener("click", () => {
    detailsCard.classList.add("hidden");
  });
  