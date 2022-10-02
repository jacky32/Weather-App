import "./style.css";
import { autocomplete } from "./autocomplete";

const WEATHER_API_KEY = "3a6f70508651c854d613ffe499c8360a";
const lat = "49.820923";
const lon = "18.262524";
const city = "Ostrava,Poruba";

const getWeatherData = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
    { mode: "cors" }
  );
  const data = await response.json();

  const temp = data.main.temp;
  const weatherDesc = data.weather[0].description;
  const humidity = data.main.humidity;

  return { temp, weatherDesc, humidity };
};

const addToDOM = (city, state, temp, weatherDesc, humidity) => {
  const outputCity = document.getElementById("output-city");
  const outputState = document.getElementById("output-state");
  const outputTemp = document.getElementById("output-temp");
  const outputWeatherDesc = document.getElementById(
    "output-weather-description"
  );
  const outputHumidity = document.getElementById("output-humidity");

  outputCity.textContent = city;
  outputState.textContent = state;
  outputTemp.textContent = temp;
  outputWeatherDesc.textContent = weatherDesc;
  outputHumidity.textContent = humidity;
};

const getBackgroundImage = async (city) => {
  const response = await fetch(`https://imsea.herokuapp.com/api/1?q=${city}`, {
    mode: "cors",
  });
  const imagesData = await response.json();
  addCityImageToDOM(imagesData);
};

const addCityImageToDOM = (data) => {
  const cityImageURL = data.results[0];
  document.querySelector(
    "section"
  ).style.backgroundImage = `url('${cityImageURL}')`;
};

const citySelect = document.getElementById("city-input");
const inputForm = document.getElementById("city-form");
inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const geolocation = await getGeolocation(citySelect.value);
  const weatherData = await getWeatherData(geolocation.lat, geolocation.lon);
  addToDOM(
    geolocation.name,
    geolocation.state,
    weatherData.temp,
    weatherData.weatherDesc,
    weatherData.humidity
  );
  getBackgroundImage(geolocation.name);
  citySelect.value = "";
});

const getGeolocation = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&&appid=${WEATHER_API_KEY}`,
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

autocomplete(citySelect, ["Czechia", "Czele", "Czucge", "Slovakia"]);

// default script
getBackgroundImage(city);
const geolocation = getGeolocation(city);
geolocation.then((gData) => {
  const wData = getWeatherData(gData.lat, gData.lon);
  wData.then((dat) => {
    addToDOM(gData.name, gData.state, dat.temp, dat.weatherDesc, dat.humidity);
  });
});
