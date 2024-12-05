/*******Creating animals name in sidebar********* */

let sideBar = document.querySelector(".sidebar");
let sideBarHeading = document.createElement("h2");
sideBarHeading.classList.add("sub-heading");
sideBarHeading.textContent = "MAMMMALS";
sideBar.appendChild(sideBarHeading);

function MammalsName(className,name,imagesrc) {
    this.className = className,
    this.name = name,
    this.imagesrc = imagesrc,
    this.description = () => {
        let animalDiv = document.createElement("div");
        animalDiv.classList.add(className,"animal");
        sideBar.append(animalDiv);
        let animalName = document.createElement("h3");
        animalName.classList.add("animal-name"); 
        animalName.textContent=name;
        animalDiv.appendChild(animalName);
        let animalNameImg = document.createElement("img");
        animalNameImg.src = imagesrc;
        animalNameImg.alt = name + " icon";
        animalName.appendChild(animalNameImg);
       
    }
}


let animal1 = new MammalsName("echidna","Echidna","./images/echidna.png");
let animal2 = new MammalsName("tasmaniandevil","TasmanianDevil", "./images/tasdevil.png");
let animal3 = new MammalsName("quokka","Quokka","./images/quokka.png");

let animals = [animal1 , animal2 , animal3];
animals.forEach(animals => animals.description());

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) {
      return;
    }

    sidebar.addEventListener("mouseenter", function () {
      sidebar.classList.add("expanded");
    });

    sidebar.addEventListener("mouseleave", function () {
      sidebar.classList.remove("expanded");
    });
  });

/****************************Objects for animal Content******************************/

let mammalInfo = document.querySelector(".mammals-info");

function AnimalDescription (className,content,image,lifespan , group , food, length, weight, found) {
    this.className = className,
    this.content = content,
    this.image = image,
    this.lifespan = lifespan,
    this.group = group,
    this.food = food,
    this.length = length,
    this.weight = weight,
    this.found = found,
    this.description = () => {
        let animalDescription = document.createElement("div");
        animalDescription.classList.add(className,"content");
        mammalInfo.appendChild(animalDescription);

        let animalImage = document.createElement("div");
        let animalImageimg = document.createElement("img");
        animalImageimg.src = image;
        animalImageimg.alt = className + "image";
        animalImage.classList.add("animal-image");
        animalDescription.appendChild(animalImage);
        animalImage.appendChild(animalImageimg);

        let shortContent;
        let fullcontent;
        if(content.length > 200  ) {
           shortContent = content.slice(0,200);
            fullcontent = content.slice(200);
        }else {
             content = content;
        }      
        
        let description = document.createElement("h4");
        description.textContent = "ABOUT " + className.toUpperCase();;
        let animalPara = document.createElement("p");
        animalPara.textContent = shortContent;
        animalDescription.appendChild(description);
        animalPara.classList.add(className,"fullcontent")
        animalDescription.appendChild(animalPara);
        
        let remainingPart = document.createElement("span");
        remainingPart.textContent = fullcontent;
        remainingPart.classList.add("hidden","fulldetails",className);
        animalPara.appendChild(remainingPart);

        let details = document.createElement("ul");  
        let image1 = document.createElement("div");
        let image1img = document.createElement("img");
        image1img.src = "./images/lifespan-icon.svg";
        image1img.alt = "Life logo";
        image1.classList.add("details-icon");
        image1.appendChild(image1img);
        let detail1 = document.createElement("li");
        detail1.classList.add("details-text");
        
        let image2 = document.createElement("div");
        let image2img = document.createElement("img");
        image2img.src = "./images/group-icon.svg";
        image2img.alt = "Group logo";
        image2.classList.add("details-icon");
        image2.appendChild(image2img);
        let detail2 = document.createElement("li");
        detail2.classList.add("details-text");
        
        let image3 = document.createElement("div");
        let image3img = document.createElement("img")
        image3img.src = "./images/food-icon.svg";
        image3img.alt = "Food logo";
        image3.classList.add("details-icon");
        image3.appendChild(image3img);
        let detail3 = document.createElement("li");
        detail3.classList.add("details-text");
        
        let image4 = document.createElement("div");
        let image4img = document.createElement("img");
        image4img.src = "./images/length-icon.svg";
        image4img.alt = "Lengh logo";
        image4.classList.add("details-icon");
        image4.appendChild(image4img);
        let detail4 = document.createElement("li");
        detail4.classList.add("details-text");

        let image5 = document.createElement("div");
        let image5img = document.createElement("img");
        image5img.src = "./images/weight-icon.svg";
        image5img.alt = "Weight logo";
        image5.classList.add("details-icon");
        image5.appendChild(image5img);
        let detail5 = document.createElement("li");
        detail5.classList.add("details-text");

        let image6 = document.createElement("div");
        let image6img = document.createElement("img");
        image6img.src = "./images/found-icon.svg";
        image6img.alt = "found icon"
        image6.classList.add("details-icon");
        image6.appendChild(image6img);
        let detail6 = document.createElement("li");
        detail6.classList.add("details-text");

        detail1.textContent = "Lifespan : " + lifespan + " " ,
        detail2.textContent = "Group : " + group,
        detail3.textContent = "Food : " + food,
        detail4.textContent = "Length : " + length,
        detail5.textContent = "weight : " + weight,
        detail6.textContent = "Found : " + found,

        animalDescription.appendChild(details);
        details.classList.add("hidden","details",className);
        details.appendChild(detail1);
        detail1.appendChild(image1);
        details.appendChild(detail2);
        detail2.appendChild(image2);
        details.appendChild(detail3);
        detail3.appendChild(image3);
        details.appendChild(detail4);
        detail4.appendChild(image4);
        details.appendChild(detail5);
        detail5.appendChild(image5);
        details.appendChild(detail6);
        detail6.appendChild(image6);
           
        let readMore = document.createElement("a");
        readMore.classList.add("button","hidden",className);
        readMore.textContent = "Read More";
        animalDescription.appendChild(readMore);

        };
    }

