document.addEventListener("DOMContentLoaded", function () {
  // NOTES: will work on pages with <aside class="sidebar"></aside>

  // get from url
  const isHomePage =
    window.location.pathname.includes("index") ||
    window.location.pathname === "/";
  const isAboutPage = window.location.pathname.includes("about");

  if (isAboutPage) {
    return;
  }

  // use constructor
  // array for birds, three separate arrays one for each group
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
          details: {
            lifespan: "20 years",
            group: "Reptiles",
            food: "Small insects and spiders",
            length: "90cm",
            weight: "1kg",
            found: "Northern Australia"
          },
          description:
            " When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
          src: "./images/frill-lizard.png",
          alt: "Frill-necked Lizard",
          width: "30px"
        },
        {
          id: "Hawksbill-Turtle",
          name: "Hawksbill Turtle",
          details: {
            lifespan: "50 years",
            group: "Reptiles",
            food: "other animals (sponges & jellyfish), sea plants",
            length: "80cm (carapace)",
            weight: "50kg",
            found: "Tropical coasts of Queensland, Northern Territory and Western Australia"
          },
          description:
            "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
          src: "./images/hawksbill-turtle.png",
          alt: "Hawksbill Turtle",
          width: "30px"
        },
        {
          id: "Perentie",
          name: "Perentie",
          details: {
            lifespan: "20 years",
            group: "Reptiles",
            food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
            length: "2.5m",
            weight: "20kg",
            found: "Deserts"
          },
          description:
            "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
          src: "./images/perentie.png",
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
          details: {
            lifespan: "20 years",
            group: "Birds",
            food: "Plants matter like fruit, insects and small animals like mice and lizards",
            length: "1.7 meters",
            weight: "44 kg",
            found: "Queensland"
          },
          description:
            "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
          src: "./images/cassowary.png",
          alt: "Cassowary",
          width: "30px"
        },
        {
          id: "Kookaburra",
          name: "Kookaburra",
          details: {
            lifespan: "20 years",
            group: "Birds",
            food: "Insects and smalll animals including snakes, frogs and lizards",
            length: "43 cm",
            weight: "300g",
            found: "Australia wide"
          },
          description:
            "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
          src: "./images/kookaburra.png",
          alt: "Kookaburra",
          width: "30px"
        },
        {
          id: "Cockatoo",
          name: "Cockatoo",
          details: {
            lifespan: "41 years",
            group: "Birds",
            food: "Fruits, seeds, and other plant material",
            length: "65 cm",
            weight: "900 grams",
            found: "Southeastern Australia"
          },
          description:
            "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping. ",
          src: "./images/cockatoo.png",
          alt: "Cockatoo",
          width: "30px"
        }
      ]
    },
    {
      category: "Insects",
      pageLink: "insects.html",
      entries: [
        {
          id: "Butterfly",
          name: "Butterfly",
          description:
            "Butterflies are colorful insects with large, scaly wings. They are found worldwide and are known for their metamorphic life cycle, which includes stages as an egg, larva (caterpillar), pupa (chrysalis), and adult. Butterflies are important pollinators and are often active during the day.",
          src: "./images/butterfly.png",
          alt: "Butterfly",
          width: "30px",
          details: {
            lifespan: "1 month (as an adult butterfly)",
            group: "Insects",
            food: "Nectar from flowers, rotting fruit, and tree sap",
            length: "2cm to 30cm (wingspan)",
            weight: "0.5g to 3g",
            found:
              "Worldwide, in diverse habitats such as forests, grasslands, and gardens"
          }
        },
        {
          id: "Dragonfly",
          name: "Dragonfly",
          description:
            "Dragonflies are agile fliers with long, slender bodies and two pairs of transparent wings. Found near water bodies, they are skilled predators that hunt mosquitoes and other small insects. Dragonflies are known for their excellent vision and flying skills.",
          src: "./images/dragonfly.png",
          alt: "Dragonfly",
          width: "30px",
          details: {
            lifespan: "6 months to 7 years (including larval stage)",
            group: "Insects",
            food: "Mosquitoes, flies, and other small insects",
            length: "3cm to 15cm",
            weight: "1g to 5g",
            found: "Near freshwater habitats like lakes, ponds, and rivers"
          }
        },
        {
          id: "Firefly",
          name: "Firefly",
          description:
            "Fireflies, also known as lightning bugs, are nocturnal beetles known for their bioluminescence. They emit light from their abdomens to communicate and attract mates. Found in warm and tropical regions, fireflies are a fascinating part of nature's light show.",
          src: "./images/firefly.png",
          alt: "Firefly",
          width: "30px",
          details: {
            lifespan: "2 months (as an adult firefly)",
            group: "Insects",
            food: "Nectar, pollen, and sometimes other insects (larvae are predatory)",
            length: "1cm to 2.5cm",
            weight: "0.1g to 0.5g",
            found:
              "Tropical and temperate regions, in forests, meadows, and wetlands"
          }
        }
      ]
    }
  ];

  const sidebar = document.querySelector(".sidebar");
  const descriptionContainer = document.querySelector(".animal-description");
  const container = document.querySelector(".container");

  animals.forEach(({ category, pageLink, entries }) => {
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
          const currentScroll = window.scrollY;

          const animalDescriptionElement =
            document.getElementById("animal-description");
          if (animalDescriptionElement) {
            animalDescriptionElement.style.scrollMarginTop =
              "var(--header-height)";

            // Use requestAnimationFrame for smoother transitions
            requestAnimationFrame(() => {
              if (window.innerWidth <= 768) {
                closeSidebar();
              }

              // Scroll to description after sidebar is closed
              setTimeout(() => {
                animalDescriptionElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest"
                });
              }, 100);
            });
          }

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
            detailsHTML = "<ul class='animal-details' style='display: none;'>";
            if (details && Object.keys(details).length > 0) {
              // loop through details and display them
              Object.keys(details).forEach((key) => {
                detailsHTML += `<li class='${key}' >${key}: ${details[key]}</li>`;
              });
            }
            detailsHTML += "</ul>";
          }

          descriptionContainer.innerHTML = `
      <h3>${animal.name}</h3>
      <img class="animate-image" src="${animal.src}" alt="${
          animal.alt
        }" style="width:auto; height: 200px; max-width: 80%;">
      <p class="animal-description-short">${
        animal.description.length > 200
          ? animal.description.slice(0, 200) + "..."
          : animal.description
      }</p>
      <p class="animal-description-full" style="display: none;">${
        animal.description
      }</p>
        ${detailsHTML}
      <a href="${pageLink}" class="learn-more">Visit ${category} page</a>
      `;

          // Close sidebar on mobile when item is clicked
          if (window.innerWidth <= 768) {
            closeSidebar();
          }
        });
      });
    }
  });

  const toggleBtn = document.querySelector(".toggle-btn");
  if (!toggleBtn) {
    return;
  }
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    // Toggle icon between bars and times (x)
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    // Toggle active class on button
    toggleBtn.classList.toggle("active");
    // Toggle body scroll
    document.body.classList.toggle("sidebar-open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");

  if (!sidebar) {
    return;
  }

  sidebar.addEventListener("mouseenter", function () {
    sidebar.classList.add("expanded");
  });

  sidebar.addEventListener("mouseleave", function () {
    sidebar.classList.remove("expanded");
  });
});

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");
  const icon = toggleBtn.querySelector("i");

  const currentScroll = window.scrollY;

  requestAnimationFrame(() => {
    sidebar.classList.remove("show");
    toggleBtn.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    document.body.classList.remove("sidebar-open");

    window.scrollTo({
      top: currentScroll,
      behavior: "instant"
    });
  });
}

// Add escape key handler to close sidebar
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && window.innerWidth <= 768) {
    closeSidebar();
  }
});

// Add click outside sidebar to close
document.addEventListener("click", function (e) {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (
    window.innerWidth <= 768 &&
    sidebar.classList.contains("show") &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    closeSidebar();
  }
});
