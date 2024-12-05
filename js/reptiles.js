const reptilesData = [
    {
      img: "./images/alligator.jpg",
      title: "Alligator",
      description: "Alligators are large reptiles primarily found in the southeastern United States and China. They are known for their powerful jaws, armored bodies, and their role as apex predators in freshwater ecosystems."
    },
    {
      img: "./images/anaconda.jpg",
      title: "Anaconda",
      description: "The anaconda, one of the largest snakes in the world, resides in the swamps and rivers of South America. Known for their immense strength, these non-venomous constrictors can grow up to 30 feet long."
    },
    {
      img: "./images/reptile.jpg",
      title: "Lizard",
      description: "Lizards are a diverse group of reptiles found worldwide. They exhibit incredible adaptability, with species ranging from tiny geckos to large monitor lizards, thriving in forests, deserts, and even urban areas."
    },
    {
      img: "./images/dragon.jpg",
      title: "Komodo Dragon",
      description: "The Komodo dragon, the largest lizard in the world, is native to Indonesia. Renowned for their size and strength, they are formidable predators capable of taking down large prey."
    },
    {
      img: "./images/Hawsbill-Turtle.webp",
      title: "Hawksbill Turtle",
      description: "The hawksbill turtle is a critically endangered sea turtle species known for its strikingly beautiful shell and its important role in maintaining coral reef health by controlling sponge populations."
    },
    {
      img: "./images/Reptiles_collage.jpg",
      title: "Australian Reptiles",
      description: "Australia is home to a rich diversity of reptiles, including unique species like the frill-necked lizard, thorny devil, and saltwater crocodile. These creatures have evolved remarkable adaptations to survive in their environments."
    }
  ];

  const reptileContainer = document.getElementById('reptile-container');

  reptilesData.forEach((reptile) => {
    const reptileCard = document.createElement("div");
    reptileCard.classList.add("nature-reptile");

    reptileCard.innerHTML = `
      <img src="${reptile.img}" alt="${reptile.title}" />
      <h3>${reptile.title}</h3>
      <p>${reptile.description}</p>
    `;

    // Add hover effects
    reptileCard.addEventListener("mouseenter", () => {
      reptileCard.style.transform = "perspective(500px) rotateY(10deg)";
    });

    reptileCard.addEventListener("mouseleave", () => {
      reptileCard.style.transform = "perspective(500px) rotateY(0deg)";
    });

    reptileContainer.appendChild(reptileCard);
  });

