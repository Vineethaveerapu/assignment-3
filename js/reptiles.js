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

function createMainReptileContent() {
    const mainReptileContent = document.getElementById("main-reptile-content");

    const introSection = `
        <h1 class="reptile-h1">Discover the Wonders of the Reptile Kingdom</h1>
        <h2>Reptiles</h2>
        <p>Reptiles are highly adaptable and live in diverse habitats, including forests, deserts, wetlands, grasslands, and even urban areas. They are found on every continent except Antarctica. Reptiles face threats like habitat destruction, climate change, poaching, and pollution. Conservation efforts, including protected areas and breeding programs, are crucial to their survival. Reptiles are a diverse and intriguing group of animals, showcasing remarkable adaptations that have allowed them to thrive for millions of years.</p>
    `;
    mainReptileContent.innerHTML = introSection;

    const section = document.createElement("section");
    section.classList.add("reptile-section");
    section.innerHTML = `<h2>Explore Nature’s Zoo Reptiles</h2>`;

    const reptileContainer = document.createElement("div");
    reptileContainer.classList.add("reptile-container");

    reptilesData.forEach((reptile) => {
        const reptileCard = document.createElement("div");
        reptileCard.classList.add("nature-reptile");

        reptileCard.innerHTML = `
            <img src="${reptile.img}" alt="${reptile.title}" />
            <h3>${reptile.title}</h3>
            <p>${reptile.description}</p>
        `;

        reptileCard.addEventListener("mouseenter", () => {
            reptileCard.style.transform = "perspective(500px) rotateY(10deg)";
        });

        reptileCard.addEventListener("mouseleave", () => {
            reptileCard.style.transform = "perspective(500px) rotateY(0deg)";
        });

        reptileContainer.appendChild(reptileCard);
    });

    section.appendChild(reptileContainer);
    mainReptileContent.appendChild(section);
}

createMainReptileContent();
