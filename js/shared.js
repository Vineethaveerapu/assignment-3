document.addEventListener("DOMContentLoaded", function () {
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
            <h3 class="animal-name">${animalName}</h3>  <!-- Show the animal name as heading -->
            <p>${description}</p>   <!-- Show the description -->
        `;

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
