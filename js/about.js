// Add hover sound for the card
const cards = document.querySelectorAll('.card');
const audio = new Audio('click-sound.mp3');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    audio.currentTime = 0; // Restart sound
    audio.play();
  });
});
