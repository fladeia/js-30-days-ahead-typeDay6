<!-- segunda opção para fetch
async function getData() {
const res = await fetch(endpoint);
const data = await res.json();
cities.push(...data);
console.log(cities);
}
getData();

segunda opção para addEventListener
searchInput.addEventListener("keyup", (e) => {
console.log(searchInput.value);
}); -->

<!-- searchInput.addEventListener("input", (e) => {
  const findCities = findMatchs(searchInput.value, cities);
  const html = findCities
    .map((place) => {
      const regex = new RegExp(place.city, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${place.city}</span>`
      );
      const StateName = place.state.replace(
        regex,
        `<span class="hl">${place.state}</span>`
      );

      return `
        <li>
            <span class="name">${cityName}, ${StateName}</span>
            <span class="population" >${numberWithCommas(
              place.population
            )}</span>
        </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}); -->