let enchidaContent = new AnimalDescription("echidna",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "./images/echidnamammal.png",
    "50 years",
    "Mammals",
    "insects such as ants and termites, beetle larvae and worms",
    "76cm",
    "10kg",
    "Australia"
);

let tasmanianContent = new AnimalDescription(
    "tasmaniandevil",  
    "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    "./images/tasmanianmammal.jpg",
    "5 Years",
    "Mammals",
    "A predator, then eat meat from other animals such as wallabies and wombats.",
    "70 cm",
    "10 kg",
    "Tasmania"
);

let quokkaContent = new AnimalDescription(
    "quokka",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    "./images/quakkomammal.png",
    "10 Years",
    "Mammals",
    "Plant eaters, they munch on shrubs and grasses.",
    "50 cm",
    "3 kg",
    "Rottnest Island and a few places on mainland Western Australia."
    
);

let content = [enchidaContent , tasmanianContent , quokkaContent];
content.forEach(content => content.description());

/****************************Seeting Active Tab***********************************/
let mammalContent = document.querySelector(".mammals-content");
let activeArray = Array.from(document.querySelectorAll(".animal-name"));
console.log(activeArray);


const setActive = (mammalname) => { 
    if(mammalname.classList.contains("active")){
        mammalname.classList.remove("active");
    }else{
        activeArray.forEach(mammal => mammal.classList.remove("active"));
        mammalname.classList.add("active");
    }  
};


activeArray.forEach(mammal => mammal.addEventListener("click", () => setActive(mammal)));
let contentArray = Array.from(document.querySelectorAll(".content"));




const displayContent = (mammal) => {
    let alreadyshow = false;
    contentArray.forEach(content => { 
        
        if(content.classList.contains(mammal) ){
            if(content.classList.contains("showcontent")){
                let button = content.querySelector(".button");
                let remainingDetails = content.querySelector(".fulldetails")
                let remainingList = content.querySelector(".details")
                remainingDetails.classList.add("hidden");
                remainingList.classList.add("hidden");
                button.textContent = "Read More"
                alreadyshow = true;
            }
            }
            content.classList.remove("showcontent");
            });

            if(alreadyshow){
            mammalContent.classList.remove("removemain");
            }else {contentArray.forEach(content => {
                if (content.classList.contains(mammal)) {
                    content.classList.add("showcontent");
                    let button = content.querySelector(".button");
                    let remainingDetails = content.querySelector(".fulldetails");
                    let remainingList = content.querySelector(".details");
                    remainingDetails.classList.add("hidden");
                    remainingList.classList.add("hidden");
                    button.classList.remove("hidden");
                    button.textContent = "Read More";
                }
            });
            mammalContent.classList.add("removemain");
            
}
};
    
activeArray.forEach(mammal => mammal.addEventListener("click", () => displayContent(mammal.textContent.toLowerCase())));

contentArray.forEach(content => {
    let readMore = content.querySelector(".button");
    if (readMore) {
        readMore.addEventListener("click", () => {
            let remainingDetails = content.querySelector(".fulldetails");
            let remainingList = content.querySelector(".details");

            if (remainingDetails.classList.contains("hidden")) {
                remainingDetails.classList.remove("hidden");
                remainingList.classList.remove("hidden");
                readMore.textContent = "Show Less";
            } else {
                remainingDetails.classList.add("hidden");
                remainingList.classList.add("hidden");
                readMore.textContent = "Read More";
            }
        });
    }
});

