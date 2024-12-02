document.addEventListener("DOMContentLoaded", function () {
  // get from url
  const isInsectsPage =
    window.location.pathname.includes("insects") ||
    window.location.pathname === "/insects";

  if (!isInsectsPage) {
    return;
  }

  // need to wait until sidebar is loaded animal-name all
  const animalNames = document.querySelectorAll(".animal-name");
  animalNames.forEach((animalName) => {
    animalName.addEventListener("click", () => {
      console.log("animal name clicked");

      //   learn-more
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
});
