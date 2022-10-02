import "./style.css";

const WEATHER_API_KEY = "3a6f70508651c854d613ffe499c8360a";
const lat = "49.820923";
const lon = "18.262524";

const getWeatherDate = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  getFromResponse(weatherData);
};

getWeatherDate(lat, lon);

const addToDOM = (city, temp, weatherDesc, humidity) => {
  const outputCity = document.getElementById("output-city");
  const outputTemp = document.getElementById("output-temp");
  const outputWeatherDesc = document.getElementById(
    "output-weather-description"
  );
  const outputHumidity = document.getElementById("output-humidity");

  outputCity.textContent = city;
  outputTemp.textContent = temp;
  outputWeatherDesc.textContent = weatherDesc;
  outputHumidity.textContent = humidity;
};

const getFromResponse = (data) => {
  const city = data.name;
  const temp = data.main.temp;
  const weatherDesc = data.weather[0].description;
  const humidity = data.main.humidity;
  addToDOM(city, temp, weatherDesc, humidity);
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
  document.body.style.backgroundImage = `url('${cityImageURL}')`;
};

const city = "Ostrava";

getBackgroundImage(city);

// const citySelect = document.getElementById("city-input");
// citySelect.addEventListener("keyup", (e) => {
//   const textInputValue = getText;
//   console.log(textInputValue());
//   // getAutocompletePredictions(textInputValue);
// });

// const getText = () => citySelect.value;

// const getAutocompletePredictions = async (textInputValue) => {
//   const autocompleteURL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${textInputValue}&types=(cities)&key=${GMAPS_API_KEY}`;
//   const response = await fetch(autocompleteURL, { mode: "cors" });
//   const predictionData = await response.json();
//   console.log(predictionData);
// };
