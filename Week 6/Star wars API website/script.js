const URL = "https://swapi.dev/api/planets/";
const section = document.getElementById("section");
fetch(URL).then((response) => {
    return response.json();
})
    .then((data) => {
        const planets = data.results;
        planets.map((planet) => {
            createPlanetDiv(planet);
        })
    })

createPlanetDiv = (planet) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="h-40 bg-gray-200">
<h3>Name:</h3>
<p>${planet.name}</p>
<h3>Population:</h3>
<p>${planet.population}</p>
<h3>Gravity:</h3>
<p>${planet.gravity}</p>
<h3>Terrain:</h3>
<p>${planet.terrain}</p>
</div>`;
    section.appendChild(div);
}