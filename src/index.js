import "./style.css";
import { autocomplete } from "./autocomplete";

const BING = process.env.BING_API;
const WEATHER = process.env.WEATHER_API;

const city = "Ostrava";

// main function, retrieves all data based on user input
const submitCity = async () => {
  const geolocation = await getGeolocation(citySelect.value);
  const weatherData = await getWeatherData(geolocation.lat, geolocation.lon);
  addTodayWeatherData(
    geolocation.name,
    geolocation.state,
    weatherData.temp,
    weatherData.wind,
    weatherData.humidity,
    weatherData.icon
  );
  getBackgroundImage(geolocation.name);
  citySelect.value = "";
};

// retrieves weather data
const getWeatherData = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER}`,
    { mode: "cors" }
  );
  const data = await response.json();

  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const icon = data.weather[0].icon;

  return { temp, wind, humidity, icon };
};

// updates weather data in DOM
const addTodayWeatherData = (city, state, temp, wind, humidity, iconData) => {
  const outputCity = document.getElementById("output-city");
  const outputState = document.getElementById("output-state");
  const outputTemp = document.getElementById("output-temp");
  const outputWind = document.getElementById("output-wind");
  const outputHumidity = document.getElementById("output-humidity");
  const outputIcon = document.getElementById("today-icon");

  const icon = `<img src="https://openweathermap.org/img/wn/${iconData}@2x.png" alt="weather icon"/>`;

  outputCity.textContent = city;
  outputState.textContent = state;
  outputTemp.textContent = temp;
  outputWind.textContent = wind;
  outputHumidity.textContent = humidity;
  outputIcon.innerHTML = icon;
};

const addFutureWeatherData = (dayName, dayTemp, dayHumid, dayWind, dayIcon) => {
  const days = document.getElementsByClassName("day");
  for (let i = 0; i < days.length; i++) {
    days[i].childNodes.forEach((item) => {
      if (item.nodeType == 3) return;
      if (item.classList.contains("day-name")) {
        item.textContent = dayName;
      } else if (item.classList.contains("day-temp")) {
        item.textContent = dayTemp + " °C";
      } else if (item.classList.contains("day-humid")) {
        item.textContent = dayHumid + " %";
      } else if (item.classList.contains("day-wind")) {
        item.textContent = dayWind + " km/h";
      } else if (item.classList.contains("day-icon")) {
        item.innerHTML = dayIcon;
      } else {
        console.log(item);
      }
    });
  }
};

addFutureWeatherData("Monday", "23", "78", "23", "");

// retrieves background image based on given city
const getBackgroundImage = async (city) => {
  const response = await fetch(
    `https://bing-image-search1.p.rapidapi.com/images/search?q=${city}&count=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": BING,
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );

  if (await response.ok) {
    const imagesData = await response.json();
    addCityImageToDOM(imagesData.value[0].contentUrl);
  } else {
    // free api for when bing api runs out of calls
    const response = await fetch(
      `https://imsea.herokuapp.com/api/1?q=${city}`,
      {
        mode: "cors",
      }
    );

    const imagesData = await response.json();
    addCityImageToDOM(imagesData.value[0].contentUrl);
  }
};

// sets city image as a background
const addCityImageToDOM = (data) => {
  const cityImageURL = data;
  document.getElementById(
    "bg-blur"
  ).style.backgroundImage = `url('${cityImageURL}')`;
  document.querySelector(
    "section"
  ).style.backgroundImage = `url('${cityImageURL}')`;
};

// adds a listener to user city input
const citySelect = document.getElementById("city-input");
const inputForm = document.getElementById("city-form");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitCity();
});

// retrieves geolocation data based on given city
const getGeolocation = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${WEATHER}`,
    { mode: "cors" }
  );
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  const geolocation = (await response.json())[0];
  const name = geolocation.name;
  const state = regionNamesInEnglish.of(geolocation.country);
  const lat = geolocation.lat;
  const lon = geolocation.lon;
  return { name, state, lat, lon };
};

// activate autocomplete
autocomplete(citySelect);

// default script
getBackgroundImage(city);
const geolocation = getGeolocation(city);
geolocation.then((gData) => {
  const wData = getWeatherData(gData.lat, gData.lon);
  wData.then((dat) => {
    addTodayWeatherData(
      gData.name,
      gData.state,
      dat.temp,
      dat.wind,
      dat.humidity,
      dat.icon
    );
  });
});
