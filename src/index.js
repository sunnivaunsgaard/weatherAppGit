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

function findTimeStamp(response) {
  let nowTime = new Date(response.data.hourly[0].dt * 1000);
  let hour1 = nowTime.getHours();
  if (hour1 < 10) {
    hour1 = `0${hour1}`;
  }
  document.querySelector("#hour1").innerHTML = `${hour1}:00`;

  let nowTime1 = new Date(response.data.hourly[1].dt * 1000);
  let hour2 = nowTime1.getHours();
  if (hour2 < 10) {
    hour2 = `0${hour2}`;
  }
  document.querySelector("#hour2").innerHTML = `${hour2}:00`;

  let nowTime2 = new Date(response.data.hourly[2].dt * 1000);
  let hour3 = nowTime2.getHours();
  if (hour3 < 10) {
    hour3 = `0${hour3}`;
  }
  document.querySelector("#hour3").innerHTML = `${hour3}:00`;

  let nowTime3 = new Date(response.data.hourly[3].dt * 1000);
  let hour4 = nowTime3.getHours();
  if (hour4 < 10) {
    hour4 = `0${hour4}`;
  }
  document.querySelector("#hour4").innerHTML = `${hour4}:00`;

  let nowTime4 = new Date(response.data.hourly[4].dt * 1000);
  let hour5 = nowTime4.getHours();
  if (hour5 < 10) {
    hour5 = `0${hour5}`;
  }
  document.querySelector("#hour5").innerHTML = `${hour5}:00`;

  let nowTime5 = new Date(response.data.hourly[5].dt * 1000);
  let hour6 = nowTime5.getHours();
  if (hour6 < 10) {
    hour6 = `0${hour6}`;
  }
  document.querySelector("#hour6").innerHTML = `${hour6}:00`;

  let nowTime6 = new Date(response.data.hourly[6].dt * 1000);
  let hour7 = nowTime6.getHours();
  if (hour7 < 10) {
    hour7 = `0${hour7}`;
  }
  document.querySelector("#hour7").innerHTML = `${hour7}:00`;

  let nowTime7 = new Date(response.data.hourly[7].dt * 1000);
  let hour8 = nowTime7.getHours();
  if (hour8 < 10) {
    hour8 = `0${hour8}`;
  }
  document.querySelector("#hour8").innerHTML = `${hour8}:00`;

  let nowTime8 = new Date(response.data.hourly[8].dt * 1000);
  let hour9 = nowTime8.getHours();
  if (hour9 < 10) {
    hour9 = `0${hour9}`;
  }
  document.querySelector("#hour9").innerHTML = `${hour9}:00`;

  let nowTime9 = new Date(response.data.hourly[9].dt * 1000);
  let hour10 = nowTime9.getHours();
  if (hour10 < 10) {
    hour10 = `0${hour10}`;
  }
  document.querySelector("#hour10").innerHTML = `${hour10}:00`;

  let nowTime10 = new Date(response.data.hourly[10].dt * 1000);
  let hour11 = nowTime10.getHours();
  if (hour11 < 10) {
    hour11 = `0${hour11}`;
  }
  document.querySelector("#hour11").innerHTML = `${hour11}:00`;

  let nowTime11 = new Date(response.data.hourly[11].dt * 1000);
  let hour12 = nowTime11.getHours();
  if (hour12 < 10) {
    hour12 = `0${hour12}`;
  }
  document.querySelector("#hour12").innerHTML = `${hour12}:00`;

  let nowTime12 = new Date(response.data.hourly[12].dt * 1000);
  let hour13 = nowTime12.getHours();
  if (hour13 < 10) {
    hour13 = `0${hour13}`;
  }
  document.querySelector("#hour13").innerHTML = `${hour13}:00`;

  let nowTime13 = new Date(response.data.hourly[13].dt * 1000);
  let hour14 = nowTime13.getHours();
  if (hour14 < 10) {
    hour14 = `0${hour14}`;
  }
  document.querySelector("#hour14").innerHTML = `${hour14}:00`;

  let nowTime14 = new Date(response.data.hourly[14].dt * 1000);
  let hour15 = nowTime14.getHours();
  if (hour15 < 10) {
    hour15 = `0${hour15}`;
  }
  document.querySelector("#hour15").innerHTML = `${hour15}:00`;

  let nowTime15 = new Date(response.data.hourly[15].dt * 1000);
  let hour16 = nowTime15.getHours();
  if (hour16 < 10) {
    hour16 = `0${hour16}`;
  }
  document.querySelector("#hour16").innerHTML = `${hour16}:00`;

  let nowTime16 = new Date(response.data.hourly[16].dt * 1000);
  let hour17 = nowTime16.getHours();
  if (hour17 < 10) {
    hour17 = `0${hour17}`;
  }
  document.querySelector("#hour17").innerHTML = `${hour17}:00`;

  let nowTime17 = new Date(response.data.hourly[17].dt * 1000);
  let hour18 = nowTime17.getHours();
  if (hour18 < 10) {
    hour18 = `0${hour18}`;
  }
  document.querySelector("#hour18").innerHTML = `${hour18}:00`;

  let nowTime18 = new Date(response.data.hourly[18].dt * 1000);
  let hour19 = nowTime18.getHours();
  if (hour19 < 10) {
    hour19 = `0${hour19}`;
  }
  document.querySelector("#hour19").innerHTML = `${hour19}:00`;

  let nowTime19 = new Date(response.data.hourly[19].dt * 1000);
  let hour20 = nowTime19.getHours();
  if (hour20 < 10) {
    hour20 = `0${hour20}`;
  }
  document.querySelector("#hour20").innerHTML = `${hour20}:00`;

  let nowTime20 = new Date(response.data.hourly[20].dt * 1000);
  let hour21 = nowTime20.getHours();
  if (hour21 < 10) {
    hour21 = `0${hour21}`;
  }
  document.querySelector("#hour21").innerHTML = `${hour21}:00`;

  let nowTime21 = new Date(response.data.hourly[21].dt * 1000);
  let hour22 = nowTime21.getHours();
  if (hour22 < 10) {
    hour22 = `0${hour22}`;
  }
  document.querySelector("#hour22").innerHTML = `${hour22}:00`;

  let nowTime22 = new Date(response.data.hourly[22].dt * 1000);
  let hour23 = nowTime22.getHours();
  if (hour23 < 10) {
    hour23 = `0${hour23}`;
  }
  document.querySelector("#hour23").innerHTML = `${hour23}:00`;

  let nowTime23 = new Date(response.data.hourly[23].dt * 1000);
  let hour24 = nowTime23.getHours();
  if (hour24 < 10) {
    hour24 = `0${hour24}`;
  }
  document.querySelector("#hour24").innerHTML = `${hour24}:00`;
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

function extractPosition(response) {
  let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
  let latitude = `lat=${response.data.coord.lat}`;
  let longitude = `&lon=${response.data.coord.lon}`;
  let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
  let apiUrl = `${apiHolder}${latitude}${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reportCityWeatherMultiple);
  axios.get(apiUrl).then(findTimeStamp);
  axios.get(apiUrl).then(findHourlyDegrees);
  axios.get(apiUrl).then(findHourlyIcons);
}


function reportCityWeather(response) {
  document.querySelector("#current-city").innerHTML =
    response.data.name.toUpperCase();
  document.querySelector("#degrees-city").innerHTML = Math.round(response.data.main.temp);
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


function reportCityWeatherMultiple(response) {
  celciusTomorrow = response.data.daily[1].temp.day;
  document.querySelector("#tomorrow-temperature").innerHTML = ` ${Math.round(celciusTomorrow)} °`;
  celciusDay2 = response.data.daily[2].temp.day;
  document.querySelector("#second-day-temperature").innerHTML = ` ${Math.round(celciusDay2)} °`;
  celciusDay3 = response.data.daily[3].temp.day;
  document.querySelector("#third-day-temperature").innerHTML = ` ${Math.round(celciusDay3)} °`; 
  celciusDay4 = response.data.daily[4].temp.day;
  document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(celciusDay4)} °`;
 celciusDay5 = response.data.daily[5].temp.day;
  document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(celciusDay5)} °`;
  celciusDay6 = response.data.daily[6].temp.day;
  document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(celciusDay6)} °`;

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
function findIcon(icon) {

  document.getElementById("main-icon").classList.remove("wi", currentClass);
  currentClass = icons[icon] || "wi-cloud";
  document.getElementById("main-icon").classList.add("wi", currentClass);
}

let classes1 = "wi-cloud";
function findIcon1(icon1) {
  document.getElementById("first-icon").classList.remove("wi", classes1);
  classes1 = icons[icon1] || "wi-cloud";
  document.getElementById("first-icon").classList.add("wi", classes1);
}

let classes2 = "wi-cloud";
function findIcon2(icon2) {
  document.getElementById("second-icon").classList.remove("wi", classes2);
  classes2 = icons[icon2] || "wi-cloud";
  document.getElementById("second-icon").classList.add("wi", classes2);
}

let classes3 = "wi-cloud";
function findIcon3(icon3) {
  document.getElementById("third-icon").classList.remove("wi", classes3);
  classes3 = icons[icon3] || "wi-cloud";
  document.getElementById("third-icon").classList.add("wi", classes3);
}

let classes4 = "wi-cloud";
function findIcon4(icon4) {
  document.getElementById("fourth-icon").classList.remove("wi", classes4);
  classes4 = icons[icon4] || "wi-cloud";
  document.getElementById("fourth-icon").classList.add("wi", classes4);
}

let classes5 = "wi-cloud";
function findIcon5(icon5) {

  document.getElementById("fifth-icon").classList.remove("wi", classes5);
  classes5 = icons[icon5] || "wi-cloud";
  document.getElementById("fifth-icon").classList.add("wi", classes5);
}

let classes6 = "wi-cloud";
function findIcon6(icon6) {
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
  let removeText = document.querySelector("#weather-description");
  removeText.innerHTML = " ";
  let newText = document.querySelector("#current-city");
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
  axios.get(apiUrl).then(findTimeStamp);
  axios.get(apiUrl).then(findHourlyDegrees);
  axios.get(apiUrl).then(findHourlyIcons);
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

  let maximum= document.querySelector("#max");
  let temperatureMax = maximum.innerHTML
  temperatureMax = Number(temperatureMax);
  let fahrenheitMax = Math.round(temperatureMax * 1.8 + 32);
  let minimum = document.querySelector("#min");
  let temperatureMin = minimum.innerHTML;
  temperatureMin = Number(temperatureMin);
  let fahrenheitMin = Math.round(temperatureMin * 1.8 + 32);
  maximum.innerHTML = `${fahrenheitMax} `;
  minimum.innerHTML = `${fahrenheitMin} `;

  document.querySelector("#percieved").innerHTML= Math.round(percievedTemperature * 1.8 +32);

document.querySelector("#tomorrow-temperature").innerHTML = `${Math.round(celciusTomorrow * 1.8 + 32)} °`; 
document.querySelector("#second-day-temperature").innerHTML =`${Math.round(celciusDay2 * 1.8 + 32)} °`; 
document.querySelector("#third-day-temperature").innerHTML = `${Math.round(celciusDay3 * 1.8 + 32)} °`;  
document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(celciusDay4 * 1.8 + 32)} °`; 
document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(celciusDay5 * 1.8 + 32)} °`; 
document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(celciusDay6 * 1.8 + 32)} °`; 

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

   document.querySelector("#percieved").innerHTML = percievedTemperature; 
   document.querySelector("#tomorrow-temperature").innerHTML = `${Math.round(
     celciusTomorrow
   )} °`;
   document.querySelector("#second-day-temperature").innerHTML = `${Math.round(
     celciusDay2
   )} °`;
   document.querySelector("#third-day-temperature").innerHTML = `${Math.round(
     celciusDay3
   )} °`;
   document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(
     celciusDay4
   )} °`;
   document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(
     celciusDay5
   )} °`;
   document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(
     celciusDay6
   )} °`; 
}
function findHourlyDegrees(response) {
  let hour1 = Math.round(response.data.hourly[0].temp);
  document.querySelector("#hour1-forecast").innerHTML = `${hour1} °C`;

  let hour2 = Math.round(response.data.hourly[1].temp);
  document.querySelector("#hour2-forecast").innerHTML = `${hour2} °C`;

  let hour3 = Math.round(response.data.hourly[2].temp);
  document.querySelector("#hour3-forecast").innerHTML = `${hour3} °C`;

  let hour4 = Math.round(response.data.hourly[3].temp);
  document.querySelector("#hour4-forecast").innerHTML = `${hour4} °C`;

  let hour5 = Math.round(response.data.hourly[4].temp);
  document.querySelector("#hour5-forecast").innerHTML = `${hour5} °C`;

  let hour6 = Math.round(response.data.hourly[5].temp);
  document.querySelector("#hour6-forecast").innerHTML = `${hour6} °C`;

  let hour7 = Math.round(response.data.hourly[6].temp);
  document.querySelector("#hour7-forecast").innerHTML = `${hour7} °C`;

  let hour8 = Math.round(response.data.hourly[7].temp);
  document.querySelector("#hour8-forecast").innerHTML = `${hour8} °C`;

  let hour9 = Math.round(response.data.hourly[8].temp);
  document.querySelector("#hour9-forecast").innerHTML = `${hour9} °C`;

  let hour10 = Math.round(response.data.hourly[9].temp);
  document.querySelector("#hour10-forecast").innerHTML = `${hour10} °C`;

  let hour11 = Math.round(response.data.hourly[11].temp);
  document.querySelector("#hour11-forecast").innerHTML = `${hour11} °C`;

  let hour12 = Math.round(response.data.hourly[11].temp);
  document.querySelector("#hour12-forecast").innerHTML = `${hour12} °C`;

  let hour13 = Math.round(response.data.hourly[12].temp);
  document.querySelector("#hour13-forecast").innerHTML = `${hour13} °C`;

  let hour14 = Math.round(response.data.hourly[13].temp);
  document.querySelector("#hour14-forecast").innerHTML = `${hour14} °C`;

  let hour15 = Math.round(response.data.hourly[14].temp);
  document.querySelector("#hour15-forecast").innerHTML = `${hour15} °C`;

  let hour16 = Math.round(response.data.hourly[15].temp);
  document.querySelector("#hour16-forecast").innerHTML = `${hour16} °C`;

  let hour17 = Math.round(response.data.hourly[16].temp);
  document.querySelector("#hour17-forecast").innerHTML = `${hour17} °C`;

  let hour18 = Math.round(response.data.hourly[17].temp);
  document.querySelector("#hour18-forecast").innerHTML = `${hour18} °C`;

  let hour19 = Math.round(response.data.hourly[18].temp);
  document.querySelector("#hour19-forecast").innerHTML = `${hour19} °C`;

  let hour20 = Math.round(response.data.hourly[19].temp);
  document.querySelector("#hour20-forecast").innerHTML = `${hour20} °C`;

  let hour21 = Math.round(response.data.hourly[20].temp);
  document.querySelector("#hour21-forecast").innerHTML = `${hour21} °C`;

  let hour22 = Math.round(response.data.hourly[21].temp);
  document.querySelector("#hour22-forecast").innerHTML = `${hour22} °C`;

  let hour23 = Math.round(response.data.hourly[22].temp);
  document.querySelector("#hour23-forecast").innerHTML = `${hour23} °C`;

  let hour24 = Math.round(response.data.hourly[23].temp);
  document.querySelector("#hour24-forecast").innerHTML = `${hour24} °C`;
}

