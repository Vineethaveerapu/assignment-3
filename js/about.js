const teamMembers = [
    {
      name: "Vineetha",
      description:
        "A true explorer, Vineetha loves discovering the unique traits of every animal in the zoo and enjoys learning fascinating facts about their habitats.",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Priyadharshini",
      description:
        "Priyadharshini finds joy in connecting with animals, spending her time admiring their beauty and appreciating conservation efforts..",
      photo: "./images/priyadharshini.jpg",
    },
    {
      name: "Megha",
      description:
        "Megha always curious, Megha is fascinated by the zoos wildlife diversity and loves observing the behaviors of exotic creatures. ",
      photo: "./images/megha.jpg", 
    },
    {
      name: "Kavitha",
      description:
        "Kavitha with a passion for nature, Kavitha enjoys the peaceful environment of the zoo and cherishes moments with the animals.",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Maedeh",
      description:
        "Maedeh is a wildlife enthusiast who loves capturing the magic of the zoo through photography and storytelling.",
      photo: "./images/maedeh.jpg",
    },
  ];
  const sidebarList = document.getElementById("sidebar-list");
  teamMembers.forEach((member, index) => {
    const li = document.createElement("li");
    li.textContent = member.name;
    li.dataset.index = index;
    sidebarList.appendChild(li);
  });
  const detailsCard = document.getElementById("details-card");
  const memberName = document.getElementById("member-name");
  const memberRole = document.getElementById("member-role");
  const memberDescription = document.getElementById("member-description");
  const memberPhoto = document.getElementById("member-photo");
  sidebarList.addEventListener("click", (event) => {
    const index = event.target.dataset.index;
    if (index !== undefined) {
      const member = teamMembers[index];
      memberName.textContent = member.name;
      memberRole.textContent = member.role;
      memberDescription.textContent = member.description;
      memberPhoto.src = member.photo;
      detailsCard.classList.remove("hidden");
      const activeItem = document.querySelector("#sidebar-list .active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      event.target.classList.add("active");
    }
  });
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    detailsCard.classList.add("hidden");
  });
  