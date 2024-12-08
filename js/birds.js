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
  let slideIndex = 1;
  const slides = slider.querySelectorAll(".mySlides");
  // const dots = slider.querySelectorAll(".demo");

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((slide) => (slide.style.display = "none"));
    // dots.forEach((dot) => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].classList.add("active");
  }

  slider.querySelector(".prev").addEventListener("click", () => {
    showSlides(--slideIndex);
  });

  slider.querySelector(".next").addEventListener("click", () => {
    showSlides(++slideIndex);
  });

  // dots.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     slideIndex = index + 1;
  //     showSlides(slideIndex);
  //   });
  // });

  showSlides(slideIndex);
}

document.querySelectorAll(".slider-container").forEach((slider) => {
  initSlides(slider);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

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

document.addEventListener("DOMContentLoaded", function () {
  updateAnimalDescription();
});