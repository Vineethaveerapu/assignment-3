//document.querySelector(".history").textContent = 
          //"Nature's Zoo was founded in the year 1995 by a passionate wildlife enthusiast who envisioned a space where both animals and humans could interact in a natural, sustainable environment. Located in India, the zoo was initially asmall sanctuary focusing on local wildlife, aiming to educate the community about native species and conservation efforts"


function MainContent(className ,heading , explanation) { //constructor function if you have more than one object than this to be used
this.className = className,
this.heading = heading,
this.explanation = explanation,
this.description = () => {
 let newDiv  = document.createElement("div");
newDiv.classList.add(this.className,"main-content-details");
let main = document.querySelector(".main-content");
   main.appendChild(newDiv);
   let subHeading =  document.createElement("h5");
   subHeading.textContent = this.heading;
   newDiv.appendChild(subHeading);
   let details = document.createElement ("p");
   details.textContent = this.explanation;
   newDiv.appendChild(details);
};
}

let history = new MainContent("history","About Us" , "Nature's Zoo was founded in the year 1995 by a passionate wildlife enthusiast who envisioned a space where both animals and humans could interact in a natural, sustainable environment. Located in India, the zoo was initially asmall sanctuary focusing on local wildlife, aiming to educate the community about native species and conservation efforts");
let mission = new MainContent("mission","Mission and Vision", "From its inception, Nature's Zoo has had a core mission: To foster a deeper understanding and appreciation of the natural world, promoting conservation and sustainability for future generations.The founders were committed to preserving the natural habitats of animals while providing an educational experience for visitors.");
let conservation = new MainContent("conservation", "Focus on Conservation", "By the mid-2000s, Nature’s Zoo had established itself as a leader in conservation. The zoo launched multiple projects, aimed at reintroducing endangered species to the wild. Partnerships with wildlife organizations and local schools helped build a strong community support system, spreading awareness about conservation.");
let innovation = new MainContent("innovations", "Innovation and Visitor's Experience" , "In recent Years, Nature’s Zoo has embraced technology and innovation, introducing features like interactive exhibits virtual reality tours, and educational workshops. The zoo is now home to over 25 species, with a special emphasis on animal welfare, conservation research, and sustainable practices.");
let goal = new MainContent("goal","Present and Future", "Today, Nature’s Zoo continues to be a hub for conservation, research, and education. With future plans to expand exhibits and develop more breeding programs, the zoo remains dedicated to its mission of connecting people with nature and inspiring a global movement for wildlife conservation.");

let topics = [history, mission, conservation, innovation, goal];
topics.forEach(maincontent => maincontent.description());
