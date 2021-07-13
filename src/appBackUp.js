


in convertFahrenheit


document.querySelector("#percieved").innerHTML = Math.round(
  percievedTemperature * 1.8 + 32
);

document.querySelector("#tomorrow-temperature").innerHTML = `${Math.round(
  celciusTomorrow * 1.8 + 32
)} °`;
document.querySelector("#second-day-temperature").innerHTML = `${Math.round(
  celciusDay2 * 1.8 + 32
)} °`;
document.querySelector("#third-day-temperature").innerHTML = `${Math.round(
  celciusDay3 * 1.8 + 32
)} °`;
document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(
  celciusDay4 * 1.8 + 32
)} °`;
document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(
  celciusDay5 * 1.8 + 32
)} °`;
document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(
  celciusDay6 * 1.8 + 32
)} °`;

document.querySelector("#info1-max").innerHTML = `${Math.round(
  celciusMoreInfo1Max * 1.8 + 32
)} °`;
document.querySelector("#info1-min").innerHTML = `${Math.round(
  celciusMoreInfo1Min * 1.8 + 32
)} °`;
document.querySelector("#info1-percieved").innerHTML = `${Math.round(
  celciusMoreInfo1Percieved * 1.8 + 32
)} °`;

document.querySelector("#info2-max").innerHTML = `${Math.round(
  celciusMoreInfo2Max * 1.8 + 32
)} °`;
document.querySelector("#info2-min").innerHTML = `${Math.round(
  celciusMoreInfo2Min * 1.8 + 32
)} °`;
document.querySelector("#info2-percieved").innerHTML = `${Math.round(
  celciusMoreInfo2Percieved * 1.8 + 32
)} °`;

document.querySelector("#info3-max").innerHTML = `${Math.round(
  celciusMoreInfo3Max * 1.8 + 32
)} °`;
document.querySelector("#info3-min").innerHTML = `${Math.round(
  celciusMoreInfo3Min * 1.8 + 32
)} °`;
document.querySelector("#info3-percieved").innerHTML = `${Math.round(
  celciusMoreInfo3Percieved * 1.8 + 32
)} °`;

document.querySelector("#info4-max").innerHTML = `${Math.round(
  celciusMoreInfo4Max * 1.8 + 32
)} °`;
document.querySelector("#info4-min").innerHTML = `${Math.round(
  celciusMoreInfo4Min * 1.8 + 32
)} °`;
document.querySelector("#info4-percieved").innerHTML = `${Math.round(
  celciusMoreInfo4Percieved * 1.8 + 32
)} °`;

document.querySelector("#info5-max").innerHTML = `${Math.round(
  celciusMoreInfo5Max * 1.8 + 32
)} °`;
document.querySelector("#info5-min").innerHTML = `${Math.round(
  celciusMoreInfo5Min * 1.8 + 32
)} °`;
document.querySelector("#info5-percieved").innerHTML = `${Math.round(
  celciusMoreInfo5Percieved * 1.8 + 32
)} °`;

document.querySelector("#info6-max").innerHTML = `${Math.round(
  celciusMoreInfo6Max * 1.8 + 32
)} °`;
document.querySelector("#info6-min").innerHTML = `${Math.round(
  celciusMoreInfo6Min * 1.8 + 32
)} °`;
document.querySelector("#info6-percieved").innerHTML = `${Math.round(
  celciusMoreInfo6Percieved * 1.8 + 32
)} °`;




convertCelcius

document.querySelector("#percieved").innerHTML = percievedTemperature;

  document.querySelector("#tomorrow-temperature").innerHTML = `${Math.round(
    celciusTomorrow
  )} °`;
  document.querySelector("#info1-max").innerHTML = `${Math.round(
    celciusMoreInfo1Max
  )} °`;
  document.querySelector("#info1-min").innerHTML = `${Math.round(
    celciusMoreInfo1Min
  )} °`;
  document.querySelector("#info1-percieved").innerHTML = `${Math.round(
    celciusMoreInfo1Percieved
  )} °`;

  document.querySelector("#second-day-temperature").innerHTML = `${Math.round(
    celciusDay2
  )} °`;
  document.querySelector("#info2-max").innerHTML = `${Math.round(
    celciusMoreInfo2Max
  )} °`;
  document.querySelector("#info2-min").innerHTML = `${Math.round(
    celciusMoreInfo2Min
  )} °`;
  document.querySelector("#info2-percieved").innerHTML = `${Math.round(
    celciusMoreInfo2Percieved
  )} °`;

  document.querySelector("#third-day-temperature").innerHTML = `${Math.round(
    celciusDay3
  )} °`;
  document.querySelector("#info3-max").innerHTML = `${Math.round(
    celciusMoreInfo3Max
  )} °`;
  document.querySelector("#info3-min").innerHTML = `${Math.round(
    celciusMoreInfo3Min
  )} °`;
  document.querySelector("#info3-percieved").innerHTML = `${Math.round(
    celciusMoreInfo3Percieved
  )} °`;

  document.querySelector("#fourth-day-temperature").innerHTML = `${Math.round(
    celciusDay4
  )} °`;
  document.querySelector("#info4-max").innerHTML = `${Math.round(
    celciusMoreInfo4Max
  )} °`;
  document.querySelector("#info4-min").innerHTML = `${Math.round(
    celciusMoreInfo4Min
  )} °`;
  document.querySelector("#info4-percieved").innerHTML = `${Math.round(
    celciusMoreInfo4Percieved
  )} °`;

  document.querySelector("#fifth-day-temperature").innerHTML = `${Math.round(
    celciusDay5
  )} °`;
  document.querySelector("#info5-max").innerHTML = `${Math.round(
    celciusMoreInfo5Max
  )} °`;
  document.querySelector("#info5-min").innerHTML = `${Math.round(
    celciusMoreInfo5Min
  )} °`;
  document.querySelector("#info5-percieved").innerHTML = `${Math.round(
    celciusMoreInfo5Percieved
  )} °`;

  document.querySelector("#sixth-day-temperature").innerHTML = `${Math.round(
    celciusDay6
  )} °`;
  document.querySelector("#info6-max").innerHTML = `${Math.round(
    celciusMoreInfo6Max
  )} °`;
  document.querySelector("#info6-min").innerHTML = `${Math.round(
    celciusMoreInfo6Min
  )} °`;
  document.querySelector("#info6-percieved").innerHTML = `${Math.round(
    celciusMoreInfo6Percieved
  )} °`;

    document.querySelector("#hour1-forecast").innerHTML = `${Math.round(
      hourlyCelcius
    )} °`;






reportCityWeatherMultipleFahrenheit

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