import "./style.css";

const API_KEY = "3a6f70508651c854d613ffe499c8360a";
const lat = "49.820923";
const lon = "18.262524";

const getWeatherDate = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lang=cz&units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((data) => getFromResponse(data))
    .catch((err) => console.log(err));
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
