console.log("JS IS WORKING");

const marsLink = document.getElementById("mars-tab");

marsLink.addEventListener("click", function () {
    console.log("mars was clicked!");
});


const marsTitle = document.getElementById("mars-title");

marsLink.addEventListener("click", function () {
    marsTitle.textContent = "Welcome to Mars!";
});


const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
});

const planetsTab = document.getElementById("sun-tab");

const planetsTab2 = document.querySelector(".tab-nav");

backToTopButton.addEventListener("click", function() {
    planetsTab.scrollIntoView({

        behavior: "smooth"
    });
});



backToTopButton.addEventListener("click", function(){
    planetsTab2.scrollIntoView({
        behavior: "instant"
    });
});

const planets = [
    {
        id: "sun",
        name: "Sun",
        description: "The star at the center of our solar system",
        moons: 0
    },
    {
        id: "mercury",
        name: "Mercury",
        description: "Closest planet to the Sun",
        moons: 0
    },
    {
        id: "venus",
        name: "Venus",
        description: "Hottest planet with thick clouds",
        moons: 0
    },
    {
        id: "mars",
        name: "Mars",
        description: "Cold, dusty world",
        moons: 2 
    },
    {
        id: "earth",
        name: "Earth",
        description: "Our Home planet",
        moons: 1
    },
    {
        id: "jupiter",
        name: "Jupiter",
        description: "A gas giant",
        moons: "95+"
    },
    {
        id: "saturn",
        name: "Saturn",
        description: "Famous for its bright rings",
        moons: "146+"
    },
    {
        id: "uranus",
        name: "Uranus",
        description: "An ice giant that rotates on its side",
        moons: 27
    },
    {
        id: "neptune",
        name: "Neptune",
        description: "Farthest planet from the Sun",
        moons: 14
    },
    {
        id: "moon",
        name: "Moon",
        description: "Earth's natural satellite",
        moons: 0
    }

];

const searchInput = document.getElementById("planetSearch");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

console.log(searchButton);
console.log(searchInput);
console.log(searchResults);
console.log(planets);



function searchPlanet() {
    const searchTerm = searchInput.value;

    const result = planets.find(function(planet) {
        return planet.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (result){
        searchResults.textContent = result.description; 

        const planetSection = document.getElementById(result.id);

        planetSection.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        searchResults.textContent = "Not Found"
    }
}


searchButton.addEventListener("click", searchPlanet);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter")
        searchPlanet();
});