function findHourlyIcons(response) {
  let hourlyIcon1 = response.data.hourly[0].weather[0].icon;
  hourlyIcons1(hourlyIcon1);

  let hourlyIcon2 = response.data.hourly[1].weather[0].icon;
  hourlyIcons2(hourlyIcon2);

  let hourlyIcon3 = response.data.hourly[2].weather[0].icon;
  hourlyIcons3(hourlyIcon3);

  let hourlyIcon4 = response.data.hourly[3].weather[0].icon;
  hourlyIcons4(hourlyIcon4);

  let hourlyIcon5 = response.data.hourly[4].weather[0].icon;
  hourlyIcons5(hourlyIcon5);

  let hourlyIcon6 = response.data.hourly[5].weather[0].icon;
  hourlyIcons6(hourlyIcon6);

  let hourlyIcon7 = response.data.hourly[6].weather[0].icon;
  hourlyIcons7(hourlyIcon7);

  let hourlyIcon8 = response.data.hourly[7].weather[0].icon;
  hourlyIcons8(hourlyIcon8);

  let hourlyIcon9 = response.data.hourly[8].weather[0].icon;
  hourlyIcons9(hourlyIcon9);

  let hourlyIcon10 = response.data.hourly[9].weather[0].icon;
  hourlyIcons10(hourlyIcon10);

  let hourlyIcon11 = response.data.hourly[10].weather[0].icon;
  hourlyIcons11(hourlyIcon11);

  let hourlyIcon12 = response.data.hourly[11].weather[0].icon;
  hourlyIcons12(hourlyIcon12);

  let hourlyIcon13 = response.data.hourly[12].weather[0].icon;
  hourlyIcons13(hourlyIcon13);

  let hourlyIcon14 = response.data.hourly[13].weather[0].icon;
  hourlyIcons14(hourlyIcon14);

  let hourlyIcon15 = response.data.hourly[14].weather[0].icon;
  hourlyIcons15(hourlyIcon15);

  let hourlyIcon16 = response.data.hourly[15].weather[0].icon;
  hourlyIcons16(hourlyIcon16);

  let hourlyIcon17 = response.data.hourly[16].weather[0].icon;
  hourlyIcons17(hourlyIcon17);

  let hourlyIcon18 = response.data.hourly[17].weather[0].icon;
  hourlyIcons18(hourlyIcon18);

  let hourlyIcon19 = response.data.hourly[18].weather[0].icon;
  hourlyIcons19(hourlyIcon19);

  let hourlyIcon20 = response.data.hourly[19].weather[0].icon;
  hourlyIcons20(hourlyIcon20);

  let hourlyIcon21 = response.data.hourly[20].weather[0].icon;
  hourlyIcons21(hourlyIcon21);

  let hourlyIcon22 = response.data.hourly[21].weather[0].icon;
  hourlyIcons22(hourlyIcon22);

  let hourlyIcon23 = response.data.hourly[22].weather[0].icon;
  hourlyIcons23(hourlyIcon23);

  let hourlyIcon24 = response.data.hourly[23].weather[0].icon;
  hourlyIcons24(hourlyIcon24);
}

