const API_KEY = "1a3b549e9a9441b4dca49b5295a7f46d";

function onGeoOK(posision) {
  const lat = posision.coords.latitude;
  const lon = posision.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.textContent = data.name;
      weather.textContent = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
