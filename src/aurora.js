
function findLocation(event){
event.preventDefault();
let location = document.querySelector("#type-location").value;
let countryCode = document.querySelector("#type-country-code").value;
let stateCode = document.querySelector("#type-state-code").value;
extractLocation(location, countryCode, stateCode);
}

function extractLocation(location, countryCode, stateCode) {
let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location},${stateCode},${countryCode}&limit=1&appid=${apiKey}`;
document.querySelector("#name-of-place").innerHTML = `The probability of seeing the Aurora in ${location.toUpperCase()}: `; 
findProbability.innerHTML = `We are calculating`;

axios.get(apiUrl).then(reportLocation);
}

function reportLocation (response) {
let lat = response.data[0].lat;
let lon = response.data[0].lon;
let auroraUrl = `https://api.auroras.live/v1/?type=all&lat=${lat}&long=${lon}&forecast`;
axios.get(auroraUrl).then(searchAurora);
}

function searchAurora(response) {
let probability = response.data.probability.value;
findProbability.innerHTML = ` ${probability}%`;
}

let newSearch = document.querySelector("#input-form");
newSearch.addEventListener("submit", findLocation);

let findProbability = document.querySelector("#description-aurora");