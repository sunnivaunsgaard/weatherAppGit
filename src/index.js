function dateToday(date) {
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

function getHourlyForecast(response) {
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


function getHourlyForecastFahrenheit(response) {
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

function extractPosition(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeatherMultiple);
  axios.get(apiUrl).then(getHourlyForecast);
}

function extractPositionFahrenheit(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(reportCityWeatherMultipleFahrenheit);
  axios.get(apiUrl).then(getHourlyForecastFahrenheit);
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

function reportCityWeatherMultipleFahrenheit(response) {
  celciusTomorrow = response.data.daily[1].temp.day;
  document.querySelector("#tomorrow-temperature").innerHTML = ` ${Math.round(
    celciusTomorrow
  )} °`;
  celciusMoreInfo1Max = Math.round(response.data.daily[1].temp.max);
  document.querySelector("#info1-max").innerHTML = `${celciusMoreInfo1Max} °`;
  celciusMoreInfo1Min = Math.round(response.data.daily[1].temp.min);
  document.querySelector("#info1-min").innerHTML = `${celciusMoreInfo1Min} °`;
  celciusMoreInfo1Percieved = Math.round(response.data.daily[1].feels_like.day);
  document.querySelector(
    "#info1-percieved"
  ).innerHTML = `${celciusMoreInfo1Percieved} °`;
  humidityTomorrow = response.data.daily[1].humidity;
  document.querySelector("#info1-humidity").innerHTML = ` ${humidityTomorrow}`;
  windTomorrow = response.data.daily[1].wind_speed;
  document.querySelector("#info1-wind").innerHTML = ` ${windTomorrow}`;

  celciusDay2 = response.data.daily[2].temp.day;
  document.querySelector("#second-day-temperature").innerHTML = ` ${Math.round(
    celciusDay2
  )} °`;
  celciusMoreInfo2Max = Math.round(response.data.daily[2].temp.max);
  document.querySelector("#info2-max").innerHTML = `${celciusMoreInfo2Max} °`;
  celciusMoreInfo2Min = Math.round(response.data.daily[2].temp.min);
  document.querySelector("#info2-min").innerHTML = `${celciusMoreInfo2Min} °`;
  celciusMoreInfo2Percieved = Math.round(response.data.daily[2].feels_like.day);
  document.querySelector(
    "#info2-percieved"
  ).innerHTML = `${celciusMoreInfo2Percieved} °`;
  humidityDay2 = response.data.daily[2].humidity;
  document.querySelector("#info2-humidity").innerHTML = ` ${humidityDay2}`;
  windDay2 = response.data.daily[2].wind_speed;
  document.querySelector("#info2-wind").innerHTML = ` ${windDay2}`;

  celciusDay3 = response.data.daily[3].temp.day;
  document.querySelector("#third-day-temperature").innerHTML = ` ${Math.round(
    celciusDay3
  )} °`;
  celciusMoreInfo3Max = Math.round(response.data.daily[3].temp.max);
  document.querySelector("#info3-max").innerHTML = `${celciusMoreInfo3Max} °`;
  celciusMoreInfo3Min = Math.round(response.data.daily[3].temp.min);
  document.querySelector("#info3-min").innerHTML = `${celciusMoreInfo3Min} °`;
  celciusMoreInfo3Percieved = Math.round(response.data.daily[3].feels_like.day);
  document.querySelector(
    "#info3-percieved"
  ).innerHTML = `${celciusMoreInfo3Percieved} °`;
  humidityDay3 = response.data.daily[3].humidity;
  document.querySelector("#info3-humidity").innerHTML = ` ${humidityDay3}`;
  windDay3 = response.data.daily[3].wind_speed;
  document.querySelector("#info3-wind").innerHTML = ` ${windDay3}`;

  celciusDay4 = response.data.daily[4].temp.day;
  document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(
    celciusDay4
  )} °`;
  celciusMoreInfo4Max = Math.round(response.data.daily[4].temp.max);
  document.querySelector("#info4-max").innerHTML = `${celciusMoreInfo4Max} °`;
  celciusMoreInfo4Min = Math.round(response.data.daily[4].temp.min);
  document.querySelector("#info4-min").innerHTML = `${celciusMoreInfo4Min} °`;
  celciusMoreInfo4Percieved = Math.round(response.data.daily[4].feels_like.day);
  document.querySelector(
    "#info4-percieved"
  ).innerHTML = `${celciusMoreInfo4Percieved} °`;
  humidityDay4 = response.data.daily[4].humidity;
  document.querySelector("#info4-humidity").innerHTML = ` ${humidityDay4}`;
  windDay4 = response.data.daily[4].wind_speed;
  document.querySelector("#info4-wind").innerHTML = ` ${windDay4}`;

  celciusDay5 = response.data.daily[5].temp.day;
  document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(
    celciusDay5
  )} °`;
  celciusMoreInfo5Max = Math.round(response.data.daily[5].temp.max);
  document.querySelector("#info5-max").innerHTML = `${celciusMoreInfo5Max} °`;
  celciusMoreInfo5Min = Math.round(response.data.daily[5].temp.min);
  document.querySelector("#info5-min").innerHTML = `${celciusMoreInfo5Min} °`;
  celciusMoreInfo5Percieved = Math.round(response.data.daily[5].feels_like.day);
  document.querySelector(
    "#info5-percieved"
  ).innerHTML = `${celciusMoreInfo5Percieved} °`;
  humidityDay5 = response.data.daily[5].humidity;
  document.querySelector("#info5-humidity").innerHTML = ` ${humidityDay5}`;
  windDay5 = response.data.daily[5].wind_speed;
  document.querySelector("#info5-wind").innerHTML = ` ${windDay5}`;

  celciusDay6 = response.data.daily[6].temp.day;
  document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(
    celciusDay6
  )} °`;
  celciusMoreInfo6Max = Math.round(response.data.daily[6].temp.max);
  document.querySelector("#info6-max").innerHTML = `${celciusMoreInfo6Max} °`;
  celciusMoreInfo6Min = Math.round(response.data.daily[6].temp.min);
  document.querySelector("#info6-min").innerHTML = `${celciusMoreInfo6Min} °`;
  celciusMoreInfo6Percieved = Math.round(response.data.daily[6].feels_like.day);
  document.querySelector(
    "#info6-percieved"
  ).innerHTML = `${celciusMoreInfo6Percieved} °`;
  humidityDay6 = response.data.daily[6].humidity;
  document.querySelector("#info6-humidity").innerHTML = ` ${humidityDay6}`;
  windDay6 = response.data.daily[6].wind_speed;
  document.querySelector("#info6-wind").innerHTML = ` ${windDay6}`;

  let icon1 = response.data.daily[1].weather[0].icon;
  findIcon1(icon1);
  let icon2 = response.data.daily[2].weather[0].icon;
  findIcon2(icon2);
  let icon3 = response.data.daily[3].weather[0].icon;
  findIcon3(icon3);
  let icon4 = response.data.daily[4].weather[0].icon;
  findIcon4(icon4);
  let icon5 = response.data.daily[5].weather[0].icon;
  findIcon5(icon5);
  let icon6 = response.data.daily[6].weather[0].icon;
  findIcon6(icon6);
}

function reportCityWeatherMultiple(response) {
  celciusTomorrow = response.data.daily[1].temp.day;
  document.querySelector("#tomorrow-temperature").innerHTML = ` ${Math.round(
    celciusTomorrow
  )} °`;
  celciusMoreInfo1Max = Math.round(response.data.daily[1].temp.max);
  document.querySelector("#info1-max").innerHTML = `${celciusMoreInfo1Max} °`;
  celciusMoreInfo1Min = Math.round(response.data.daily[1].temp.min);
  document.querySelector("#info1-min").innerHTML = `${celciusMoreInfo1Min} °`;
  celciusMoreInfo1Percieved = Math.round(response.data.daily[1].feels_like.day);
  document.querySelector(
    "#info1-percieved"
  ).innerHTML = `${celciusMoreInfo1Percieved} °`;
  humidityTomorrow = response.data.daily[1].humidity;
  document.querySelector("#info1-humidity").innerHTML = ` ${humidityTomorrow}`;
  windTomorrow = response.data.daily[1].wind_speed;
  document.querySelector("#info1-wind").innerHTML = ` ${windTomorrow}`;

  celciusDay2 = response.data.daily[2].temp.day;
  document.querySelector("#second-day-temperature").innerHTML = ` ${Math.round(
    celciusDay2
  )} °`;
  celciusMoreInfo2Max = Math.round(response.data.daily[2].temp.max);
  document.querySelector("#info2-max").innerHTML = `${celciusMoreInfo2Max} °`;
  celciusMoreInfo2Min = Math.round(response.data.daily[2].temp.min);
  document.querySelector("#info2-min").innerHTML = `${celciusMoreInfo2Min} °`;
  celciusMoreInfo2Percieved = Math.round(response.data.daily[2].feels_like.day);
  document.querySelector(
    "#info2-percieved"
  ).innerHTML = `${celciusMoreInfo2Percieved} °`;
  humidityDay2 = response.data.daily[2].humidity;
  document.querySelector("#info2-humidity").innerHTML = ` ${humidityDay2}`;
  windDay2 = response.data.daily[2].wind_speed;
  document.querySelector("#info2-wind").innerHTML = ` ${windDay2}`;

  celciusDay3 = response.data.daily[3].temp.day;
  document.querySelector("#third-day-temperature").innerHTML = ` ${Math.round(
    celciusDay3
  )} °`;
  celciusMoreInfo3Max = Math.round(response.data.daily[3].temp.max);
  document.querySelector("#info3-max").innerHTML = `${celciusMoreInfo3Max} °`;
  celciusMoreInfo3Min = Math.round(response.data.daily[3].temp.min);
  document.querySelector("#info3-min").innerHTML = `${celciusMoreInfo3Min} °`;
  celciusMoreInfo3Percieved = Math.round(response.data.daily[3].feels_like.day);
  document.querySelector(
    "#info3-percieved"
  ).innerHTML = `${celciusMoreInfo3Percieved} °`;
  humidityDay3 = response.data.daily[3].humidity;
  document.querySelector("#info3-humidity").innerHTML = ` ${humidityDay3}`;
  windDay3 = response.data.daily[3].wind_speed;
  document.querySelector("#info3-wind").innerHTML = ` ${windDay3}`;

  celciusDay4 = response.data.daily[4].temp.day;
  document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(
    celciusDay4
  )} °`;
  celciusMoreInfo4Max = Math.round(response.data.daily[4].temp.max);
  document.querySelector("#info4-max").innerHTML = `${celciusMoreInfo4Max} °`;
  celciusMoreInfo4Min = Math.round(response.data.daily[4].temp.min);
  document.querySelector("#info4-min").innerHTML = `${celciusMoreInfo4Min} °`;
  celciusMoreInfo4Percieved = Math.round(response.data.daily[4].feels_like.day);
  document.querySelector(
    "#info4-percieved"
  ).innerHTML = `${celciusMoreInfo4Percieved} °`;
  humidityDay4 = response.data.daily[4].humidity;
  document.querySelector("#info4-humidity").innerHTML = ` ${humidityDay4}`;
  windDay4 = response.data.daily[4].wind_speed;
  document.querySelector("#info4-wind").innerHTML = ` ${windDay4}`;

  celciusDay5 = response.data.daily[5].temp.day;
  document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(
    celciusDay5
  )} °`;
  celciusMoreInfo5Max = Math.round(response.data.daily[5].temp.max);
  document.querySelector("#info5-max").innerHTML = `${celciusMoreInfo5Max} °`;
  celciusMoreInfo5Min = Math.round(response.data.daily[5].temp.min);
  document.querySelector("#info5-min").innerHTML = `${celciusMoreInfo5Min} °`;
  celciusMoreInfo5Percieved = Math.round(response.data.daily[5].feels_like.day);
  document.querySelector(
    "#info5-percieved"
  ).innerHTML = `${celciusMoreInfo5Percieved} °`;
  humidityDay5 = response.data.daily[5].humidity;
  document.querySelector("#info5-humidity").innerHTML = ` ${humidityDay5}`;
  windDay5 = response.data.daily[5].wind_speed;
  document.querySelector("#info5-wind").innerHTML = ` ${windDay5}`;

  celciusDay6 = response.data.daily[6].temp.day;
  document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(
    celciusDay6
  )} °`;
  celciusMoreInfo6Max = Math.round(response.data.daily[6].temp.max);
  document.querySelector("#info6-max").innerHTML = `${celciusMoreInfo6Max} °`;
  celciusMoreInfo6Min = Math.round(response.data.daily[6].temp.min);
  document.querySelector("#info6-min").innerHTML = `${celciusMoreInfo6Min} °`;
  celciusMoreInfo6Percieved = Math.round(response.data.daily[6].feels_like.day);
  document.querySelector(
    "#info6-percieved"
  ).innerHTML = `${celciusMoreInfo6Percieved} °`;
  humidityDay6 = response.data.daily[6].humidity;
  document.querySelector("#info6-humidity").innerHTML = ` ${humidityDay6}`;
  windDay6 = response.data.daily[6].wind_speed;
  document.querySelector("#info6-wind").innerHTML = ` ${windDay6}`;

  let icon1 = response.data.daily[1].weather[0].icon;
  findIcon1(icon1);
  let icon2 = response.data.daily[2].weather[0].icon;
  findIcon2(icon2);
  let icon3 = response.data.daily[3].weather[0].icon;
  findIcon3(icon3);
  let icon4 = response.data.daily[4].weather[0].icon;
  findIcon4(icon4);
  let icon5 = response.data.daily[5].weather[0].icon;
  findIcon5(icon5);
  let icon6 = response.data.daily[6].weather[0].icon;
  findIcon6(icon6);
}

