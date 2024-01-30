function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.WEATHER_KEY}&units=matrix`;
  fetch(weather_url).then(response => response.json()).then(data => console.log(data.name, data.weather[0].main));
}

function onGeoError() {
  alert("Can't find you. No weather info");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);