let spareClass1 = "wi-cloud";
function hourlyIcons1(hourlyIcon1) {
  document.getElementById("hourly-icon1").classList.remove("wi", spareClass1);
  spareClass1 = icons[hourlyIcon1] || "wi-cloud";
  document.getElementById("hourly-icon1").classList.add("wi", spareClass1);
}

let spareClass2 = "wi-cloud";
function hourlyIcons2(hourlyIcon2) {
  document.getElementById("hourly-icon2").classList.remove("wi", spareClass2);
  spareClass2 = icons[hourlyIcon2] || "wi-cloud";
  document.getElementById("hourly-icon2").classList.add("wi", spareClass2);
}

let spareClass3 = "wi-cloud";
function hourlyIcons3(hourlyIcon3) {
  document.getElementById("hourly-icon3").classList.remove("wi", spareClass3);
  spareClass3 = icons[hourlyIcon3] || "wi-cloud";
  document.getElementById("hourly-icon3").classList.add("wi", spareClass3);
}

let spareClass4 = "wi-cloud";
function hourlyIcons4(hourlyIcon4) {
  document.getElementById("hourly-icon4").classList.remove("wi", spareClass4);
  spareClass4 = icons[hourlyIcon4] || "wi-cloud";
  document.getElementById("hourly-icon4").classList.add("wi", spareClass4);
}

