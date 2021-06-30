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
function searchCityWeatherMultiple(city) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(extractPositionMultiple);
}

function searchCityWeather(city) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeather);
}

function handleCityWeatherMultiple(event) {
  event.preventDefault();
  let updateCity = document.querySelector("#type-city").value;
  searchCityWeatherMultiple(updateCity);
}
function handleCityWeather(event) {
  event.preventDefault();
  let updateCity = document.querySelector("#type-city").value;
  searchCityWeather(updateCity);
}

function handleCityOne(event) {
  event.preventDefault();
  searchCityWeather("Tokyo");
  searchCityWeatherMultiple("Tokyo");
}

function handleCityTwo(event) {
  event.preventDefault();
  searchCityWeather("Berlin");
  searchCityWeatherMultiple("Berlin");
}

function handleCityThree(event) {
  event.preventDefault();
  searchCityWeather("Quito");
  searchCityWeatherMultiple("Quito");
}

function extractPositionMultiple(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts,hourly&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeatherMultiple);
}

function reportCityWeather(response) {
  document.querySelector("#current-city").innerHTML =
    response.data.name.toUpperCase();
  document.querySelector("#degrees-city").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#percieved").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let divElementC = document.querySelector("#celcius");
  divElementC.classList.add("f-c-change");
  let divElementF = document.querySelector("#fahrenheit");
  divElementF.classList.remove("f-c-change");
  let icon = response.data.weather[0].icon;
  findIcon(icon);
}

let currentClass = "wi-cloud";

function findIcon(icon) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("main-icon").classList.remove("wi", currentClass);
  currentClass = icons[icon] || "wi-cloud";
  document.getElementById("main-icon").classList.add("wi", currentClass);
}


function reportCityWeatherMultiple(response) {
  document.querySelector("#tomorrow-temperature").innerHTML = Math.round(
    response.data.daily[1].temp.day
  );
  document.querySelector("#second-day-temperature").innerHTML = Math.round(
    response.data.daily[2].temp.day
  );
  document.querySelector("#third-day-temperature").innerHTML = Math.round(
    response.data.daily[3].temp.day
  );
  document.querySelector("#fourth-day-temperature").innerHTML = Math.round(
    response.data.daily[4].temp.day
  );
  document.querySelector("#fifth-day-temperature").innerHTML = Math.round(
    response.data.daily[5].temp.day
  );
  document.querySelector("#sixth-day-temperature").innerHTML = Math.round(
    response.data.daily[6].temp.day
  );
console.log(response.data.daily[0].dt*1000);

  let icon1 = response.data.daily[1].weather[0].icon;
  findIcon1(icon1);
  console.log(icon1);
  let icon2 = response.data.daily[2].weather[0].icon;
  findIcon2(icon2);
  console.log(icon2);
  let icon3 = response.data.daily[3].weather[0].icon;
  findIcon3(icon3);
  console.log(icon3);
  let icon4 = response.data.daily[4].weather[0].icon;
  findIcon4(icon4);
  console.log(icon4);
  let icon5 = response.data.daily[5].weather[0].icon;
  findIcon5(icon5);
  console.log(icon5);
  let icon6 = response.data.daily[6].weather[0].icon;
  findIcon6(icon6);
  console.log(icon6);
}

let classes1 = "wi-cloud";
function findIcon1(icon1){
   const icons = {
     "01d": "wi-day-sunny",
     "01n": "wi-day-sunny",
     "02d": "wi-day-cloudy",
     "02n": "wi-day-cloudy",
     "03d": "wi-cloud",
     "03n": "wi-cloud",
     "04d": "wi-cloudy",
     "04n": "wi-cloudy",
     "09d": "wi-showers",
     "09n": "wi-showers",
     "10d": "wi-day-rain",
     "10n": "wi-day-rain",
     "11d": "wi-thunderstorm",
     "11n": "wi-thunderstorm",
     "13d": "wi-snowflake-cold",
     "13n": "wi-snowflake-cold",
     "50d": "wi-fog",
     "50n": "wi-fog",
   };
  document.getElementById("first-icon").classList.remove("wi", classes1);
  classes1 = icons[icon1] || "wi-cloud";
  document.getElementById("first-icon").classList.add("wi", classes1);
}

let classes2 = "wi-cloud";
function findIcon2(icon2) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("second-icon").classList.remove("wi", classes2);
  classes2 = icons[icon2] || "wi-cloud";
  document.getElementById("second-icon").classList.add("wi", classes2);
}

