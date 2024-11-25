document.addEventListener("DOMContentLoaded", function () {
    const animals = [
        {
            category: "Mammals",
            entries: [
                {
                    id: "Echidna",
                    name: "Echidna",
                    description: "The echidna is an egg-laying mammal found throughout Australia. It has spiny quills, a fleshy nose, and feeds on insects like ants and termites. It grows up to 76 cm long and weighs about 10 kg, with a lifespan of up to 50 years.",
                    src: "./images/echidna.png",
                    alt: "Echidna",
                    width: "30px"
                },
                {
                    id: "Tasmanian-Devil",
                    name: "Tasmanian Devil",
                    description: "The Tasmanian Devil is a carnivorous marsupial found in Tasmania, with a small population reintroduced to mainland Australia. It has a stocky build, black fur, and is known for its loud screech and strong bite. Weighing around 10 kg and measuring up to 70 cm, it hunts prey like wallabies and scavenges carrion. It has a lifespan of about 5 years.",
                    src: "./images/tasdevil.png",
                    alt: "Tasmanian Devil",
                    width: "30px"
                },
                {
                    id: "Quokka",
                    name: "Quokka",
                    description: "The quokka is a small marsupial native to Rottnest Island and parts of mainland Western Australia. Weighing around 3 kg and measuring up to 50 cm, it has coarse grey-brown fur, a short hairless tail, and rounded furry ears. Herbivorous, it feeds on shrubs and grasses and has a lifespan of about 10 years. Known for its friendly appearance, it resembles a small wallaby.",
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
                    description: "The frill-necked lizard, found in Northern Australia, is known for its unique defense mechanism, where it raises its frill, opens its mouth, and hisses when threatened. It feeds on small insects and spiders, grows up to 90 cm, weighs around 1 kg, and can live up to 20 years.",
                    src: "./images/frill-lizard.png",
                    alt: "Frill-necked Lizard",
                    width: "30px"
                },
                {
                    id: "Hawksbill-Turtle",
                    name: "Hawksbill Turtle",
                    description: "The Hawksbill turtle is a marine reptile found in tropical coasts of Australia. It has a distinctive beak-like mouth and a serrated shell, growing up to 80 cm long and weighing around 50 kg. It feeds on sponges, jellyfish, and sea plants, and can live up to 50 years.",
                    src: "./images/hawksbill-turtle.png",
                    alt: "Hawksbill Turtle",
                    width: "30px"
                },
                {
                    id: "Perentie",
                    name: "Perentie",
                    description: "The perentie is the largest monitor lizard in Australia, growing up to 2.5 meters long and weighing around 20 kg. A carnivore, it preys on animals like kangaroos, rabbits, and birds. Found in arid desert regions, it is a shy and rarely seen species. It has cultural significance in Aboriginal traditions and can live up to 20 years.",
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
                    description: "The cassowary is a large, flightless bird found in the tropical forests of northern Australia. It is known for its bright blue and black coloration and helmet-like casques. The cassowary can grow up to 1.8 meters tall and weigh up to 75 kg. It feeds on fruits and small animals, and is one of the heaviest bird species. It can live up to 40 years.",
                    src: "./images/Cassowary.png",
                    alt: "Cassowary",
                    width: "30px"
                },
                {
                    id: "Kookaburra",
                    name: "Kookaburra",
                    description: "The kookaburra, native to Australia, is the largest kingfisher species, growing up to 43 cm and weighing 300 g. It feeds on insects, small animals, and occasionally small snakes. Known for its distinctive laugh-like call, it has dark brown wings, a white head, and a reddish tail. It can live up to 20 years.",
                    src: "./images/Kookaburra.png",
                    alt: "Kookaburra",
                    width: "30px"
                },
                {
                    id: "Cockatoo",
                    name: "Cockatoo",
                    description: "The Yellow-tailed Black Cockatoo, found in southeastern Australia, has black plumage with yellow cheek patches and tail bands. It feeds on fruits, seeds, and plant material. Known for its loud, wailing call, it has a lifespan of up to 41 years and measures 65 cm in length, weighing around 900 grams.",
                    src: "./images/Cockatoo.png",
                    alt: "Cockatoo",
                    width: "30px"
                }
            ]
        }
    ];

    const sidebar = document.querySelector('.sidebar');
    const descriptionContainer = document.querySelector('.animal-description');

    animals.forEach(group => {
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = group.category;
        sidebar.appendChild(categoryHeading);

        group.entries.forEach(animal => {
            const animalDiv = document.createElement('div');
            animalDiv.classList.add('animal');
            animalDiv.id = animal.id;

            const heading = document.createElement('h3');
            heading.textContent = animal.name;

            const description = document.createElement('p');
            description.textContent = animal.description;

            animalDiv.appendChild(heading);
            animalDiv.appendChild(description);
            sidebar.appendChild(animalDiv);

            // Add image to the heading
            const image = document.createElement('img');
            image.src = animal.src;
            image.alt = animal.alt;
            image.style.width = animal.width;
            image.style.height = "auto";

            heading.style.display = "flex";
            heading.style.alignItems = "center";
            heading.style.gap = "10px";

            heading.appendChild(image);

            heading.addEventListener('click', function () {
                const activeHeading = document.querySelector('.animal h3.active');
                if (activeHeading) activeHeading.classList.remove('active');

                heading.classList.add('active');
                descriptionContainer.innerHTML = `
                    <h3 class="animal-name">${animal.name}</h3>
                    <p>${animal.description}</p>
                `;
                descriptionContainer.classList.add('show');
            });
        });
    });

    sidebar.addEventListener('mouseleave', function () {
        descriptionContainer.classList.remove('show');
        const activeHeading = document.querySelector('.animal h3.active');
        if (activeHeading) activeHeading.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar'); 

    sidebar.addEventListener('mouseenter', function() {
        sidebar.classList.add('expanded');
    });

    sidebar.addEventListener('mouseleave', function() {
        sidebar.classList.remove('expanded');
    });
});