let spareClass5 = "wi-cloud";
function hourlyIcons5(hourlyIcon5) {
  document.getElementById("hourly-icon5").classList.remove("wi", spareClass5);
  spareClass5 = icons[hourlyIcon5] || "wi-cloud";
  document.getElementById("hourly-icon5").classList.add("wi", spareClass5);
}

let spareClass6 = "wi-cloud";
function hourlyIcons6(hourlyIcon6) {
  document.getElementById("hourly-icon6").classList.remove("wi", spareClass6);
  spareClass6 = icons[hourlyIcon6] || "wi-cloud";
  document.getElementById("hourly-icon6").classList.add("wi", spareClass6);
}

let spareClass7 = "wi-cloud";
function hourlyIcons7(hourlyIcon7) {

  document.getElementById("hourly-icon7").classList.remove("wi", spareClass7);
  spareClass7 = icons[hourlyIcon7] || "wi-cloud";
  document.getElementById("hourly-icon7").classList.add("wi", spareClass7);
}

let spareClass8 = "wi-cloud";
function hourlyIcons8(hourlyIcon8) {
  document.getElementById("hourly-icon8").classList.remove("wi", spareClass8);
  spareClass8 = icons[hourlyIcon8] || "wi-cloud";
  document.getElementById("hourly-icon8").classList.add("wi", spareClass8);
}