let classes3 = "wi-cloud";
function findIcon3(icon3) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("third-icon").classList.remove("wi", classes3);
  classes3 = icons[icon3] || "wi-cloud";
  document.getElementById("third-icon").classList.add("wi", classes3);
}

let classes4 = "wi-cloud";
function findIcon4(icon4) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("fourth-icon").classList.remove("wi", classes4);
  classes4 = icons[icon4] || "wi-cloud";
  document.getElementById("fourth-icon").classList.add("wi", classes4);
}

let classes5 = "wi-cloud";
function findIcon5(icon5) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("fifth-icon").classList.remove("wi", classes5);
  classes5 = icons[icon5] || "wi-cloud";
  document.getElementById("fifth-icon").classList.add("wi", classes5);
}

let classes6 = "wi-cloud";
function findIcon6(icon6) {
  const icons = {
    "01d": "wi-day-sunny",
    "01n": "wi-day-sunny",
    "02d": "wi-day-cloudy",
    "02n": "wi-day-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-rain",
    "10n": "wi-day-rain",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snowflake-cold",
    "13n": "wi-snowflake-cold",
    "50d": "wi-fog",
    "50n": "wi-fog",
  };
  document.getElementById("sixth-icon").classList.remove("wi", classes6);
  classes6 = icons[icon6] || "wi-cloud";
  document.getElementById("sixth-icon").classList.add("wi", classes6);
}

function findCurrentPosition(event) {
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
let isCelcius = true;
function convertFahrenheit(event) {
  event.preventDefault();
  if (!isCelcius) return;

  isCelcius = false;
  let updateFahrenheit = document.querySelector("#degrees-city");
  let temperature = updateFahrenheit.innerHTML;
  temperature = Number(temperature);
  let fahrenheit = Math.round(temperature * 1.8 + 32);
  updateFahrenheit.innerHTML = `${fahrenheit}`;
  let divElementF = document.querySelector("#fahrenheit");
  divElementF.classList.add("f-c-change");
  let divElementC = document.querySelector("#celcius");
  divElementC.classList.remove("f-c-change");
}

function convertCelcius(event) {
  event.preventDefault();
  if (isCelcius) return;

  isCelcius = true;
  let updateCelcius = document.querySelector("#degrees-city");
  let temperature = updateCelcius.innerHTML;
  temperature = Number(temperature);
  let celcius = Math.round(((temperature - 32) * 5) / 9);
  updateCelcius.innerHTML = `${celcius}`;
  let divElementC = document.querySelector("#celcius");
  divElementC.classList.add("f-c-change");
  let divElementF = document.querySelector("#fahrenheit");
  divElementF.classList.remove("f-c-change"); 
}

let time = new Date();

function findDate(days) {
  let newDate = new Date(time);
  newDate.setDate(newDate.getDate() + days);
  setDayDate = newDate.getDate();
  setDayMonth = newDate.getMonth();
  if (days == 2) {
    return (document.querySelector(
      "#day2"
    ).innerHTML = `${setDayDate}/${setDayMonth}`);
  }
  if (days == 3) {
    return (document.querySelector(
      "#day3"
    ).innerHTML = `${setDayDate}/${setDayMonth}`);
  }
  if (days == 4) {
    return (document.querySelector(
      "#day4"
    ).innerHTML = `${setDayDate}/${setDayMonth}`);
  }
  if (days == 5) {
    return (document.querySelector(
      "#day5"
    ).innerHTML = `${setDayDate}/${setDayMonth}`);
  }
  if (days == 6) {
    return (document.querySelector(
      "#day6"
    ).innerHTML = `${setDayDate}/${setDayMonth}`);
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

let findCityWeatherMultiple = document.querySelector("#input-form");
findCityWeatherMultiple.addEventListener("submit", handleCityWeatherMultiple);

let currentLocationCity = document.querySelector("#current-location");
currentLocationCity.addEventListener("click", findCurrentPosition);

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

let changeDegreeCelcius = document.querySelector("#celcius");
changeDegreeCelcius.addEventListener("click", convertCelcius);

let suggestedCityOne = document.querySelector("#first-city");
suggestedCityOne.addEventListener("click", handleCityOne);
let suggestedCityTwo = document.querySelector("#second-city");
suggestedCityTwo.addEventListener("click", handleCityTwo);
let suggestedCityThree = document.querySelector("#third-city");
suggestedCityThree.addEventListener("click", handleCityThree);
