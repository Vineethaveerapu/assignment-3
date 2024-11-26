document.addEventListener("DOMContentLoaded", function () {
  const animals = [
    {
      category: "Mammals",
      entries: [
        {
          id: "Echidna",
          name: "Echidna",
          pageLink: "mammals.html",
          details: {
            lifespan: "50 years",
            group: "Mammals",
            food: "insects such as ants and termites, beetle larvae and worms",
            length: "76cm",
            weight: "10kg",
            found: "Throughout Australia"
          },
          description:
            "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
          src: "./images/echidna.png",
          alt: "Echidna",
          width: "30px"
        },
        {
          id: "Tasmanian-Devil",
          name: "Tasmanian Devil",
          description:
            "The Tasmanian Devil is a carnivorous marsupial found in Tasmania, with a small population reintroduced to mainland Australia. It has a stocky build, black fur, and is known for its loud screech and strong bite. Weighing around 10 kg and measuring up to 70 cm, it hunts prey like wallabies and scavenges carrion. It has a lifespan of about 5 years.",
          src: "./images/tasdevil.png",
          alt: "Tasmanian Devil",
          width: "30px"
        },
        {
          id: "Quokka",
          name: "Quokka",
          description:
            "The quokka is a small marsupial native to Rottnest Island and parts of mainland Western Australia. Weighing around 3 kg and measuring up to 50 cm, it has coarse grey-brown fur, a short hairless tail, and rounded furry ears. Herbivorous, it feeds on shrubs and grasses and has a lifespan of about 10 years. Known for its friendly appearance, it resembles a small wallaby.",
          src: "./images/quokka.png",
          alt: "Quokka",
          width: "30px"
        }
      ]
    },
    {
      category: "Reptiles",
      entries: [
        {
          id: "Frill-necked-lizard",
          name: "Frill-necked Lizard",
          description:
            "The frill-necked lizard, found in Northern Australia, is known for its unique defense mechanism, where it raises its frill, opens its mouth, and hisses when threatened. It feeds on small insects and spiders, grows up to 90 cm, weighs around 1 kg, and can live up to 20 years.",
          src: "./images/frill-lizard.png",
          alt: "Frill-necked Lizard",
          width: "30px"
        },
        {
          id: "Hawksbill-Turtle",
          name: "Hawksbill Turtle",
          description:
            "The Hawksbill turtle is a marine reptile found in tropical coasts of Australia. It has a distinctive beak-like mouth and a serrated shell, growing up to 80 cm long and weighing around 50 kg. It feeds on sponges, jellyfish, and sea plants, and can live up to 50 years.",
          src: "./images/hawksbill-turtle.png",
          alt: "Hawksbill Turtle",
          width: "30px"
        },
        {
          id: "Perentie",
          name: "Perentie",
          description:
            "The perentie is the largest monitor lizard in Australia, growing up to 2.5 meters long and weighing around 20 kg. A carnivore, it preys on animals like kangaroos, rabbits, and birds. Found in arid desert regions, it is a shy and rarely seen species. It has cultural significance in Aboriginal traditions and can live up to 20 years.",
          src: "./images/Perentie.png",
          alt: "Perentie",
          width: "50px"
        }
      ]
    },
    {
      category: "Birds",
      entries: [
        {
          id: "Cassowary",
          name: "Cassowary",
          description:
            "The cassowary is a large, flightless bird found in the tropical forests of northern Australia. It is known for its bright blue and black coloration and helmet-like casques. The cassowary can grow up to 1.8 meters tall and weigh up to 75 kg. It feeds on fruits and small animals, and is one of the heaviest bird species. It can live up to 40 years.",
          src: "./images/Cassowary.png",
          alt: "Cassowary",
          width: "30px"
        },
        {
          id: "Kookaburra",
          name: "Kookaburra",
          description:
            "The kookaburra, native to Australia, is the largest kingfisher species, growing up to 43 cm and weighing 300 g. It feeds on insects, small animals, and occasionally small snakes. Known for its distinctive laugh-like call, it has dark brown wings, a white head, and a reddish tail. It can live up to 20 years.",
          src: "./images/Kookaburra.png",
          alt: "Kookaburra",
          width: "30px"
        },
        {
          id: "Cockatoo",
          name: "Cockatoo",
          description:
            "The Yellow-tailed Black Cockatoo, found in southeastern Australia, has black plumage with yellow cheek patches and tail bands. It feeds on fruits, seeds, and plant material. Known for its loud, wailing call, it has a lifespan of up to 41 years and measures 65 cm in length, weighing around 900 grams.",
          src: "./images/Cockatoo.png",
          alt: "Cockatoo",
          width: "30px"
        }
      ]
    }
  ];

  const sidebar = document.querySelector(".sidebar");
  const descriptionContainer = document.querySelector(".animal-description");
  const container = document.querySelector(".container");

  animals.forEach((group) => {
    // create category heading
    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = group.category;
    sidebar.appendChild(categoryHeading);

    // create animal entries
    group.entries.forEach((animal) => {
      const animalDiv = document.createElement("div");
      animalDiv.classList.add("animal");
      animalDiv.id = animal.id;

      const heading = document.createElement("h3");
      heading.textContent = animal.name;
      heading.classList.add("animal-name");

      // const description = document.createElement("p");
      // description.textContent = animal.description;

      animalDiv.appendChild(heading);
      // animalDiv.appendChild(description);
      sidebar.appendChild(animalDiv);

      // Add image to the heading
      const image = document.createElement("img");
      image.src = animal.src;
      image.alt = animal.alt;
      image.style.width = animal.width;
      image.style.height = "auto";

      heading.style.display = "flex";
      heading.style.alignItems = "center";
      heading.style.gap = "10px";

      heading.appendChild(image);

      heading.addEventListener("click", function () {
        // remove active class from all headings
        const activeHeading = document.querySelector(".animal-name.active");
        if (activeHeading && activeHeading !== heading) {
          activeHeading.classList.remove("active");
        }

        if (heading.classList.contains("active")) {
          heading.classList.remove("active");
          descriptionContainer.classList.remove("show");
          container.classList.remove("showing-animal-description");
        } else {
          heading.classList.add("active");
          descriptionContainer.classList.add("show");
          container.classList.add("showing-animal-description");
        }

        // display details
        const details = animal.details;

        // create temp variable to hold details
        let detailsHTML = "";
        if (details && Object.keys(details).length > 0) {
          // loop through details and display them
          Object.keys(details).forEach((key) => {
            detailsHTML += `<li>${key}: ${details[key]}</li>`;
          });
        }

        const pageLink = animal.pageLink ? animal.pageLink : "#";

        descriptionContainer.innerHTML = `
        <h3>${animal.name}</h3>
        <img class="animate-image" src="${animal.src}" alt="${
          animal.alt
        }" style="width:auto; height: 200px;">
        <ul class="animal-details">${detailsHTML}</ul>
        <p>${
          animal.description.length > 200
            ? animal.description.slice(0, 200) + "..."
            : animal.description
        }</p>
        <a href="${pageLink}" class="learn-more">Learn more</a>
      `;
      });
    });
  });

  // // hide description when mouse leaves sidebar
  // sidebar.addEventListener("mouseleave", function () {
  //   descriptionContainer.classList.remove("show");
  //   const activeHeading = document.querySelector(".animal-name.active");
  //   if (activeHeading) {
  //     activeHeading.classList.remove("active");
  //   }
  //   container.classList.remove("showing-animal-description");
  // });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");

  sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.add("expanded");
  });

  sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.remove("expanded");
  });
});