let spareClass9 = "wi-cloud";
function hourlyIcons9(hourlyIcon9) {
  document.getElementById("hourly-icon9").classList.remove("wi", spareClass9);
  spareClass9 = icons[hourlyIcon9] || "wi-cloud";
  document.getElementById("hourly-icon9").classList.add("wi", spareClass9);
}

let spareClass10 = "wi-cloud";
function hourlyIcons10(hourlyIcon10) {
  document.getElementById("hourly-icon10").classList.remove("wi", spareClass10);
  spareClass10 = icons[hourlyIcon10] || "wi-cloud";
  document.getElementById("hourly-icon10").classList.add("wi", spareClass10);
}

let spareClass11 = "wi-cloud";
function hourlyIcons11(hourlyIcon11) {
  document.getElementById("hourly-icon11").classList.remove("wi", spareClass11);
  spareClass11 = icons[hourlyIcon11] || "wi-cloud";
  document.getElementById("hourly-icon11").classList.add("wi", spareClass11);
}

let spareClass12 = "wi-cloud";
function hourlyIcons12(hourlyIcon12) {
  document.getElementById("hourly-icon12").classList.remove("wi", spareClass12);
  spareClass12 = icons[hourlyIcon12] || "wi-cloud";
  document.getElementById("hourly-icon12").classList.add("wi", spareClass12);
}

