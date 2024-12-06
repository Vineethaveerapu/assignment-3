document.getElementById("play-sound").addEventListener("click", () => {
  const audio = document.getElementById("bird-audio");

  // Stop any other audio playing
  document.querySelectorAll("audio").forEach((otherAudio) => {
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0; // Reset to the beginning
    }
  });

  // Play the selected audio
  if (audio.paused) {
    audio.play();
  }
});

document.getElementById("stop-sound").addEventListener("click", () => {
  const audio = document.getElementById("bird-audio");
  audio.pause();
  audio.currentTime = 0; // Reset to the beginning
});

let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  
  // Ensure the index is within bounds
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  // Move the slides container to the correct position
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

// Initially show the first slide
showSlide(currentSlideIndex);
