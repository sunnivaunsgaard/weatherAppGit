
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
function extractPosition(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeatherMultiple);
  axios.get(apiUrl).then(reportHourlyForecast);
}

function extractPositionFahrenheit(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(reportCityWeatherMultipleFahrenheit);
  axios.get(apiUrl).then(reportHourlyForecastFahrenheit);
}

function reportCityWeatherMultipleFahrenheit(response) {
let forecast = response.data.daily;
let forecastElement = document.querySelector("#daily-forcast-boxes");
let forecastHTML = ``;

forecast.forEach(function (forecastDaily, index) {
  if (index < 1) return;
  if (index < 7) {
    let icon = forecastDaily.weather[0].icon;

    forecastHTML =
      forecastHTML +
      `<div class="scroll-bar" id="scroll-daily-forecast">
    <div class="box1"> <span id="tomorrow">${findDate(forecastDaily.dt)}</span>
            <div class="child-box"> 
            ${Math.round(forecastDaily.temp.day)} ° <span> <i class = "${icons[icon]}" id= "first-icon"> </i></span>
            </div>
        </div>
          <div id = "more-info1"> 
            <ul>
            <li class= "info-max-min">
            <strong><span id="info1-max">
              ${Math.round(forecastDaily.temp.max)} °
              </span></strong> <span id="info1-min">
              ${Math.round(forecastDaily.temp.min)} °
              </span>
              </li>
              <li class="info-percieved">
              Percieved: <span id="info1-percieved">
              ${Math.round(forecastDaily.feels_like.day)} °
              </span> 
              </li>
              <li class="info-humidity">
              Humidity: <span id="info1-humidity">${
                forecastDaily.humidity
              }</span> %
              </li>
              <li class="info-wind">
              Wind: <span id="info1-wind">
              ${forecastDaily.wind_speed}
              </span> m/h
              </li>
              </ul> 
            </div>
            </div>`;
  }
});
forecastElement.innerHTML = `${forecastHTML}`;
}

function reportCityWeatherMultiple(response) {
let forecast = response.data.daily;
let forecastElement = document.querySelector("#daily-forcast-boxes");
let forecastHTML = ``;

forecast.forEach(function (forecastDaily, index) {
 if (index < 1) return;
if (index < 7 ){
  let icon = forecastDaily.weather[0].icon;

  forecastHTML =
    forecastHTML +
    `<div class="scroll-bar" id="scroll-daily-forecast">
    <div class="box1 "> <span id="tomorrow">${findDate(forecastDaily.dt)}</span>
            <div class="child-box">
            ${Math.round(forecastDaily.temp.day)} ° <span>
              <i class = "${icons[icon]}" id="first-icon"> </i></span>
            </div>
        </div>
          <div id = "more-info1"> 
            <ul>
            <li class= "info-max-min">
            <strong><span id="info1-max">
              ${Math.round(forecastDaily.temp.max)} °
              </span></strong> <span id="info1-min">
              ${Math.round(forecastDaily.temp.min)} °
              </span>
              </li>
              <li class="info-percieved">
              Percieved: <span id="info1-percieved">
              ${Math.round(forecastDaily.feels_like.day)} °
              </span> 
              </li>
              <li class="info-humidity">
              Humidity: <span id="info1-humidity">${
                forecastDaily.humidity}</span> %
              </li>
              <li class="info-wind">
              Wind: <span id="info1-wind">
              ${forecastDaily.wind_speed}
              </span> m/h
              </li>
              </ul> 
            </div>
            </div>`;}
});
forecastElement.innerHTML = `${forecastHTML}`;
}

function reportHourlyForecast(response) {
  let forecast = response.data.hourly;
  let forecastElement = document.querySelector("#inner-hourly-forecast");
  let forecastHTML = ``;

  forecast.forEach(function (forecastHour) {
    let findTime = new Date(forecastHour.dt * 1000);
    let hourlyTime = findTime.getHours();
    if (hourlyTime < 10) {
      hourlyTime = `0${hourlyTime}`;
    }
    let icon = forecastHour.weather[0].icon;
    hourlyCelcius = forecastHour.temp;
    forecastHTML =
      forecastHTML +
      `<div class="hourly"> 
        <div id="hour"> ${hourlyTime}:00 </div>
        <span id="hour1-forecast">${Math.round(hourlyCelcius)} ° </span> 
        <i class= "hourly-icon ${icons[icon]}">  </i> </div>`;
  });
  forecastElement.innerHTML = `${forecastHTML}`;
}