let spareClass13 = "wi-cloud";
function hourlyIcons13(hourlyIcon13) {
  document.getElementById("hourly-icon13").classList.remove("wi", spareClass13);
  spareClass13 = icons[hourlyIcon13] || "wi-cloud";
  document.getElementById("hourly-icon13").classList.add("wi", spareClass13);
}

let spareClass14 = "wi-cloud";
function hourlyIcons14(hourlyIcon14) {
  document.getElementById("hourly-icon14").classList.remove("wi", spareClass14);
  spareClass14 = icons[hourlyIcon14] || "wi-cloud";
  document.getElementById("hourly-icon14").classList.add("wi", spareClass14);
}

let spareClass15 = "wi-cloud";
function hourlyIcons15(hourlyIcon15) {
  document.getElementById("hourly-icon15").classList.remove("wi", spareClass15);
  spareClass15 = icons[hourlyIcon15] || "wi-cloud";
  document.getElementById("hourly-icon15").classList.add("wi", spareClass15);
}

let spareClass16 = "wi-cloud";
function hourlyIcons16(hourlyIcon16) {
  document.getElementById("hourly-icon16").classList.remove("wi", spareClass16);
  spareClass16 = icons[hourlyIcon16] || "wi-cloud";
  document.getElementById("hourly-icon16").classList.add("wi", spareClass16);
}