let currentClass = "wi-cloud";
function findIcon(icon0) {
  document.getElementById("main-icon").classList.remove("wi", currentClass);
  currentClass = theIcons[icon0] || "wi-cloud";
  document.getElementById("main-icon").classList.add("wi", currentClass);

}

let classes1 = "wi-cloud";
function findIcon1(icon1) {
  document.getElementById("first-icon").classList.remove("wi", classes1);
  classes1 = theIcons[icon1] || "wi-cloud";
  document.getElementById("first-icon").classList.add( "wi", classes1);
}

let classes2 = "wi-cloud";
function findIcon2(icon2) {
  document.getElementById("second-icon").classList.remove("wi", classes2);
  classes2 = theIcons[icon2] || "wi wi-cloud";
  document.getElementById("second-icon").classList.add("wi", classes2);
}

let classes3 = "wi-cloud";
function findIcon3(icon3) {
  document.getElementById("third-icon").classList.remove("wi", classes3);
  classes3 = theIcons[icon3] || "wi wi-cloud";
  document.getElementById("third-icon").classList.add("wi", classes3);
}

let classes4 = "wi-cloud";
function findIcon4(icon4) {
  document.getElementById("fourth-icon").classList.remove("wi", classes4);
  classes4 = theIcons[icon4] || "wi wi-cloud";
  document.getElementById("fourth-icon").classList.add("wi", classes4);
}

