import "./style.css";
import { autocomplete } from "./autocomplete";

const BING = process.env.BING_API;
const WEATHER = process.env.WEATHER_API;

const city = "Ostrava";

// main function, retrieves all data based on user input
const submitCity = async () => {
  const geolocation = await getGeolocation(citySelect.value);
  const weatherData = await getFutureWeatherData(
    geolocation.lat,
    geolocation.lon
  );
  addWeatherData(
    geolocation.name,
    geolocation.state,
    weatherData.dayNames,
    weatherData.temps,
    weatherData.winds,
    weatherData.humids,
    weatherData.icons
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

const getFutureWeatherData = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&cnt=40&lat=${lat}&lon=${lon}&appid=${WEATHER}`,
    { mode: "cors" }
  );
  const listedData = await response.json();
  const unsortedData = listedData.list;
  const data = unsortedData.filter((day) => {
    const date = new Date(day.dt_txt);
    const today = new Date(Date.now());
    if (date.getDay() == today.getDay()) {
      return true;
    }
    const hour = date.getHours();
    return hour == 12;
  });
  const dayNames = data.map((day) => {
    const date = new Date(day.dt_txt);
    const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      date
    );
    return today;
  });
  const temps = data.map((day) => day.main.temp);
  const winds = data.map((day) => day.wind.speed);
  const humids = data.map((day) => day.main.humidity);
  const icons = data.map((day) => day.weather[0].icon);

  return { temps, winds, humids, icons, dayNames };
};

const addWeatherData = (
  cityName,
  countryName,
  dayNames,
  dayTemps,
  dayWinds,
  dayHumids,
  dayIcons
) => {
  const outputCity = document.getElementById("output-city");
  const outputCountry = document.getElementById("output-state");
  outputCity.textContent = cityName;
  outputCountry.textContent = countryName;

  const days = document.getElementsByClassName("day");

  for (let i = 0; i < days.length; i++) {
    days[i].childNodes.forEach((item) => {
      if (item.nodeType == 3) return;
      const itemClass = Array.from(item.classList)[0];
      switch (itemClass) {
        case "day-name":
          item.textContent = dayNames[i];
          break;
        case "day-temp":
          item.textContent = `${dayTemps[i]}`.substring(0, 4) + " °C";
          break;
        case "day-humid":
          item.textContent = dayHumids[i] + " %";
          break;
        case "day-wind":
          item.textContent = `${dayWinds[i]}`.substring(0, 3) + " km/h";
          break;
        case "day-icon":
          const icon = `<img src="https://openweathermap.org/img/wn/${dayIcons[i]}@2x.png" alt="weather icon"/>`;
          item.innerHTML = icon;
          break;
        default:
          console.log(item);
          break;
      }
    });
  }
};

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
  const wData = getFutureWeatherData(gData.lat, gData.lon);
  wData.then((dat) => {
    addWeatherData(
      gData.name,
      gData.state,
      dat.dayNames,
      dat.temps,
      dat.winds,
      dat.humids,
      dat.icons
    );
  });
});