let spareClass17 = "wi-cloud";
function hourlyIcons17(hourlyIcon17) {
  document.getElementById("hourly-icon17").classList.remove("wi", spareClass17);
  spareClass17 = icons[hourlyIcon17] || "wi-cloud";
  document.getElementById("hourly-icon17").classList.add("wi", spareClass17);
}

let spareClass18 = "wi-cloud";
function hourlyIcons18(hourlyIcon18) {
  document.getElementById("hourly-icon18").classList.remove("wi", spareClass18);
  spareClass18 = icons[hourlyIcon18] || "wi-cloud";
  document.getElementById("hourly-icon18").classList.add("wi", spareClass18);
}

let spareClass19 = "wi-cloud";
function hourlyIcons19(hourlyIcon19) {
  document.getElementById("hourly-icon19").classList.remove("wi", spareClass19);
  spareClass19 = icons[hourlyIcon19] || "wi-cloud";
  document.getElementById("hourly-icon19").classList.add("wi", spareClass19);
}

let spareClass20 = "wi-cloud";
function hourlyIcons20(hourlyIcon20) {
  document.getElementById("hourly-icon20").classList.remove("wi", spareClass20);
  spareClass20 = icons[hourlyIcon20] || "wi-cloud";
  document.getElementById("hourly-icon20").classList.add("wi", spareClass20);
}

let spareClass21 = "wi-cloud";
function hourlyIcons21(hourlyIcon21) {
  document.getElementById("hourly-icon21").classList.remove("wi", spareClass21);
  spareClass21 = icons[hourlyIcon21] || "wi-cloud";
  document.getElementById("hourly-icon21").classList.add("wi", spareClass21);
}

let spareClass22 = "wi-cloud";
function hourlyIcons22(hourlyIcon22) {
  document.getElementById("hourly-icon22").classList.remove("wi", spareClass22);
  spareClass22 = icons[hourlyIcon22] || "wi-cloud";
  document.getElementById("hourly-icon22").classList.add("wi", spareClass22);
}

let spareClass23 = "wi-cloud";
function hourlyIcons23(hourlyIcon23) {
  document.getElementById("hourly-icon23").classList.remove("wi", spareClass23);
  spareClass23 = icons[hourlyIcon23] || "wi-cloud";
  document.getElementById("hourly-icon23").classList.add("wi", spareClass23);
}

let spareClass24 = "wi-cloud";
function hourlyIcons24(hourlyIcon24) {
  document.getElementById("hourly-icon24").classList.remove("wi", spareClass24);
  spareClass24 = icons[hourlyIcon24] || "wi-cloud";
  document.getElementById("hourly-icon24").classList.add("wi", spareClass24);
}

let time = new Date();

function findDate(days) {
  let months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "November",
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
let apiKey = `81bf8dd320f01a5acdd432f8343859e1`;
let currentLat = `lat=63.4305`;
let currentLon = `&lon=10.3951`;
let apiHolder = `https://api.openweathermap.org/data/2.5/onecall?`;
let apiUrl = `${apiHolder}${currentLat}${currentLon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(reportCityWeatherMultiple);
axios.get(apiUrl).then(findTimeStamp);
axios.get(apiUrl).then(findHourlyDegrees);
axios.get(apiUrl).then(findHourlyIcons);

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

let percievedTemperature = null; 
let celciusTomorrow = null; 
let celciusDay2 = null;
let celciusDay3 = null;
let celciusDay4 = null;
let celciusDay5 = null;
let celciusDay6 = null;


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