function reportHourlyForecastFahrenheit(response) {
  let forecast = response.data.hourly;
  let forecastElement = document.querySelector("#inner-hourly-forecast");
  let forecastHTML = ``;

  forecast.forEach(function (forecastHour) {
    let findTime = new Date(forecastHour.dt * 1000);
    let hourlyTime = findTime.getHours();
    if (hourlyTime < 10) {
      hourlyTime = `0${hourlyTime}`;
    }
    let icon = forecastHour.weather[0].icon;
    hourlyCelcius = forecastHour.temp;
    forecastHTML =
      forecastHTML +
      `<div class="hourly"> 
        <div id="hour"> ${hourlyTime}:00 </div>
        <span id="hour1-forecast">${Math.round(hourlyCelcius)} ° </span> 
        <i class= "hourly-icon ${icons[icon]}">  </i> </div>`;
  });
  forecastElement.innerHTML = `${forecastHTML}`;
}

function reportCityWeather(response) {
  document.querySelector("#current-city").innerHTML =
    response.data.name.toUpperCase();
  document.querySelector("#degrees-city").innerHTML = Math.round(
    response.data.main.temp
  );
  let tempMax = Math.round(response.data.main.temp_max);
  let tempMin = Math.round(response.data.main.temp_min);
  document.querySelector("#max").innerHTML = `${tempMax} `;
  document.querySelector("#min").innerHTML = ` ${tempMin} `;
  percievedTemperature = Math.round(response.data.main.feels_like);
  document.querySelector("#percieved").innerHTML = `${percievedTemperature}`;
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

function findIcon(icon0) {
  document.getElementById("main-icon").classList.remove("wi", currentClass);
  currentClass = theIcons[icon0] || "wi-cloud";
  document.getElementById("main-icon").classList.add("wi", currentClass);
}

function findCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

function findCurrentPositionMultiple(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPositionMultiple);
  let removeText = document.querySelector("#current-city");
  removeText.innerHTML = " ";
  let newText = document.querySelector("#weather-description");
  newText.innerHTML =
    "Wait while we find 📍 If asked, press 'allow'. If not, change settings";
}

function findDateToday(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
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

function findDate(timestamp) {
  let findDate = new Date(timestamp * 1000);
  let day = findDate.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day];
}

function searchCityWeatherMultiple(city) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(extractPosition);
}

function searchCityWeather(city) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeather);
}

