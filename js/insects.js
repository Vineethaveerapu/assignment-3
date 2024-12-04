// create list items
function createListItems(content) {
  const listItems = document.createElement("li");
  listItems.textContent = content;
  return listItems;
}

// Create list items with text content and return the list item element
function CreateList() {
  this.list = document.createElement("ul");

  this.addItem = (content) => {
    const newItem = createListItems(content);
    this.list.appendChild(newItem);
  };

  this.getList = () => {
    return this.list;
  };
}

// Create a new list

const characteristics = [
  "Three-part body structure: Head, thorax, abdomen.",
  "Six legs.",
  "Often one or two pairs of wings.",
  "Found in nearly every habitat.",
];

const characteristicsList = new CreateList();
characteristics.forEach((characteristic) => {
  characteristicsList.addItem(characteristic);
});

const whyInsectsImportant = [
  "Pollination: Many plants, including crops like fruits and vegetables, rely on insects such as bees and butterflies for pollination.",
  "Decomposition: Insects like beetles and flies help recycle nutrients by breaking down organic matter.",
  "Food Chain: Insects are a vital food source for birds, mammals, and amphibians.",
  "Medicinal and Scientific Use: Some insects produce substances like honey and silk or are studied for advancements in science.",
];
const whyInsectsImportantList = new CreateList();
whyInsectsImportant.forEach((reason) => {
  whyInsectsImportantList.addItem(reason);
});

const displayPageContent = () => {
  const pageContent = document.querySelector(".sidebar-next-content");
  let content = "<h1>Welcome to Nature's Zoo Insects</h1>";

  content += "<h2>Insects</h2>";
  content +=
    "<p>Insects are the most diverse group of animals on Earth, with over a million known species and many more yet to be discovered.</p>";
  content += "<h3>Characteristics</h3>";
  content += characteristicsList.getList().outerHTML;

  content += "<h3>Why Are Insects Important?</h3>";
  content += whyInsectsImportantList.getList().outerHTML;

  pageContent.innerHTML = content;
};

const addBackgroundImage = () => {
  const main = document.querySelector(".container");

  const insects = ["butterfly", "dragonfly", "firefly"];

  const multipleInsects = [...insects];

  multipleInsects.forEach((insect, i) => {
    const img = document.createElement("img");

    // Set the image source
    img.src = `images/${insect}.png`;

    // Style the image
    img.style.position = "fixed";
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.pointerEvents = "none";
    img.style.zIndex = "-1";

    // Place image at random position
    img.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    img.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    // Add animation
    const animationName = `float-${insect}-${i}`;
    img.style.animation = `${animationName} 15s linear infinite`;

    const keyframes = `
        @keyframes ${animationName} {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(${Math.random() * 200 - 100}px, ${
      Math.random() * 200 - 100
    }px) rotate(${Math.random() * 360}deg); }
          50% { transform: translate(${Math.random() * 200 - 100}px, ${
      Math.random() * 200 - 100
    }px) rotate(${Math.random() * 360}deg); }
          75% { transform: translate(${Math.random() * 200 - 100}px, ${
      Math.random() * 200 - 100
    }px) rotate(${Math.random() * 360}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `;

    // Add the animation to the page
    const styleSheet = document.createElement("style");
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    // Add the insect image to the page
    main.appendChild(img);
  });
};

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
  displayPageContent();
  updateAnimalDescription();
  addBackgroundImage();
});
