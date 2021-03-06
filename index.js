const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatchs(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

function displayMatches() {
  const findCities = findMatchs(this.value, cities);
  const html = findCities
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const StateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
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
}

searchInput.addEventListener("input", displayMatches);
