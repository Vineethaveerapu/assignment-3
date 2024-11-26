document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission for now

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset(); // Clear form
  });
});
