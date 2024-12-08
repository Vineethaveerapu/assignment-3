document.querySelectorAll(".play-sound").forEach((button) => {
  button.addEventListener("click", () => {
    const audioId = button.getAttribute("data-audio-id");
    const audio = document.getElementById(audioId);

    // Pause other audios and reset them
    document.querySelectorAll("audio").forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });

    // Toggle play/pause for the clicked audio
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

document.querySelectorAll(".stop-sound").forEach((button) => {
  button.addEventListener("click", () => {
    const audioId = button.getAttribute("data-audio-id");
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
  });
});

function initSlides(slider) {
  let slideIndex = 0; 
  const slides = slider.querySelectorAll(".mySlides"); 

  
  function showSlides(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  slider.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
    showSlides(slideIndex);
  });

  
  slider.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;  
    showSlides(slideIndex);
  });

  showSlides(slideIndex);
}


document.querySelectorAll(".slider-container").forEach((slider) => {
  initSlides(slider);
});


const updateAnimalDescription = () => {
  // get all elements from sidebar
  const animalNames = document.querySelectorAll(".animal-name");

  // loop
  animalNames.forEach((animalName) => {
    animalName.addEventListener("click", () => {


      // learn-more
      const learnMore = document.querySelector(".learn-more");
      learnMore.textContent = "Read more";
      learnMore.href = "#";

      learnMore.addEventListener("click", (e) => {

        e.preventDefault();
        // animal-description-full
        const animalDescriptionFull = document.querySelector(
          ".animal-description-full"
        );
        animalDescriptionFull.style.display = "block";
        // animal-details
        const animalDetails = document.querySelector(".animal-details");
        animalDetails.style.display = "block";

        // animal-description-short
        const animalDescriptionShort = document.querySelector(
          ".animal-description-short"
        );
        animalDescriptionShort.style.display = "none";

        learnMore.style.display = "none";
      });
    });
  });
};

function openBirdTab(evt, tabId) {
  // Get all tabcontent elements and hide them
  const tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach((tabcontent) => (tabcontent.style.display = "none"));

  // Remove the "active" class from all tab buttons
  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((tablink) => tablink.classList.remove("active"));

  // Display the selected tab and add the "active" class to the clicked button
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Open the first tab by default
document.querySelector(".tablinks").click();

document.addEventListener("DOMContentLoaded", function () {
  updateAnimalDescription();
});