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
    }

];

const searchInput = document.getElementById("planetSearch");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

console.log(searchButton);
console.log(searchInput);
console.log(searchResults);
console.log(planets);

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;
    const result = planets.find(function(planet) {
        return planet.name.toLowerCase() === searchTerm.toLowerCase();
    }); 

    if (result) {
        const planetSection = document.getElementById(result.id);

        planetSection.scrollIntoView({
            behavior: "smooth"
        });
        

    }
    else {
        searchResults.textContent = "not found";
    }
});

