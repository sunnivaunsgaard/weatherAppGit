
function dateToday(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
}

function searchCityWeather(city) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeather);
}

function handleCityWeather(event) {
  event.preventDefault();
  let updateCity = document.querySelector("#type-city").value;
  searchCityWeather(updateCity);
}

function handleCityOne(event) {
  event.preventDefault();
  searchCityWeather("Tokyo");
}

function handleCityTwo(event) {
  event.preventDefault();
  searchCityWeather("Berlin");
}

function handleCityThree(event) {
  event.preventDefault();
  searchCityWeather("Quito");
}


function reportCityWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name.toUpperCase();
  document.querySelector("#degrees-city").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#percieved").innerHTML = Math.round(response.data.main.feels_like);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  let divElementC = document.querySelector("#celcius");
  divElementC.classList.add("f-c-change");
  let divElementF = document.querySelector("#fahrenheit");
  divElementF.classList.remove("f-c-change");
}
function reportCityWeatherMultiple(response) {
  document.querySelector("#tomorrow-temperature").innerHTML = Math.round(
    response.data.daily[1].temp.day); 
  document.querySelector("#second-day-temperature").innerHTML = Math.round(
    response.data.daily[2].temp.day);
  document.querySelector("#third-day-temperature").innerHTML = Math.round(
    response.data.daily[3].temp.day);
  document.querySelector("#fourth-day-temperature").innerHTML = Math.round(
    response.data.daily[4].temp.day);
  document.querySelector("#fifth-day-temperature").innerHTML = Math.round(
    response.data.daily[5].temp.day);
  document.querySelector("#sixth-day-temperature").innerHTML = Math.round(
    response.data.daily[6].temp.day);
}


function findCurrentPosition(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

function findCurrentPositionMultiple(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPositionMultiple);
}

function showCurrentPositionMultiple(position) {
    let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
    let currentLat = `lat=${position.coords.latitude}`;
    let currentLon = `&lon=${position.coords.longitude}`; 
    let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
    let apiUrl = `${apiHolder}${currentLat}${currentLon}&exclude=minutely,alerts,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(reportCityWeatherMultiple);
}

function showCurrentPosition(position) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let currentLat = `lat=${position.coords.latitude}`;
  let currentLon = `&lon=${position.coords.longitude}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/weather?`;
  let apiUrl = `${apiHolder}${currentLat}${currentLon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeather);
}


function convertFahrenheit(event){
  event.preventDefault();
  let updateFahrenheit = document.querySelector("#degrees-city");
    let temperature = updateFahrenheit.innerHTML;
    temperature = Number(temperature);
    let fahrenheit = Math.round(temperature * 1.8 + 32);
    updateFahrenheit.innerHTML = `${fahrenheit}`;
    let divElementF = document.querySelector("#fahrenheit");
    divElementF.classList.add("f-c-change");
    let divElementC = document.querySelector("#celcius");
    divElementC.classList.remove("f-c-change");
    changeDegreeFahrenheit.removeEventListener("click", convertFahrenheit);
    let changeDegreeCelcius = document.querySelector("#celcius");
    changeDegreeCelcius.addEventListener("click", convertCelcius);
}

function convertCelcius(event) {
  event.preventDefault();
  let updateCelcius = document.querySelector("#degrees-city");
  let temperature = updateCelcius.innerHTML;
  temperature = Number(temperature);
  let celcius = Math.round((temperature - 32) * 5/9);
  updateCelcius.innerHTML = `${celcius}`;
  let divElementC = document.querySelector("#celcius");
  divElementC.classList.add("f-c-change");
  let divElementF = document.querySelector("#fahrenheit");
  divElementF.classList.remove("f-c-change");
  let changeDegreeFahrenheit = document.querySelector("#fahrenheit");
  changeDegreeFahrenheit.addEventListener("click", convertFahrenheit);
}


let time = new Date(); 
function findDate (days) {
let newDate = new Date(time);
newDate.setDate(newDate.getDate()+ days);
setDayDate = newDate.getDate();
setDayMonth = newDate.getMonth();
if (days == 2){ 
return document.querySelector("#day2").innerHTML = `${setDayDate}/${setDayMonth}`;
} if (days == 3) {
return (document.querySelector("#day3").innerHTML = `${setDayDate}/${setDayMonth}`);
} if (days == 4) {
return (document.querySelector("#day4").innerHTML = `${setDayDate}/${setDayMonth}`);
} if (days == 5) {
return (document.querySelector("#day5").innerHTML = `${setDayDate}/${setDayMonth}`);
} if (days == 6) {
return (document.querySelector("#day6").innerHTML = `${setDayDate}/${setDayMonth}`);
}
}

findDate(2);
findDate(3);
findDate(4);
findDate(5);
findDate(6);

let updateTime = document.querySelector("#date-today");
updateTime.innerHTML = dateToday(time);



let findCityWeather = document.querySelector("#input-form");
findCityWeather.addEventListener("submit", handleCityWeather);

let currentLocationCity = document.querySelector("#current-location");
currentLocationCity.addEventListener("click",findCurrentPosition);

let currentLocationCityMultiple = document.querySelector("#current-location");
currentLocationCity.addEventListener("click", findCurrentPositionMultiple);


searchCityWeather("Trondheim");

let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
let currentLat = `lat=63.4305`;
    let currentLon = `&lon=10.3951`;
    let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
    let apiUrl = `${apiHolder}${currentLat}${currentLon}&exclude=minutely,alerts,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(reportCityWeatherMultiple);
  
 let changeDegreeFahrenheit = document.querySelector("#fahrenheit");
 changeDegreeFahrenheit.addEventListener("click", convertFahrenheit);
 

 let suggestedCityOne = document.querySelector("#first-city");
 suggestedCityOne.addEventListener("click", handleCityOne);
 let suggestedCityTwo = document.querySelector("#second-city");
 suggestedCityTwo.addEventListener("click", handleCityTwo);
 let suggestedCityThree = document.querySelector("#third-city");
 suggestedCityThree.addEventListener("click", handleCityThree);
 
