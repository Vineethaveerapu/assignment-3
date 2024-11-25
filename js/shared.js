document.addEventListener("DOMContentLoaded", function () {
    const animals = [
        {
            id: "Echidna",
            src: "./images/echidna.png",
            alt: "Echidna",
            width: "30px"
        },

        {
            id: "Tasmanian-Devil",
            src: "./images/tasdevil.png",
            alt: "Tasdevil",
            width: "30px"
        },

        {
            id: "Quokka",
            src: "./images/quokka.png",
            alt: "Quokka",
            width: "30px"
        },

        {
            id: "Frill-necked-lizard",
            src: "./images/frill-lizard.png",
            alt: "Frill-lizard",
            width: "30px"
        },

        {
            id: "Hawksbill-Turtle",
            src: "./images/hawksbill-turtle.png",
            alt: "Hawksbill-turtle",
            width: "30px"
        },

        {
            id: "Perentie",
            src: "./images/Perentie.png",
            alt: "Perentie",
            width: "50px"
        },

        {
            id: "Cassowary",
            src: "./images/Cassowary.png",
            alt: "Cassowary",
            width: "30px"
        },

        {
            id: "Kookaburra",
            src: "./images/Kookaburra.png",
            alt: "Kookaburra",
            width: "30px"
        },

        {
            id: "Cockatoo",
            src: "./images/Cockatoo.png",
            alt: "Cockatoo",
            width: "30px"
        }
    ];

    function appendAnimalImage(animal) {
        const heading = document.querySelector(`#${animal.id} h3`);
        if (!heading) return; 

        const image = document.createElement('img');
        image.src = animal.src;
        image.alt = animal.alt;
        image.style.width = animal.width;
        image.style.height = "auto";

        heading.style.display = "flex";
        heading.style.alignItems = "center";
        heading.style.gap = "10px";

        heading.appendChild(image);
    }

    animals.forEach(appendAnimalImage);

    const animalHeadings = document.querySelectorAll('.animal h3'); 
    const descriptionContainer = document.querySelector('.animal-description');
    const sidebar = document.querySelector('.sidebar'); 

    function displayDescription(event) {
        animalHeadings.forEach(function (heading) {
            heading.classList.remove('active'); 
        });

        const clickedHeading = event.target;
        clickedHeading.classList.add('active');
        
        const animalName = clickedHeading.textContent; 
        const description = clickedHeading.nextElementSibling.textContent; 

        descriptionContainer.innerHTML = `
            <h3 class="animal-name">${animalName}</h3>  
            <p>${description}</p>`;

        descriptionContainer.classList.add('show'); 
        const animalNameElement = descriptionContainer.querySelector('.animal-name');
        animalNameElement.style.fontSize = '25px';  
    }

    animalHeadings.forEach(function (heading) {
        heading.addEventListener('click', displayDescription);
    });

    sidebar.addEventListener('mouseleave', function () {
        descriptionContainer.classList.remove('show'); 
        animalHeadings.forEach(function (heading) {
            heading.classList.remove('active'); 
        });
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
