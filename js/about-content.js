function loadAboutContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "<h1>Meet Our Zoo Avengers Team</h1>";

  const content =
    {
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

document.addEventListener("DOMContentLoaded", function () {
  loadAboutContent();
});