document.addEventListener("DOMContentLoaded", () => {
    const mainReptileContent = document.getElementById("main-reptile-content");

    const section = document.createElement("section");
    section.classList.add("reptile-section");

    const h1 = document.createElement("h1");
    h1.classList.add("reptile-h1");
    h1.textContent = "Welcome to the Reptile World!";

    const welcomemessage = document.createElement("p");
    welcomemessage.classList.add("welcomemessage-p");
    welcomemessage.textContent = "Step into the fascinating world of reptiles, where ancient creatures roam and thrive in their natural habitats. From the mighty alligator to the venomous snakes, our reptile exhibit showcases an incredible diversity of these cold-blooded survivors. Discover the unique behaviors, incredible adaptations, and awe-inspiring beauty of these creatures. Whether you’re here to learn, explore, or simply marvel at the wonders of nature, you’re sure to be amazed by the reptiles that call our zoo home. Enjoy your adventure through the wild world of reptiles!";

    const paragraph = document.createElement("p");
    paragraph.classList.add("reptile-p");
    paragraph.textContent = "Reptiles are highly adaptable and live in diverse habitats, including forests, deserts, wetlands, grasslands, and even urban areas. They are found on every continent except Antarctica. Reptiles face threats like habitat destruction, climate change, poaching, and pollution. Conservation efforts, including protected areas and breeding programs, are crucial to their survival. Reptiles are a diverse and intriguing group of animals, showcasing remarkable adaptations that have allowed them to thrive for millions of years."

    const h2 = document.createElement("h2");
    h2.textContent = "Explore Nature’s Zoo Reptiles";

    section.appendChild(h1);
    section.appendChild(welcomemessage);
    section.appendChild(h2);
    section.appendChild(paragraph);
    

    const reptileContainer = document.createElement("div");
    reptileContainer.classList.add("reptile-container");

    const factsContainer = document.createElement("div");

    const factsHeading = document.createElement("h4");
    factsHeading.textContent = "Interesting Facts About Reptiles";
    factsHeading.style.textAlign = "center";
    factsHeading.style.fontSize = "1.4rem";
    factsHeading.style.marginBottom = "20px";
    section.appendChild(factsHeading);

    const factList = document.createElement("ul");
    factList.style.fontSize = "1rem";
    factList.style.lineHeight = 2;
    factList.style.paddingLeft = "40px";

    const reptileFacts = [
        "Some reptiles, like certain lizards and snakes, can regenerate lost body parts such as tails or limbs.",
        "Turtles and tortoises are known for their slow movement and long lifespans, some living over 100 years.",
        "Chameleons are famous for their color-changing abilities, which help them camouflage, communicate, or regulate body temperature.",
        "Snakes have highly specialized jaws that allow them to swallow prey much larger than their head."
    ];

    reptileFacts.forEach((fact) => {
        const factItem = document.createElement("li");
        factItem.textContent = fact;
        factItem.style.marginBottom = "10px";
        factList.appendChild(factItem);
    });

    section.appendChild(factList);
    document.body.appendChild(factsContainer);
    section.appendChild(factsContainer);
    mainReptileContent.appendChild(section);
});

const addBackgroundVideo = () => {
    const video = document.createElement("video");
    video.src = "./videos/reptiles.mp4"; 
    video.autoplay = true;
    video.loop = true;
    video.muted = true; 
    video.playsInline = true; 

    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.zIndex = "-1";

    document.body.appendChild(video);
};
addBackgroundVideo();

const updateAnimalDescription = () => {
  const animalNames = document.querySelectorAll(".animal-name");

  animalNames.forEach((animalName) => {
      animalName.addEventListener("click", (e) => {
          const reptileSection = document.getElementById("reptile-section");
          const animalTitle = animalName.textContent;
          const reptile = reptilesData.find((r) => r.title === animalTitle);
          const sidebar = document.querySelector('.sidebar-content-container');
          const animalDescription = document.getElementById("animal-description");

          reptileSection.style.visibility = "hidden";
          reptileSection.style.position = "absolute";

          animalDescription.style.visibility = "visible";
          animalDescription.style.position = "relative";

          sidebar.style.visibility = "visible";
          sidebar.style.position = "relative";

          const shortDescription = reptile.description.slice(0, 200);
          const fullDescription = reptile.description;

          animalDescription.innerHTML = `
              <h3>${reptile.title}</h3>
              <img src="${reptile.img}" alt="${reptile.title}" />
              <p class="animal-short-description">${shortDescription}...</p>
              <button class="read-more-btn">Read More</button>
              <button id="back-btn">Back to Reptiles</button>
          `;

          // Read more functionality
          const readMoreButton = document.querySelector('.read-more-btn');
          const shortDescriptionElement = document.querySelector('.animal-short-description');
          readMoreButton.style.display = "inline-block";

          readMoreButton.addEventListener("click", () => {
              shortDescriptionElement.textContent = fullDescription;
              readMoreButton.style.display = "none";
          });

          // Back to reptiles functionality
          const backButton = document.getElementById("back-btn");
          backButton.addEventListener("click", () => {
              animalDescription.innerHTML = "";
              animalDescription.style.visibility = "hidden";

              // Show the reptile section again
              reptileSection.style.visibility = "visible";
              reptileSection.style.position = "relative";
          });
      });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  updateAnimalDescription();
});
