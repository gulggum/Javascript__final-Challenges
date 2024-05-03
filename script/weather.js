const API_KEY = "7814141e7adf66464a0e5e26acf7e97a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:first-child");
      const weather = document.querySelector(".weather span:last-child");
      weather.innerText = `${data.main.temp}°C ${data.weather[0].main}`;
      city.innerText = `${data.name}`;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
