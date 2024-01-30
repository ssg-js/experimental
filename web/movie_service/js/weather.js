const WEATHER_KEY = "weather";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.WEATHER_API_KEY}&units=metric`;
  fetch(weather_url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector(`#${WEATHER_KEY} span:first-child`);
      const city = document.querySelector(`#${WEATHER_KEY} span:last-child`);
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather info");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);