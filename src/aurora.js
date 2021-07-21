
function findLocation(event){
event.preventDefault();
let location = document.querySelector("#type-location");
let countryCode = document.querySelector("#type-country-code");
let stateCode = document.querySelector("#type-state-code");
extractLocation(location, countryCode, stateCode); 

}

function extractLocation(location, countryCode, stateCode) {
let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location},${stateCode},${countryCode}&appid=${apiKey}`;
if (countryCode == null) {
apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location},${countryCode}&appid=${apiKey}`;
}
axios.get(apiUrl).then(searchAurora);
}

function searchAurora () {

}



let newSearch = document.querySelector("#input-form");
newSearch.addEventListener("submit", findLocation);