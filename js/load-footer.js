document.addEventListener("DOMContentLoaded", () => {
  // Fetch footer.html and insert into the body
  fetch("../footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);

      // Initialize modal functionality after footer is loaded
      const newsletterLink = document.querySelector(".newsletter-link");
      const modalOverlay = document.getElementById("customPrompt");
      const emailInput = document.getElementById("emailInput");
      const submitButton = document.getElementById("submitEmail");
      const cancelButton = document.getElementById("cancelEmail");

      // Show the modal when the newsletter link is clicked
      newsletterLink.addEventListener("click", (event) => {
        event.preventDefault();
        modalOverlay.style.display = "flex";
      });

      // Handle subscription
      submitButton.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (email) {
          alert(`Thank you for subscribing, ${email}!`);
          emailInput.value = ""; // Clear input field
          modalOverlay.style.display = "none"; // Close modal
        } else {
          alert("Please enter a valid email address.");
        }
      });

      // Cancel subscription or close modal
      cancelButton.addEventListener("click", () => {
        modalOverlay.style.display = "none";
      });

      // Close modal when clicking outside the modal
      modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
          modalOverlay.style.display = "none";
        }
      });
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
});