/***********Creating Introduction content for mammals************** */


let mammalTitle = document.createElement("h1");
mammalTitle.textContent = "Nature's Zoo Mammals";
mammalContent.appendChild(mammalTitle);
let mammalIntro = document.createElement("p");
mammalIntro.textContent = 
"Mammals are a unique group of animals defined by their warm-blooded nature,fur or hair, and the ability to nurse their young with milk. They are incredibly diverse,ranging from tiny rodents to massive whales, and are found in nearly every habitat on Earth.Known for their intelligence and adaptability, mammals play vital roles in ecosystems and captivate us with their behavior and beauty."
mammalContent.appendChild(mammalIntro);

/********************creating object to define charactersitics***************/

let mammalsFeautre = document.createElement("div");
mammalsFeautre.classList.add("mammals-features");
mammalContent.appendChild(mammalsFeautre);
let keyTitle = document.createElement("h4");
keyTitle.textContent = "Key Features of Mammals";
mammalsFeautre.appendChild(keyTitle);

function Keyfeatures(heading, content) {
    this.heading = heading,
    this.content = content,
    this.description = () => {
        let features = document.createElement("h5");
        features.textContent = heading;
        mammalsFeautre.appendChild(features);
        let featureContent = document.createElement("p");
        featureContent.textContent = content;
        mammalsFeautre.appendChild(featureContent);
    }
}

let bloodType = new Keyfeatures("Warm-Blooded","Mammals maintain a constant body temperature through fur, sweating, panting, or behavioral adaptations like basking or seeking shade.");
let teeth = new Keyfeatures(" Specialized Teeth","Mammals have different types of teeth (incisors, canines, premolars, molars) adapted for their diet, whether it’s cutting, tearing, or grinding food.");
let brain = new Keyfeatures("Advanced Brain Development","Mammals have large, complex brains relative to body size, enabling learning, problem-solving, and social behaviors. Some, like dolphins and primates, display exceptional intelligence.");
let care = new Keyfeatures("Parental care","Mammals are known for extended parental care, ensuring their young have the best chance of survival. This includes feeding, teaching, and protecting their offspring.Raise young with milk and protective nurturing.");
let adaptability = new Keyfeatures("Adaptation to Environments","From flying bats to aquatic whales, mammals adapt to nearly every environment on Earth.");
let communication = new Keyfeatures("Communication", "Mammals use a variety of ways to communicate, including sounds (roars, songs, chirps), body language, and scents. Some species, like whales, create complex vocalizations.")

let charactersitics = [bloodType,teeth, brain, care , adaptability, communication];
charactersitics.forEach(feature => feature.description());


/******************************Facts******************************/

const facts = ["The Tasmanian devil is the largest carnivorous marsupial in the world, growing up to the size of a small dog.",
                "Echidnas lay a single leathery egg, which the mother carries in a pouch until it hatches about 10 days later.",
                "Baby echidnas are called puggles! After hatching, the puggle stays in the mother’s pouch, feeding on milk secreted through specialized skin glands.",
                "Echidnas are covered in spines made of keratin, the same material as human fingernails. These spines help protect them from predators.",
                "Tasmanian devils have one of the most powerful bites relative to body size of any mammal, allowing them to crush bones with ease.",
                "Tasmanian devils are known for their loud, eerie screeches, which they use to communicate and defend territory, giving them their “devilish” name.",
                "Female Tasmanian devils give birth to up to 50 tiny, jellybean-sized babies, but only 4 survive, as that’s the number of teats in her pouch.",
                "Quokkas can climb small trees and shrubs to forage for food, an unusual trait for marsupials of their size.",
                "Quokkas are herbivores and primarily eat grasses, leaves, and bark. They can survive for long periods without water by getting moisture from their food.",
                "Quokkas are often called “the world’s happiest animals” because of their cheerful, smiling appearance."
];

let randomFacts;

 let factSection = document.querySelector(".facts");
 let factsHeading = document.createElement("h5");
 factsHeading.textContent = "DID YOU KNOW ?";
 factSection.appendChild(factsHeading);
 let factsPara = document.createElement("p");
 factSection.appendChild(factsPara);

 const getRandomNumber = () => {
    let  randomnumber = Math.floor(Math.random()*(facts.length));
    randomFacts = facts[randomnumber];
    factsPara.textContent = randomFacts;
  }
  getRandomNumber();
  setInterval(getRandomNumber, 5000);

  let factsImage = document.querySelector(".facts-image");
  let factsImageimg = document.createElement("img");
  factsImageimg.src = "./images/pandablack.jpg";
  factsImageimg.alt = "Panda-image";
  factsImage.appendChild(factsImageimg);