function MainContent(className ,heading , explanation) { 
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

function Facilities(className,anchorLink,image,heading, explanation) {
    this.className = className,
    this.anchorLink = anchorLink,
    this.image = image,
    this.heading = heading,
    this.explanation=explanation,
    this.description = () => {
        let newSection  = document.createElement("div");
        newSection.classList.add(this.className,"facilities-grid");
        let section = document.querySelector(".facilities");
        section.appendChild(newSection);
        let link = document.createElement("a");
        link.href = this.anchorLink;
        newSection.appendChild(link);
        let images = document.createElement("img");
        images.src = this.image;
        images.alt = this.heading;
        link.appendChild(images);
        let subTitle = document.createElement("h4");
        subTitle.textContent = this.heading;
        newSection.appendChild(subTitle);
        let details = document.createElement("p");
        details.textContent = this.explanation;
        newSection.appendChild(details);
    }
};

let hotels = new Facilities("hotel","./images/food.jpg","./images/food.jpg","Food Area","Nature’s Zoo offers diverse dining options, from family-friendly meals at Savanna Café to quick snacks at Rainforest Snack Shack. Enjoy a scenic meal at Lakeside Grill with grilled specialties. Our food areas prioritize sustainability, using eco-friendly materials and promoting waste reduction, ensuring a delicious and responsible dining experience.");
let aquarium = new Facilities("aquarium","./images/aquarium1.jpg","./images/aquarium1.jpg","Aquarium","Explore the wonders of the deep at Nature’s Zoo's stunning Aquarium, home to colorful coral reefs, majestic sharks, playful sea otters, and vibrant schools of tropical fish. Interactive touch pools let visitors get up close with starfish and other marine creatures, offering an engaging and educational underwater experience for all ages.");
let rides = new Facilities("rides","./images/rides.jpg","./images/rides.jpg","Rides", "For thrill-seekers, our exciting Jungle Safari Ride takes you on a guided tour through lush habitats. For an experience, enjoy the Tree-Top Sky Ride, offering a gentle, bird's-eye view of the zoo’s beautiful landscapes. The Zoo Train, a favorite with families, provides a leisurely ride around the zoo.");

let otherFacilities = [hotels,aquarium,rides]
otherFacilities.forEach(facilities => facilities.description());

let facilitiesArray = Array.from(document.querySelectorAll(".facilities-grid"));
facilitiesArray.forEach(grid => grid.addEventListener("mouseenter", () => grid.classList.add("highlight")));
facilitiesArray.forEach(grid => grid.addEventListener("mouseleave", () => grid.classList.remove("highlight")));

function TicketDetails (className, icon, iconAlt , detail) {
    this.className = className,
    this.icon = icon,
    this.iconAlt = iconAlt
    this.detail = detail,
    this.description = () => {
        let ticketDiv = document.querySelector(".ticket-details");
        let ticketClass = document.createElement("div");
        if(className === "details"){
            ticketClass.classList.add(className);
            ticketDiv.appendChild(ticketClass);
        }else {
            ticketClass.classList.add(className ,"content");
            ticketDiv.appendChild(ticketClass);
            let iconImage = document.createElement("img");
            iconImage.src = this.icon;
            iconImage.alt = this.iconAlt;
            ticketClass.appendChild(iconImage);
        }
        
        let ticketContent = document.createElement("p");
        ticketContent.textContent = detail;
        ticketClass.appendChild(ticketContent);
    }
};

let time = new TicketDetails("details","","","opening hours");
let hours = new TicketDetails("time","./images/clock-three-svgrepo-com.svg","Clock-icon","09.00 - 18.00 All days")
let address = new TicketDetails("details","", "",  "Address");
let addressDetails = new TicketDetails("address","./images/location-pin-svgrepo-com.svg","Map-icon", "Roskildevej 32, 2000 Frederiksberg.");
let disabledOption = new TicketDetails("details","","","disablity conditions",);
let disabledDetails = new TicketDetails("disabled" ,"./images/wheelchair-svgrepo-com (1).svg","Wheelchair-icon", "Wheelchair-friendly conditions.");
let lion = new TicketDetails("details","", "","Feeding the lion. ");
let lionFeed = new TicketDetails("lion" ,"./images/lion-svgrepo-com.svg","Lion-icon", "12.00 - 12.30");
let bear = new TicketDetails("details","","","Feeding the bear.");
let bearFeed = new TicketDetails("bear" ,"./images/bear-black-shape-svgrepo-com.svg","Bear-icon", "13.00 - 13.30");
let dolphin = new TicketDetails("details","","","Dolphin Show",);
let dolphinShow = new TicketDetails("dolphin" ,"./images/dolphin-svgrepo-com.svg","Dolphin-icon", "14.00 - 14.45");


let ticketSection = [time ,hours, address ,addressDetails , disabledOption , disabledDetails, lion , lionFeed, bear,bearFeed,dolphin,dolphinShow];
ticketSection.forEach(options => options.description());

let planYourVisitImage = document.createElement("img");
planYourVisitImage.src = "./images/pexels-wolfgang-weiser-467045605-22491773.jpg";
planYourVisitImage.alt = "Wolf-gang";
let planYourVisit = document.querySelector(".ticket");
planYourVisit.appendChild(planYourVisitImage);

let ticketArray = Array.from(document.querySelectorAll(".content"));
console.log(ticketArray);

ticketArray.forEach(ticket => ticket.addEventListener("mouseenter", () => ticket.classList.add("active")));
ticketArray.forEach(ticket => ticket.addEventListener("mouseleave",()=> ticket.classList.remove("active")));