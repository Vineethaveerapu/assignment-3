document.addEventListener("DOMContentLoaded", function () {
  // NOTES: will work on pages with <aside class="sidebar"></aside>

  // get from url
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";

  const isAboutPage =
    window.location.pathname === "/about.html" ||
    window.location.pathname === "/about/";

  if (isAboutPage) {
    return;
  }

  const animals = [
    {
      category: "Mammals",
      pageLink: "mammals.html",
      entries: [
        {
          id: "Echidna",
          name: "Echidna",
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
            "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
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
      pageLink: "reptiles.html",
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
      pageLink: "birds.html",
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

  animals.forEach(({ category, pageLink, entries }) => {
    // if page slug matchtes category we show more else we return for home page we show all
    const isCategoryPage = window.location.pathname.includes(
      category.toLowerCase()
    );
    // This section generates the sidebar content based on the animal categories and entries.
    // It checks if the current page matches the category and displays the relevant animals.
    if (isCategoryPage || isHomePage) {
      // create category heading
      const categoryHeading = document.createElement("h2");
      categoryHeading.textContent = category;
      sidebar.appendChild(categoryHeading);
      // create animal entries
      entries.forEach((animal) => {
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
          if (!isHomePage) {
            detailsHTML = "<ul class='animal-details'>";
            if (details && Object.keys(details).length > 0) {
              // loop through details and display them
              Object.keys(details).forEach((key) => {
                detailsHTML += `<li>${key}: ${details[key]}</li>`;
              });
            }
            detailsHTML += "</ul>";
          }

          descriptionContainer.innerHTML = `
        <h3>${animal.name}</h3>
        <img class="animate-image" src="${animal.src}" alt="${
            animal.alt
          }" style="width:auto; height: 200px;">
        ${detailsHTML}
        <p>${
          animal.description.length > 200
            ? animal.description.slice(0, 200) + "..."
            : animal.description
        }</p>
        <a href="${pageLink}" class="learn-more">Learn more</a>
      `;
        });
      });
    }
  });
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