let classes5 = "wi-cloud";
function findIcon5(icon5) {
  document.getElementById("fifth-icon").classList.remove("wi", classes5);
  classes5 = theIcons[icon5] || "wi wi-cloud";
  document.getElementById("fifth-icon").classList.add("wi", classes5);
}

let classes6 = "wi-cloud";
function findIcon6(icon6) {
  document.getElementById("sixth-icon").classList.remove("wi", classes6);
  classes6 = theIcons[icon6] || "wi wi-cloud";
  document.getElementById("sixth-icon").classList.add("wi", classes6);
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

}

let time = new Date();

function findDate(days) {
  let months = [
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
  ];
  let newDate = new Date(time);
  newDate.setDate(newDate.getDate() + days);
  setDayDate = newDate.getDate();
  setDayMonth = months[newDate.getMonth()];

  if (days == 2) {
    return (document.querySelector(
      "#day2"
    ).innerHTML = `${setDayDate} ${setDayMonth}`);
  }
  if (days == 3) {
    return (document.querySelector(
      "#day3"
    ).innerHTML = `${setDayDate} ${setDayMonth}`);
  }
  if (days == 4) {
    return (document.querySelector(
      "#day4"
    ).innerHTML = `${setDayDate} ${setDayMonth}`);
  }
  if (days == 5) {
    return (document.querySelector(
      "#day5"
    ).innerHTML = `${setDayDate} ${setDayMonth}`);
  }
  if (days == 6) {
    return (document.querySelector(
      "#day6"
    ).innerHTML = `${setDayDate} ${setDayMonth}`);
  }
}

findDate(2);
findDate(3);
findDate(4);
findDate(5);
findDate(6);

let isCelcius = true;

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


let percievedTemperature = null;
let celciusTomorrow = null;
let celciusDay2 = null;
let celciusDay3 = null;
let celciusDay4 = null;
let celciusDay5 = null;
let celciusDay6 = null;

let celciusMoreInfo1Max = null;
let celciusMoreInfo1Min = null;
let celciusMoreInfo1Percieved = null;
let celciusMoreInfo2Max = null;
let celciusMoreInfo2Min = null;
let celciusMoreInfo2Percieved = null;
let celciusMoreInfo3Max = null;
let celciusMoreInfo3Min = null;
let celciusMoreInfo3Percieved = null;
let celciusMoreInfo4Max = null;
let celciusMoreInfo4Min = null;
let celciusMoreInfo4Percieved = null;
let celciusMoreInfo5Max = null;
let celciusMoreInfo5Min = null;
let celciusMoreInfo5Percieved = null;
let celciusMoreInfo6Max = null;
let celciusMoreInfo6Min = null;
let celciusMoreInfo6Percieved = null;

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