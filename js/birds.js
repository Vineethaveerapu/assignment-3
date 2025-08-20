document.addEventListener("DOMContentLoaded", function () {
  const birds = [
    {
      id: "cassowary",
      name: "Cassowary",
      slides: [
        "images/cassowary-01.jpg",
        "images/cassowary-02_0.jpg",
        "images/cassowary-southern.jpg"
      ],
      audio: "sounds/Cassowary.mp3",
      tabs: {
        habitat: "Southern cassowaries inhabit rainforests of northeastern Australia and New Guinea...",
        behaviour: "Cassowaries produce low-frequency sounds to communicate across distances...",
        feeding: "Cassowaries mostly feast on fallen fruit, snails, fungi, and occasionally small animals."
      }
    },
    {
      id: "kookaburra",
      name: "Kookaburra",
      slides: [
        "images/kookaburra.jpg.webp",
        "images/1000_F_870145313_Lk6Bo2ubOCEWSgWKHVONfnzQN5wrwVO3.jpg",
        "images/1000_F_190503043_607R08WZ00KdV6GPziw2SXVvVBJLoHEk.jpg"
      ],
      audio: "sounds/Kookaburra-sound.mp3",
      tabs: {
        habitat: "The Laughing Kookaburra inhabits most areas with suitable trees.",
        behaviour: "Its laugh is actually a territorial call to warn off intruders.",
        feeding: "They feed mostly on insects, worms, and sometimes small reptiles or birds."
      }
    },
    {
      id: "cockatoo",
      name: "Cockatoo",
      slides: [
        "images/yellow-tailed-black-cockatoo-Andrew-Silcocks-listing-1.jpg.webp",
        "images/yellow-tailed-black-cockatoo-Andrew-Silcocks-listing-2.jpg.webp",
        "images/yellow-tailed-black-cockatoo-fran-solly-listing.jpg.webp"
      ],
      audio: "sounds/Yellow-tailed Black Cockatoo - Zanda funerea.mp3",
      tabs: {
        habitat: "They inhabit eucalypt woodlands and pine plantations.",
        behaviour: "They are social and intelligent but under threat due to habitat loss.",
        feeding: "They eat seeds, pinecones, and sometimes insects."
      }
    }
  ];

  const container = document.querySelector(".main-content");

  birds.forEach((bird) => {
    const section = document.createElement("div");
    section.className = "bird-profile-container";
    section.id = bird.id;

    section.innerHTML = `
      <section class="bird-profile">
        <h2>${bird.name}</h2>
        <div class="slider-container">
          ${bird.slides
            .map((slide) => `<div class="mySlides"><img src="${slide}" alt="${bird.name}" /></div>`)
            .join("")}
          <button class="prev"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
        </div>

        <div class="tab">
          <button onclick="openBirdTab(event, '${bird.id}-habitat')">Habitat</button>
          <button onclick="openBirdTab(event, '${bird.id}-behaviour')">Behaviour</button>
          <button onclick="openBirdTab(event, '${bird.id}-feeding')">Feeding</button>
        </div>

        <div id="${bird.id}-habitat" class="tabcontent"><h3>Habitat</h3><p>${bird.tabs.habitat}</p></div>
        <div id="${bird.id}-behaviour" class="tabcontent"><h3>Behaviour</h3><p>${bird.tabs.behaviour}</p></div>
        <div id="${bird.id}-feeding" class="tabcontent"><h3>Feeding</h3><p>${bird.tabs.feeding}</p></div>

        <div class="audio-controls">
          <button class="play-sound" data-audio-id="${bird.id}-audio">Play Sound</button>
          <button class="stop-sound" data-audio-id="${bird.id}-audio">Stop Sound</button>
          <audio id="${bird.id}-audio" src="${bird.audio}"></audio>
        </div>
      </section>
    `;

    container.appendChild(section);
  });

  initSlidesForAll();
  activateSoundControls();
});


function initSlidesForAll() {
  document.querySelectorAll(".slider-container").forEach((slider) => {
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
  });
}

// Audio play/pause
function activateSoundControls() {
  document.querySelectorAll(".play-sound").forEach((button) => {
    button.addEventListener("click", () => {
      const audioId = button.getAttribute("data-audio-id");
      const audio = document.getElementById(audioId);

      document.querySelectorAll("audio").forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        }
      });

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
}


function openBirdTab(evt, tabId) {
  
  const tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach((tabcontent) => (tabcontent.style.display = "none"));


  const tablinks = document.querySelectorAll(".tab button");
  tablinks.forEach((tablink) => tablink.classList.remove("active"));

 
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}