function showCurrentPositionMultiple(position) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let currentLat = `lat=${position.coords.latitude}`;
  let currentLon = `&lon=${position.coords.longitude}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${currentLat}${currentLon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
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

function convertHourlyFahrenheit(event) {
  event.preventDefault();
  let newCity = document.querySelector("#current-city");
  let city = newCity.innerHTML;
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(extractPositionFahrenheit);
}

function convertHourlyCelcius(event) {
  event.preventDefault();
  let newCity = document.querySelector("#current-city");
  let city = newCity.innerHTML;
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(extractPosition);
}

function convertFahrenheit(event) {
  event.preventDefault();
  if (!isCelcius) return;

  isCelcius = false;
  let updateFahrenheit = document.querySelector("#degrees-city");
  let temperature = updateFahrenheit.innerHTML;
  temperature = Number(temperature);
  let fahrenheit = Math.round(temperature * 1.8 + 32);
  updateFahrenheit.innerHTML = `${fahrenheit}`;
  changeDegreeFahrenheit.classList.add("f-c-change");
  changeDegreeCelcius.classList.remove("f-c-change");

  let maximum = document.querySelector("#max");
  let temperatureMax = maximum.innerHTML;
  temperatureMax = Number(temperatureMax);
  let fahrenheitMax = Math.round(temperatureMax * 1.8 + 32);
  let minimum = document.querySelector("#min");
  let temperatureMin = minimum.innerHTML;
  temperatureMin = Number(temperatureMin);
  let fahrenheitMin = Math.round(temperatureMin * 1.8 + 32);
  maximum.innerHTML = `${fahrenheitMax} `;
  minimum.innerHTML = `${fahrenheitMin} `;

  let percievedTemperature = document.querySelector("#percieved");
  let percievedFahrenheit = percievedTemperature.innerHTML;
  percievedFahrenheit = Number(percievedFahrenheit);
  let percieved = Math.round(percievedFahrenheit * 1.8 +32);
  percievedTemperature.innerHTML = `${percieved}`;
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
  changeDegreeCelcius.classList.add("f-c-change");
  changeDegreeFahrenheit.classList.remove("f-c-change");

  let maximum = document.querySelector("#max");
  let temperatureMax = maximum.innerHTML;
  temperatureMax = Number(temperatureMax);
  let celciusMax = Math.round(((temperatureMax - 32) * 5) / 9);
  let minimum = document.querySelector("#min");
  let temperatureMin = minimum.innerHTML;
  temperatureMin = Number(temperatureMin);
  let celciusMin = Math.round(((temperatureMin - 32) * 5) / 9);
  maximum.innerHTML = `${celciusMax} `;
  minimum.innerHTML = `${celciusMin} `;

    let percievedTemperature = document.querySelector("#percieved");
    let percievedCelcius = percievedTemperature.innerHTML;
    percievedCelcius = Number(percievedCelcius);
    let percieved = Math.round((percievedCelcius - 32) * 5 /9);
    percievedTemperature.innerHTML = `${percieved}`;

}

let isCelcius = true;

let time = new Date();

let updateTime = document.querySelector("#date-today");
updateTime.innerHTML = findDateToday(time);

let findCityWeather = document.querySelector("#input-form");
findCityWeather.addEventListener("submit", handleCityWeather);

let findCityWeatherMultiple = document.querySelector("#input-form");
findCityWeatherMultiple.addEventListener("submit", handleCityWeatherMultiple);

let currentLocationCity = document.querySelector("#current-location");
currentLocationCity.addEventListener("click", findCurrentPosition);

let currentLocationCityMultiple = document.querySelector("#current-location");
currentLocationCity.addEventListener("click", findCurrentPositionMultiple);

searchCityWeather("Trondheim");
searchCityWeatherMultiple("Trondheim");
let apiKeyDefalut = `81bf8dd320f01a5acdd432f8343859e1`;
let currentLatDefault = `lat=63.4305`;
let currentLonDefault = `&lon=10.3951`;
let apiHolderDefault = `https://api.openweathermap.org/data/2.5/onecall?`;
let apiUrlDefault = `${apiHolderDefault}${currentLatDefault}${currentLonDefault}&exclude=minutely,alerts&appid=${apiKeyDefalut}&units=metric`;
axios.get(apiUrlDefault).then(reportCityWeatherMultiple);


let changeDegreeFahrenheit = document.querySelector("#fahrenheit");
changeDegreeFahrenheit.addEventListener("click", convertFahrenheit);
let changeHourlyDegreeFahrenheit = document.querySelector("#fahrenheit");
changeHourlyDegreeFahrenheit.addEventListener("click", convertHourlyFahrenheit);


let changeDegreeCelcius = document.querySelector("#celcius");
changeDegreeCelcius.addEventListener("click", convertCelcius);
let changeHourlyDegreeCelcius = document.querySelector("#celcius");
changeHourlyDegreeCelcius.addEventListener("click", convertHourlyCelcius);


let suggestedCityOne = document.querySelector("#first-city");
suggestedCityOne.addEventListener("click", handleCityOne);
let suggestedCityTwo = document.querySelector("#second-city");
suggestedCityTwo.addEventListener("click", handleCityTwo);
let suggestedCityThree = document.querySelector("#third-city");
suggestedCityThree.addEventListener("click", handleCityThree);


let hourlyCelcius = null;

const icons = {
  "01d": "wi wi-day-sunny",
  "01n": "wi wi-day-sunny",
  "02d": "wi wi-day-cloudy",
  "02n": "wi wi-day-cloudy",
  "03d": "wi wi-cloud",
  "03n": "wi wi-cloud",
  "04d": "wi wi-cloudy",
  "04n": "wi wi-cloudy",
  "09d": "wi wi-showers",
  "09n": "wi wi-showers",
  "10d": "wi wi-day-rain",
  "10n": "wi wi-day-rain",
  "11d": "wi wi-thunderstorm",
  "11n": "wi wi-thunderstorm",
  "13d": "wi wi-snowflake-cold",
  "13n": "wi wi-snowflake-cold",
  "50d": "wi wi-fog",
  "50n": "wi wi-fog",
};

let currentClass = "wi-cloud";

    let theIcons = {
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