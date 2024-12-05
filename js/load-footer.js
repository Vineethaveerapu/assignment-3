document.addEventListener("DOMContentLoaded", () => {
  // Inline footer HTML content
  const footerHTML = `
<footer class="footer">
  <div class="footer-content">
    <div class="about">
      <h2>Nature Zoo</h2>
      <p>
        Nature Zoo is a 700-acre (280 ha) wildlife sanctuary tucked beneath
        Queensland's mystical Beerwah and Glass House Mountains. This magical
        haven, owned by Terri Irwin, continues the adventurous spirit of her
        late husband, Steve Irwin, whose legacy lives on through the family's
        show, <em>Mysteries of the Wild</em>. Founded in 1970 by Bob and Lyn
        Irwin as Beerwah Reptile and Fauna Park, Nature Zoo has grown into a
        vibrant realm where kangaroos roam freely, crocodiles reign, and every
        visit feels like stepping into a living fairy tale.
      </p>
      <a href="#" class="newsletter-link">Join our newsletter</a>
    </div>
    <ul class="footer-links">
      <li><a href="about.html">About the Zoo</a></li>
      <li><a href="#">Careers at the Zoo</a></li>
      <li><a href="#">Volunteers & Internships</a></li>
      <li><a href="#">Sponsorship</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <div class="social-icons">
      <a href="https://www.facebook.com/" target="_blank" class="social-icon">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://x.com/" target="_blank" class="social-icon">
        <i class="fab fa-x"></i>
      </a>
      <a href="https://www.instagram.com/" target="_blank" class="social-icon">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Nature Zoo</p>
    <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
  </div>

  <div class="modal-overlay" id="customPrompt">
    <div class="modal">
      <h2>Join Our Newsletter</h2>
      <p>Enter your email to stay updated with the latest news and events:</p>
      <input type="email" id="emailInput" placeholder="Your email" />
      <div class="modal-buttons">
        <button id="submitEmail">Subscribe</button>
        <button id="cancelEmail">Cancel</button>
      </div>
    </div>
  </div>
</footer>

  `;

  // Insert footer HTML into the body
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  
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
});